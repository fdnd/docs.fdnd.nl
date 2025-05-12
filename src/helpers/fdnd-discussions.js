import 'dotenv/config'

import { Octokit } from '@octokit/core'
import { h } from 'hastscript'
import { hasProperty } from 'hast-util-has-property'
import { headingRank } from 'hast-util-heading-rank'
import { paginateGraphQL } from '@octokit/plugin-paginate-graphql'
import { slug } from 'github-slugger'
import { visit } from 'unist-util-visit'

const MyOctokit = Octokit.plugin(paginateGraphQL)
const octokit = new MyOctokit({ auth: `token ${process.env.GITHUB_TOKEN}` })
const response = await octokit.graphql.paginate(`
  query paginate($cursor: String) {
    organization(login: "fdnd") {
      repository(name: "docs.fdnd.nl") {
        discussions(first: 100, after: $cursor, states: OPEN) {
          pageInfo {
            hasNextPage
            endCursor
          }
          nodes {
            category {
              slug
            }
            title
            author {
              login
            }
            comments {
              totalCount
            }
            body
            url
          }
        }
      }
    }
  }
`)
const allDiscussions = response.organization.repository.discussions.nodes

export default function fdndDiscussions(options = {}) {
  return (tree, file) => {
    if (options.discussions) {
      const filenameSlug = slug(file.menu.find((item) => item.basename === file.basename).menuname)
      const discussions = allDiscussions.filter((discussion) => discussion.category.slug === filenameSlug)

      visit(tree, 'element', (node, index, parent) => {
        if (headingRank(node) && node.properties && hasProperty(node, 'id')) {
          const ontopic =
            discussions.length > 0 ? discussions.filter((discussion) => discussion.title === node.properties.id) : null

          node.children.push(
            h(
              'a',
              {
                'aria-hidden': 'true',
                href: `https://github.com/fdnd/docs.fdnd.nl/discussions/new?category=${filenameSlug}&title=${node.properties.id}`,
                class: 'discussion-link',
                title: 'Start een nieuwe discussie',
              },
              h('span', { class: 'icon icon-new-discussion' })
            )
          )

          if (ontopic !== null) {
            ontopic.forEach((discussion) => {
              parent.children.splice(
                index + 1,
                0,
                h('aside', { class: 'discussion' }, [
                  h('span', `${discussion.author.login}: `),
                  `${discussion.body} `,
                  h('span', [
                    `${discussion.comments.totalCount} reacties, `,
                    h('a', { href: discussion.url }, 'reageer'),
                  ]),
                ])
              )
            })
          }
        }
      })
    }
  }
}

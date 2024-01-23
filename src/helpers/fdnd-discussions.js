import 'dotenv/config'

import { graphql } from '@octokit/graphql'
import { h } from 'hastscript'
import { hasProperty } from 'hast-util-has-property'
import { headingRank } from 'hast-util-heading-rank'
import { slug } from 'github-slugger'
import { visit } from 'unist-util-visit'

const graphqlWithAuth = graphql.defaults({
  headers: { authorization: `token ${process.env.GITHUB_TOKEN}` },
})
const response = await graphqlWithAuth(`
  {
    organization(login: "fdnd") {
      repository(name: "docs.fdnd.nl") {
        discussions(first: 100, states: OPEN) {
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
            bodyHTML
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
    const filenameSlug = slug(file.menu.find((item) => item.basename === file.basename).menuname)
    const discussions = allDiscussions.filter((discussion) => discussion.category.slug === filenameSlug)

    visit(tree, 'element', (node) => {
      if (headingRank(node) && node.properties && hasProperty(node, 'id')) {
        const discussion =
          discussions.length > 0 ? discussions.find((discussion) => discussion.title === node.properties.id) : null

        if (discussion) {
          node.children.push(
            h(
              'a',
              { 'aria-hidden': 'true', href: discussion.url, class: 'discussion-link', title: 'Ga naar de discussie' },
              h('span', { class: 'icon icon-discussion' })
            )
          )
        } else {
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
        }
      }
    })
  }
}

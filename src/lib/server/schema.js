import { gql } from 'graphql-request'

export const getDocuments = gql`
  query getDocuments {
    documents(first: 10) {
      id
      title
      summary {
        html
      }
      slug
      linkTo(first: 100) {
        __typename
        ... on Chapter {
          id
          title
          slug
          pages {
            id
            title
            slug
          }
        }
        ... on ExternalLink {
          id
          label
          url
        }
        ... on Page {
          id
          title
          slug
        }
      }
    }
  }
`

export const getPage = gql`
  query getPage($slug: String!) {
    page(where: { slug: $slug }) {
      title
      slug
      chapter {
        title
      }
      content {
        html
      }
    }
  }
`

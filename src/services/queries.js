import { gql } from 'apollo-boost'

export const getRepos = gql`
  query userRepos($login: String!) {
    user(login: $login) {
      repositories(
        first: 10
        privacy: PUBLIC
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        nodes {
          id
          name
          description
          createdAt
          primaryLanguage {
            name
          }
        }
      }
    }
  }
`

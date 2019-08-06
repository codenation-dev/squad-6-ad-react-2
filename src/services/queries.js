import { gql } from 'apollo-boost'

export const userQuery = gql`
  query userRepos($login: String!) {
    user(login: $login) {
      id
      avatarUrl
      email
      login
      name
      location
      repositories(
        first: 100
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

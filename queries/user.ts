import { gql } from "@apollo/client";

export const GET_USER = gql`
query GetUser($username: String!) {
  user(username: $username) {
    username
    joined
    picture
    packages {
      name
      organization
    }
    organizations {
      name
    }
  }
}
`

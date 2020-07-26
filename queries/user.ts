import { gql } from "@apollo/client";

export const GET_USER = gql`
query GetUser($nickname: String!) {
  user(nickname: $nickname) {
    nickname
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

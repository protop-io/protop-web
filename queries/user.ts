import { gql } from "@apollo/client";

export const GET_USER_BY_USERNAME = gql`
query GetUserByUsername($username: String!) {
  userByUsername(username: $username) {
    username
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

export const GET_USER_BY_NICKNAME = gql`
query GetUserByNickname($nickname: String!) {
  userByNickname(nickname: $nickname) {
    username
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

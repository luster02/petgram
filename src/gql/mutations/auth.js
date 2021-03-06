import { gql } from '@apollo/client'

export const REGISTER = gql`
  mutation signup($input:UserCredentials!) {
    signup (input: $input)
  }
`

export const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login (input: $input)
  }
`
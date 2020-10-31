import { gql } from '@apollo/client'

export const GET_PHOTOS = gql`
   query GetPhotos($categoryId: ID) {
      photos(categoryId: $categoryId) {
        id
        categoryId
        src
        likes
        liked
        userId
      }
    }
`
export const GET_PHOTO= gql `
  query GetPhoto($id: ID!){
    photo(id:$id){
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`
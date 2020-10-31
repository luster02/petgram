import React from 'react'
import { useQuery } from '@apollo/client'
import { PhotoCard } from '../PhotoCard'
import { List } from './styles'
import { GET_PHOTOS } from '../../gql/queries/photos.queries'
import { useCategory } from '../../context/CategoryContext'

export const ListPhotos = () => {
    const { categoryId } = useCategory()
    const { data } = useQuery(GET_PHOTOS, {
        variables: {
            categoryId: categoryId
        }
    })
    const { photos = [] } = data || {}

    return (
        <List>
            {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
        </List>
    )
}

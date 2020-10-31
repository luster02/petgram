import React, { useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { PhotoCard } from '../components/PhotoCard/index'
import { GET_PHOTO } from '../gql/queries/photos.queries'

export const Detail = ({ id }) => {
    const [exec, { data }] = useLazyQuery(GET_PHOTO, {
        variables: {
            id
        }
    })
    const { photo = {} } = data || {}


    useEffect(() => {
        exec()
    }, [id, exec])


    return (
        <PhotoCard {...photo} />
    )
}

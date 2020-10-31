import React from 'react'
import { useMutation } from '@apollo/client'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Button } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { LIKE_PHOTO } from '../../gql/mutations/likes'

export const LikeButton = ({ likes = 0, id }) => {
    const key = `like-${id}`
    const [like, setLike] = useLocalStorage(key, false)
    const [mutate] = useMutation(LIKE_PHOTO, {
        errorPolicy: 'all',
    })

    function toggleLike() {
        !like && mutate({
            variables: {
                input: { id }
            }
        })
        setLike(!like)
    }

    const Icon = like ? MdFavorite : MdFavoriteBorder

    return (
        <Button onClick={toggleLike} >
            <Icon size="32px" /> {likes} likes
        </Button>
    )
}

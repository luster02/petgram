import React from 'react'
import { Anchor, Image } from './styles'
import { useCategory } from '../../context/CategoryContext'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, id = 1, emoji = '?' }) => {
    const { setCategoryId } = useCategory()

    return (
        <Anchor onClick={() => setCategoryId(id)}>
            <Image src={cover} alt="cover" />
            {emoji}
        </Anchor>
    )
}
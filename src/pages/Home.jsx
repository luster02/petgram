import React from 'react'
import { CategoryProvider } from '../context/CategoryContext'
import { ListCategories } from '../components/ListCategories'
import { ListPhotos } from '../components/ListPhotos'

export const Home = () => {
    return (
        <CategoryProvider>
            <ListCategories id={1} />
            <ListPhotos />
        </CategoryProvider>
    )
}

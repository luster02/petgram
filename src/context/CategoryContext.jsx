import React, { useState } from 'react'

const CategoryContext = React.createContext()

export function CategoryProvider(props) {
    const [categoryId, setCategoryId] = useState(1)

    const value = {
        categoryId,
        setCategoryId
    }

    return <CategoryContext.Provider value={value} {...props} />
}

export function useCategory() {
    const context = React.useContext(CategoryContext)
    if (!context) throw new Error('useCategory is out from provider')
    return context
}
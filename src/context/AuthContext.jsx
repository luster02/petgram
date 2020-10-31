import React, { useState } from 'react'

const AuthContext = React.createContext()

export function AuthProvider(props) {
    const [isAuth, setIsAuth] = useState(false)

    function activateAuth() {
        setIsAuth(true)
    }

    const value = {
        isAuth,
        activateAuth
    }

    return <AuthContext.Provider value={value} {...props} />
}

export function useAuth() {
    const context = React.useContext(AuthContext)
    if (!context) throw new Error('useAuth is out from provider')
    return context
}
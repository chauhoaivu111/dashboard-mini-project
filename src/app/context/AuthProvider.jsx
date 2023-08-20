"use client"

import React, { useContext, createContext, useState } from 'react'
const AuthContext = createContext()
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('')
    const [auth, setAuth] = useState(false);
    return (
        <AuthContext.Provider value={{ user, setUser, auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const Context = () => useContext(AuthContext) 
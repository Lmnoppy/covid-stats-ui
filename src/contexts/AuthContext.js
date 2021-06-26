import React, { useContext, useState } from "react"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

const developmentUser = {
    credentials: {
        userId: 'abc',
        userName: 'userName',
        password: '',
        email: 'user@email.com',
        isActive: true,
        createdAt: '2020-11-22T11:08:02.805Z',
        imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
        lastLoggedIn:'2020-11-22T11:08:02.805Z',
        token:'abc'
    },
    userInfo: {
        firstName:'firstName',
        lastName:'lastName',
        bio: 'Hello, my name is user, nice to meet you',
        website: 'website',
        youtubeId: 'website',
        twitchId: 'website',
        twitterId: 'website',
        discordId: 'website',
        location: 'Glasgow, UK',
    },
    userStats: {
    }
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        setCurrentUser(developmentUser)
        setLoading(false)
        return currentUser;
    }

    function login(email, password) {
        setCurrentUser(developmentUser)
        setLoading(false)
        return currentUser;
    }

    const value = {
        currentUser,
        login,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
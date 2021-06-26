import React, {useContext, useState} from "react";
import axios from "axios";
import {axiosHeaders, url} from "../utils/AxiosConfig";

const AuthContext = React.createContext(null)

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState({})
    const [loading, setLoading] = useState(false)
    const [authError, setAuthError] = useState([])

    function signup(userDetails) {
        setAuthError([])
        return axios.post(url + '/signUp', userDetails)
            .then(response => {
                return (response.data)
            }).then((data) => {
                setAuthError([]);
                setCurrentUser(data);
                setLoading(false);
            }).catch((err) => {
                setCurrentUser({});
                setAuthError(err.response.data);
                setLoading(false);
            });
    }

    async function login(userDetails) {
        setAuthError([])
        let user = {};
        const token = await axios.post(url + '/login', userDetails)
            .then(response => {
                return (response.data)
            }).catch((err) => {
                console.log(err);
                setCurrentUser({});
                setAuthError(err.response.data);
                console.log(authError);
            });
        if (token && token.token){
            console.log("token was found, getting user details")
            await axios.get(url + '/getAuthenticatedUser', axiosHeaders(token.token))
                .then((response) => {
                    setAuthError([]);
                    user = {
                        credentials: response.data.credentials,
                        token: token.token,
                        userInfo: response.data.userInfo,
                        userStats: response.data.userStats
                    };
                }).catch((err) => {
                    console.log(err);
                    setCurrentUser({});
                    setAuthError(err.response.data);
                });
            if (user && user.token) {
                console.log("user details received", user )
                setCurrentUser(user);
                console.log("logged in as...", currentUser)
            }
        } else console.log("an error has occurred");
    }

    const value = {
        currentUser,
        login,
        authError,
        loading,
        signup,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
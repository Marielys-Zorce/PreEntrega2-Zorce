import { createContext, useState, useContext, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/config";

// const MOCK_USERS = [
//     {
//         email: 'profe@coder.com',
//         password: 'admin'
//     },
//     {
//         email: 'tutor@coder.com',
//         password: 'coder'
//     },
//     {
//         email: 'john@doe.com',
//         password: 'coder'
//     },
// ]
export const LoginContext = createContext()

export const useLoginContext = () => {
    return useContext(LoginContext)
}

export const LoginProvider = ({ children }) => {
    const [loading, setLoading] = useState (false)
    const [user, setUser] = useState({
        email: null,
        logged: false,
        error: null
    })

    console.log(user)

    const login = (values) => {
        setLoading(true)

        signInWithEmailAndPassword(auth, values.email, values.password)
            // .then((userCredential) => {
            //     setUser({
            //         email: userCredential.user.email,
            //         logged: true,
            //         error: null
            //     })
            // })
            .catch((error) =>{
                console.log(error)
                setUser({
                    email: null,
                    logged: false,
                    error: error.message
                })
            })
            .finally(() => setLoading(false))
    }

        // setTimeout(() => {

        //     const match = MOCK_USERS.find(user => user.email === values.email)

        //     if (!match) {
        //         setUser({
        //             email: null,
        //             logged: false,
        //             error: 'Usuario no es válido'
        //         })
        //         setLoading(false)

        //         return
        //     }

        //     if (match.password === values.password) {
        //         setUser({
        //             email: match.email,
        //             logged: true,
        //             error: null
        //         })
        //     } else {
        //         setUser({
        //             email: null,
        //             logged: false,
        //             error: 'Password no es válido'
        //         })
        //     }
            // setLoading(false)
        // }, 1500)

    

    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({
                email: null,
                logged: false,
                error: null
            })
        })      
    }

    const register = (values) => {
        setLoading(true)

        createUserWithEmailAndPassword(auth, values.email, values.password)
            // .then((userCredential) => {
            //     setUser({
            //         email: userCredential.user.email,
            //         logged: true,
            //         error: null
            //     })
            // })
            .catch((error) =>{
                console.log(error)
                setUser({
                    email: null,
                    logged: false,
                    error: error.message
                })
            })
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    email: user.email,
                    logged: true,
                    error: null
                })
            } else{
                logout()
            }
        })
    }, [])

    return (
        <LoginContext.Provider value={{ user, login, logout, loading, register }}>
            {children}

        </LoginContext.Provider>
    )
}

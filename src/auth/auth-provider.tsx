import React, { useContext, useState, useEffect, createContext } from 'react'
import { firebase } from '../init-firebase'

type authContextType = {
    user: firebase.User | null
    loading: boolean
    signInWithEmail: (email: string) => Promise<void>
    signOut: () => void
    googleSignIn: () => Promise<void>
}

const authContext = createContext<authContextType>({
    user: null,
    loading: true,
    signInWithEmail: () => new Promise(() => {}),
    signOut: () => {},
    googleSignIn: () => new Promise(() => {})
})

const AuthProvider: React.FC<{}> = ({ children }) => {
    const [user, setUser] = useState<firebase.User | null>(null)
    const [loading, setLoading] = useState(true)

    const autoSignIn = () => {
        if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
            let email = window.localStorage.getItem('emailForSignIn')
            if (!email) {
                email = window.prompt(
                    'Please provide your email for confirmation'
                )
            }
            firebase
                .auth()
                .signInWithEmailLink(email || '', window.location.href)
                .then(() => {
                    window.localStorage.removeItem('emailForSignIn')
                })
                .catch(error => {
                    alert('連結巳過期，請重新登入')
                    console.error('sign in with email: ', error)
                })
        }
    }

    const signInWithEmail = async (email: string): Promise<void> => {
        const actionCodeSettings = {
            url: process.env.REACT_APP_HOME_URL || '',
            handleCodeInApp: true
        }

        try {
            await firebase
                .auth()
                .sendSignInLinkToEmail(email, actionCodeSettings)

            // Save the email locally so you don't need to ask the user for it again
            // if they open the link on the same device.
            window.localStorage.setItem('emailForSignIn', email)
        } catch (error) {
            console.error('error code: ', error.code)
            console.error('error msg: ', error.message)
            throw error
        }
    }

    const signOut = () => firebase.auth().signOut()

    const googleSignIn = async (): Promise<void> => {
        const provider = new firebase.auth.GoogleAuthProvider()

        try {
            await firebase.auth().signInWithPopup(provider)
        } catch (error) {
            const { code, message, email, credential } = error

            console.log('error: ', code)
            console.log('message: ', message)
            console.log('email: ', email)
            console.log('credential: ', credential)
            throw error
        }
    }

    useEffect(() => {
        autoSignIn()
        const unsubscribe = firebase.auth().onAuthStateChanged(result => {
            setUser(result)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    return (
        <authContext.Provider
            value={{ user, loading, signInWithEmail, signOut, googleSignIn }}
        >
            {children}
        </authContext.Provider>
    )
}

const useAuth = () => useContext(authContext)

export { AuthProvider, useAuth }

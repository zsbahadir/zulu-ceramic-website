'use client'
//import React
import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode
} from 'react'
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  User
} from 'firebase/auth'
import { auth } from '@/app/firebase/firebase.config'

interface AuthContextProps {
  children: ReactNode
}

interface AuthContextType {
  user: User | null // Assuming User is the type from 'firebase/auth'
  googleSignIn: () => void
  logOut: () => void
}

// export const AuthContext = createContext()
export const AuthContext = createContext<AuthContextType | undefined>(undefined)

// export const UserAuth = () => useContext(AuthContext)

export function UserAuth () {
  return useContext(AuthContext)
}

export const AuthContextProvider = (props: AuthContextProps) => {
  const { children } = props

  const [user, setUser] = useState<User | null>(null)

  console.log('context sayfasindaki', user)

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
  }

  const logOut = () => {
    signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [user])

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider

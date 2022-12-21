import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { createContext, useState, useEffect } from 'react'
import { auth } from '../../firebase'

export const UserContext = createContext()

export const UserProvider = (props) => {
  const [user, setUser] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, phoneNumber, photoURL, uid } = user
        setUser({ email, displayName, phoneNumber, photoURL, uid })
      } else {
        setUser(null)
      }
    })

    return () => unsubscribe()
  }, [])

  const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password)
  const signOutUser = () => signOut(auth)

  return (
    <UserContext.Provider value={{ user, setUser, loginUser, signOutUser }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider

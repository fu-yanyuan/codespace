import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase/firebase';

const AuthContext = createContext(null)

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usr) => {
      usr ? setUser(usr) : setUser(null)
    })
    return unsubscribe
  }, [])

  const value = {
    user
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
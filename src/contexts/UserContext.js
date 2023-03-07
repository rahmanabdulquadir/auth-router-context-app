import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'


export const authContext = createContext()

const auth = getAuth(app)

const UserContext = ({children}) => {

  const [user, setUser] = useState({displayName: 'shakib'})

  const googleProvider = new GoogleAuthProvider()

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email,password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      console.log('auth state changed', currentUser)
    })

    return () => {
      unsubscribe()
    } 
  }, [])

  const logOut = () => {
    return signOut(auth)
  }

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
  }
  

  const authInfo = {user, createUser, signIn, logOut, googleSignIn}
  return (
    <authContext.Provider value={authInfo}>
      {children}
    </authContext.Provider>
  );
};

export default UserContext;
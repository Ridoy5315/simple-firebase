import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../simple-context-api';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
  
     const createUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password);
     }

     const signInUser = (email , password) => {
          return signInWithEmailAndPassword(auth, email, password);
     }

     const signOutUser = () => {
          signOut(auth);
     }

     const signInWithGoogle = () => {
          return signInWithPopup(auth, googleProvider);
     }
 
     useEffect(() => {
          const unSubscribe = onAuthStateChanged(auth, currentUser => {
               if(currentUser){
                    console.log('Current user available', currentUser);
                    setUser(currentUser);
                    setLoading(false);
               }
               else{
                    setUser(null);
               }
               
          })
          return()=> {
               unSubscribe();
          }
     }, [])

     

     const AuthInfo = {
          loading,
          createUser,
          signInUser,
          user,
          signInWithGoogle,
          signOutUser
     }

     return (
          <AuthContext.Provider value={AuthInfo}>
               {children}
          </AuthContext.Provider>
     );
};

AuthProvider.propTypes = {
     
};

export default AuthProvider;
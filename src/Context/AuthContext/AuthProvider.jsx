import React, {  createContext, useEffect, useState } from 'react';
import auth from './../../firebace/Firebace.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
export const Authcontext  = createContext()
const AuthProvider = ({children}) => {
    const[users,setusers] = useState(null)
    const [loading,setloading] = useState(true)
    const provider = new GoogleAuthProvider();
    const userregister = (email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userslogin = (email,password)=>{
        setloading(true)
     return   signInWithEmailAndPassword(auth, email, password)
    }

    const updateuserprofile =(profile)=>{
      return  updateProfile(auth.currentUser,profile)

    }
    const usersgooglelogin = ()=>{
        return signInWithPopup(auth, provider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentuser=>{
            setusers(currentuser)
            setloading(false)
        })
        return()=>{
            unsubscribe()
        }
    },[])
    const usersignout = () => {
   return signOut(auth)
    }
      
    const authdata = {
        userregister,
        loading,
        users,
        userslogin ,
        updateuserprofile,
        usersignout,
        usersgooglelogin,

    }
    return (
        <Authcontext.Provider value={authdata}>
            {children}
            
        </Authcontext.Provider>
    );
};

export default AuthProvider;
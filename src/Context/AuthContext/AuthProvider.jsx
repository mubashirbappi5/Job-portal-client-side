import React, {  createContext, useEffect, useState } from 'react';
import auth from './../../firebace/Firebace.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import axios from 'axios';
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
            console.log(currentuser?.email)
            if(currentuser?.email){
                const user = {email:currentuser.email}
                axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
                .then(res=>{
                    setloading(false)
                    console.log(res.data)})
            }
            else{
                axios.post('http://localhost:5000/logout',{},{withCredentials:true})
                .then(res=>{
                    setloading(false)
                    console.log('logout',res.data)
                })
            }
           
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
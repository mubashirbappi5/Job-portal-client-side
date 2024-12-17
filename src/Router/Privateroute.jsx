import React, { useContext } from 'react';
import  { Authcontext } from '../Context/AuthContext/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

import { HashLoader } from 'react-spinners';
import { div } from 'motion/react-client';

const Privateroute = ({children}) => {
   const {users,loading} = useContext(Authcontext)
   const location = useLocation()
   if(loading){
    return <div className='flex justify-center items-center min-h-screen'> <HashLoader /></div>
   }
    if(users){
        return children
    }
    return (
        <div>
            <Navigate to={'/signin'} state={location.pathname}></Navigate>
    
            
        </div>
    );
};

export default Privateroute;
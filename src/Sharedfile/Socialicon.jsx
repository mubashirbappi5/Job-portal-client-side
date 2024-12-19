import React, { useContext } from 'react';
import { Authcontext } from '../Context/AuthContext/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Socialicon = () => {
    const {usersgooglelogin} = useContext(Authcontext)
    const location = useLocation()
    const navigate = useNavigate()
    const handlegooglelogin = ()=>{
        usersgooglelogin()
        .then(res=>{
           
          
           

            navigate(location?.state?location.state:'/')
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <div className="divider">OR</div>
           <div className='my-5 flex justify-center'>
           <button onClick={handlegooglelogin} className='btn'>Google with Login</button>
            
           </div>
        </div>
    );
};

export default Socialicon;
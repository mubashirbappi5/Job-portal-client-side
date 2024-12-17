import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerlottie from '../assets/lotteie/Animation - 1734073596666.json'
import { Authcontext } from '../Context/AuthContext/AuthProvider';
import Socialicon from '../Sharedfile/Socialicon';
import { useLocation, useNavigate } from 'react-router-dom';

const Signin = () => {
    const {  userslogin} = useContext(Authcontext)
    const location = useLocation()
    const navigate = useNavigate()
    const handlelogin = (e)=>{
        e.preventDefault();

        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password)

        userslogin(email,password)
        .then(res=> {
            console.log(res.user)
            form.reset()
            navigate(location?.state?location.state:'/')
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
             <div className='bg-base-200 p-7'>
            <h1 className="text-5xl font-bold text-center ">Log in now!</h1>
         <div className="hero  min-h-screen ">
            
  <div className="hero-content flex-col lg:flex-row-reverse gap-10">
    <div className="text-center lg:text-left">
 <div className='w-96'>
        
 <Lottie animationData={registerlottie}></Lottie>
 </div>
    </div>
    <div className="card hover:bg-base-200 bg-base-100 w-full max-w-sm shrink-0 border-2 border-sky-400">
    
      <form onSubmit={handlelogin} className="card-body">
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password"  name='password' className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-purple-500">Log in</button>
        </div>
      </form>
      <div>
        <Socialicon/>
      </div>
    </div>
    
  </div>
</div>
            
        </div>
            
        </div>
    );
};

export default Signin;
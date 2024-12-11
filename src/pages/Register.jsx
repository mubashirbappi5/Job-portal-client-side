import Lottie from 'lottie-react';
import React from 'react';

import registerlottie from '../assets/lotteie/Animation - 1733903768326.json'
const Register = () => {


    const handleregister = (e)=>{
        e.preventDefault()
        const form = e. target
        const name =  form.name.value 
        const email = form.email.value
        const password = form.password.value
        console.log(name,email,password)

        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if(!regex.test(password)){
            alert("invalid password")
            return
        }

    }
    return (
        <div className='bg-base-200 p-7'>
            <h1 className="text-5xl font-bold text-center ">Register now!</h1>
         <div className="hero  min-h-screen ">
            
  <div className="hero-content flex-col lg:flex-row-reverse gap-10">
    <div className="text-center lg:text-left">
 <div className='w-96'>
        
 <Lottie animationData={registerlottie}></Lottie>
 </div>
    </div>
    <div className="card hover:bg-base-200 bg-base-100 w-full max-w-sm shrink-0 border-2 border-sky-400">
    
      <form onSubmit={handleregister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Full Name" name='name' className="input input-bordered" required />
        </div>
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
          <button className="btn bg-purple-500">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Register;
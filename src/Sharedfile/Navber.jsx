import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../Context/AuthContext/AuthProvider";
import { Typewriter } from "react-simple-typewriter";

const Navber = () => {
  const {users,usersignout} = useContext(Authcontext)
  const signouthandle = ()=>{
    usersignout()
    .then(()=>{
      alert('sign out done!')
    })
    .catch(error=>{
      console.log(error)
    })
  }
  const links = (
    <>
     <Link to={'/'}> <li>
      Home
      </li></Link>
      
     <Link to={'/myapplication'}> <li>
      My Application
      </li></Link>
      
     <Link to={'/addjob'}> <li>
     Add Job
      </li></Link>
      
     <Link to={'/myjobs'}> <li>
      My Jobs
      </li></Link>
      
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 gap-4 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="w-10 h-10" src="https://img.icons8.com/?size=100&id=AzGvAa3tTD17&format=png&color=000000" alt="" />
            CAREER-
            <span className="text-sky-400">
            <Typewriter
            words={['CODE']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={500}
            deleteSpeed={400}
            delaySpeed={1000}
            
          />
            </span>
            </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
         {
          users?<div>
            <h1>{users?.email}</h1>
            <button className="btn" onClick={signouthandle}>Log out</button>
          </div>:
          <div className="flex gap-4 items-center">
             <Link to={'/register'} >Register</Link>
          
          <Link to={'/signin'} className="btn">Sign In</Link>
          </div>

         }
         
        </div>
      </div>
    </div>
  );
};

export default Navber;

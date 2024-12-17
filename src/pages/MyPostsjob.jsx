import React, { useEffect, useState } from 'react';
import UseAuth from '../Hooks/UseAuth';

const MyPostsjob = () => {
    const [myjobs,setmyjobs]=useState([])
    const {users} = UseAuth()

    useEffect(()=>{
        fetch(`http://localhost:5000/jobs?email=${users?.email}`)
        .then(res=>res.json())
        .then(data=>setmyjobs(data))

    },[])
    return (
        <div>
            <div className='min-h-screen w-10/12 mx-auto'>
            <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Job</th>
        <th>Dedline</th>
        <th>Application count</th>
       
      
      </tr>
    </thead>
   {
    myjobs.map((data,idx)=> <tbody>
        {/* row 1 */}
        <tr className="bg-base-200">
          <th>{idx+1}</th>
          <td>{data.title}</td>
          <td>{data.applicationDeadline}</td>
          <td>{data.application_count}</td>
         
      
        <td className=' flex gap-2'>
         
            <button 
         className='btn'>X</button>
        </td>
        
        </tr>
       
      </tbody>
              )
   }
  </table>
            
            </div>
            
            
        </div>
    );
};

export default MyPostsjob;
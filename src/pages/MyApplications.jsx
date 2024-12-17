import React, { useEffect, useState } from 'react';
import UseAuth from '../Hooks/UseAuth';

const MyApplications = () => {
    const {users} = UseAuth()
    const [myapplication,setmyapplication] = useState([])
   
    const handledelete =(id)=>{
        console.log(id)
        fetch(`http://localhost:5000/job-application?email=${users?.email}&id=${id}`, {
            method:"DELETE",
           headers: { 'Content-Type': 'application/json' },

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                const remingsapplocation = myapplication.filter(myapp=>myapp._id !=id)

                setmyapplication(remingsapplocation)
            }
        
        })
        
    }
    useEffect(()=>{
        fetch(`http://localhost:5000/job-application?email=${users?.email}`)
    .then(res=>res.json())
    .then(data=>setmyapplication(data))
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
        <th>Company</th>
       
      
      </tr>
    </thead>
   {
    myapplication.map((data,idx)=> <tbody>
        {/* row 1 */}
        <tr className="bg-base-200">
          <th>{idx+1}</th>
          <td>{data.title}</td>
          <td>{data.company}</td>
         
      
        <td className=' flex gap-2'>
         
            <button onClick={()=>handledelete(data._id)} className='btn'>X</button>
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

export default MyApplications;

import React from 'react';
import { useParams } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';

const JobApply = () => {
    const {id} = useParams()
    const {users} = UseAuth()
    console.log(id)
    const handleapplyfrom = (e)=>{
        e.preventDefault()
        const form = e.target 
        const linkedin = form.linkedin.value
        const github = form.github.value
        const resume = form.resume.value

        console.log(linkedin,github,resume)
        const jobapplication = {
            job_id:id,
            applicant_email:users.email,
            linkedin,
            github,
            resume

        }
        console.log(jobapplication)
        fetch('https://job-portal-server-seven-bice.vercel.app/job-application',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(jobapplication)
          

        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        
    }
    return (
        <div>
              
    <form onSubmit={handleapplyfrom}  className="card-body">
     
     <div className="form-control">
       <label className="label">
         <span className="label-text">Linkedin url</span>
       </label>
       <input type="url" placeholder="Linkedin id" name='linkedin' className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Github url</span>
       </label>
       <input type="url" placeholder="Github id"  name='github' className="input input-bordered" required />
     
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Resume url</span>
       </label>
       <input type="url" placeholder="Resume link"  name='resume' className="input input-bordered" required />
     
     </div>
     <div className="form-control mt-6">
       <button className="btn bg-purple-500">Apply</button>
     </div>
   </form>
        </div>
        
         

   
        
            
      
    );
};

export default JobApply;
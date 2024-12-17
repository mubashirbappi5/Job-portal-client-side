import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import hire from '.././assets/iamges/we-are-hiring-digital-collage.jpg'
import { Map, Marker } from "pigeon-maps"

const JobsDetails = () => {
    const jobdata = useLoaderData()
    const {_id,company,company_logo,location,title,jobType,category,applicationDeadline,responsibilities,status,hr_name,hr_email,salaryRange,requirements,description}=jobdata
    console.log(jobdata)
    return (
        <div className='w-11/12 mx-auto'>
            <div className=' h-72 rounded-xl my-8'>
                <img className='w-full h-full rounded-xl' src={hire} alt="" />
            </div>
            <div>
                <h1 className='text-3xl font-bold'>{title}</h1>
                <div>
                    <p>{jobType}</p>
                    <p>{applicationDeadline}</p>
                </div>

            </div>
            <div className="divider"></div>

           <section className='grid grid-cols-1 md:grid-cols-12 gap-5'>
           <div className='col-span-8 row-span-4'>
           <div>
                <h1>Welcome to {company} Hiring Team</h1>
               <p>{description}</p>
               <h1>Requirements & Skills</h1>
               {
                requirements.map(skill=><li>{skill}</li>)
               }
               <h1>Responsibilities</h1>
              
               {
                responsibilities.map(res=><li>{res}</li>)
               }
              
              <h1>Salary Range</h1>
              <p>{salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
            </div>
            <div className="divider"></div>
            <div className='flex gap-2 my-7'>
               <Link to={`/applyjob/${_id}`}> <button className="btn">Apply Job</button></Link>
                <button className="btn">Save Job</button>
            </div>
           </div>
           <div className='col-span-4 border rounded-lg row-span-2 p-5'>
            <div className='flex gap-2'>
                <img src={company_logo} alt="" />
               <div>
               <h1>{company}</h1>
               <p>{location}</p>
               </div>
            </div>
            <div className="divider"></div>
            <h1>Map</h1>
            <div className='border p-2 rounded-xl'>
            <Map height={300} defaultCenter={[23.8103, 90.4125]} defaultZoom={11}>
      <Marker width={50} anchor={[23.8103, 90.4125]} />
    </Map>
            </div>
            <div>
                <h1>{hr_name}</h1>
                <h2>Emaill: {hr_email}</h2>
            </div>

           </div>
           
           </section>
            
        </div>
    );
};

export default JobsDetails;
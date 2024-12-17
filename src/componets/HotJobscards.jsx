import React from 'react';
import { Link } from 'react-router-dom';

const HotJobscards = ({jobs}) => {
    console.log(jobs)
    const {_id,company,company_logo,location,title,requirements,description}=jobs
    return (
        <div className="card bg-base-100 p-5 border border-sky-300 shadow-xl">
  <div className='flex gap-2'>
  <figure>
    <img
    className='w-12'
      src={company_logo}
      alt="Shoes" />
  </figure>
 <div>
 <h2 className='text-xl font-bold'>{company}</h2>
 <p className='font-medium'>{location}</p>
 </div>
  </div>
  <div className="space-y-4 mt-6">
    <h2 className=" text-xl font-semibold">
     {title}
    
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
        {
          requirements.map(req=>  <div className="badge badge-outline">{req}</div>)  
        }
     
   
    </div>
    <div className='flex justify-end'>
        <Link to={`jobs/${_id}`}><button className='btn border-sky-600 text-sky-600'>Apply Now</button></Link>
    </div>
  </div>
</div>
    );
};

export default HotJobscards;
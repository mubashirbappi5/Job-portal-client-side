import React, { useEffect, useState } from 'react';
import HotJobscards from '../../componets/HotJobscards';

const HotJobs = () => {
    const [hotjob,sethotjob] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/jobs")
        .then(res=>res.json())
        .then(data=>sethotjob(data))
    },[])
    return (
        <div className='p-8'>
            <h1 className='text-3xl font-semibold text-center'>Hot Jobs</h1>
            <div className='mt-6 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    hotjob.map(jobs=> <HotJobscards key={jobs._id} jobs={jobs}/>)
                }

            </div>
        </div>
    );
};

export default HotJobs;
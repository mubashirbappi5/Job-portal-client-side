import React from 'react';

const AddJobs = () => {
    const handleaddjob = (e)=>{
      e.preventDefault()
      const formData = new FormData(e.target)
      const formObject = Object.fromEntries(formData.entries());
      console.log(formObject)
      const {min,max,currency, ...newobj}= formObject
      console.log(newobj)
      newobj.requirements = newobj.requirements.split('\n')
      newobj.responsibilities = newobj.responsibilities.split('\n')
      newobj.salaryRange={
        min,max,currency

      }
   console.log(newobj)
   fetch('http://localhost:5000/jobs',{
    method:'POST',
    headers:{
     "content-type":"application/json"
    },
    body:JSON.stringify(newobj)
   })
   .then(res=>res.json())
   .then(data=>{
    if(data.insertedId){
      alert('add done!')
    }
   })
    }
    return (
        <div>
             <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add a new JOB
        </h2>
        <form onSubmit={handleaddjob} >
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
               Job Name
              </label>
              <input
                type="text"
                name="title"
               
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder=" job name"
                required
              />
            </div>
            <div className="w-full">
              <label
               
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
               Location
              </label>
              <input
                type="text"
                name="location"
               
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="location"
                required
              />
            </div>
            <div className="w-full">
              <label
              
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
               Company
              </label>
              <input
                type="text"
                name="company"
             
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="company name"
                required
              />
            </div>
            <div className="w-full">
              <label
              
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
               Company logo
              </label>
              <input
                type="text"
                name="company_logo"
             
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="company name"
                required
              />
            </div>
            <div className="w-full">
              <label
              
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
              Email
              </label>
              <input
                type="email"
                name="hr_email"
             
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="HR Email"
                required
              />
            </div>
            <div className="w-full">
              <label
               
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
              Deadline
              </label>
              <input
                type="date"
                name="applicationDeadline"
               
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="location"
                required
              />
            </div>
            <div className="w-full">
              <label
              
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
              Salary Range
              </label>
             <div className='flex gap-2'>
             <input
                type="text"
                name="min"
             
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Min"
                required
              />
              <input
                type="text"
                name="max"
             
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Max"
                required
              />
               <select
                id="category"
                name='currency'
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option defaultValue="">currency</option>
                <option value="bdt">BDT</option>
                <option value="uro">URO</option>
                <option value="dollar">DOLLAR</option>
                <option value="rupea">RUPEA</option>
              </select>
             </div>
            </div>
            <div>
              <label
                
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <select
                id="category"
                name='category'
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option defaultValue="">Select category</option>
                <option value="Development">Development</option>
                <option value="Engineering">Engineering</option>
                <option value="Design">Design</option>
                <option value="Data Science">Data Science</option>
                <option value="Management">Management</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>
           
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
               Job Type
              </label>
              <select
                id="category"
                name='jobType'
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option defaultValue="">Select Jobtype</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Intern">Intern</option>
              </select>
            </div>
            <div className=" grid grid-cols-2 gap-5">
              <div >
              <label
               
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
             Requirements
              </label>
              <textarea
                id="description"
                rows="5"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your  Job  description here"
                name='requirements'
               
              ></textarea>
              </div>
              <div>
              <label
               
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
              Responsibilities
              </label>
              <textarea
                id="description"
                rows="5"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your  Job  description here"
                name='responsibilities'
              ></textarea>
              </div>
              
            </div>
           
            <div className="sm:col-span-2">
              <label
             
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
               Job Description
              </label>
              <textarea
                id="description"
                rows="8"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your  Job  description here"
                 name='description'
              ></textarea>
            </div>
           
          </div>
         <div className='flex justify-center my-5'>
         <input className='btn btn-wide bg-sky-300' type="submit" value="ADD JOB" />
         </div>
          
        </form>
      </div>
    </section>
            
        </div>
    );
};

export default AddJobs;
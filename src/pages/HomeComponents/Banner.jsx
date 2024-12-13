import React from 'react';
import { motion } from "motion/react"
import { easeInOut } from 'motion';
import team1 from '../../assets/iamges/team1.jpg'
import team2 from '../../assets/iamges/team2.jpg'
const Banner = () => {
    return (
        <div>
           <div className="hero bg-base-200 min-h-96">
  <div className="hero-content flex-col lg:flex-row-reverse">
   <div className='flex-1'>
   <motion.img
     animate={{y:[50,100,50]}}
     transition={{duration:5, repeat:Infinity }}
      src={team1}
      className="max-w-sm rounded-t-[50px] rounded-br-[50px] border-l-8 border-b-8 border-sky-600 shadow-2xl" />
   <motion.img
     animate={{x:[100,150,100]}}
     transition={{duration:5, delay:2.5, repeat:Infinity }}
      src={team2}
      className="max-w-sm rounded-t-[50px] rounded-br-[50px] border-l-8 border-b-8 border-sky-600 shadow-2xl" />
   </div>
    <div className='flex-1'>
      <motion.h1
       className="text-5xl font-bold"
      animate={{ x: [0,50,0]}}
      transition={{ duration: 5, ease: easeInOut, repeat:Infinity }}
      
      >The Easiest Way to Get Your < motion.span
      animate={{color:['#33f2ff','#3371ff','#33ff83']}}
      transition={{ duration: 1.5, delay: 1, ease: easeInOut,  repeat:Infinity }}
      
      > New Job</motion.span></motion.h1> <br />
     
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;
import React from 'react';

const Skills = () => {
    return (
        <div className="hero my-24">
  <div className="hero-content flex-col gap-24 lg:flex-row">
   
    <div className='w-1/2'>
     <p className='text-3xl font-bold text-blue-500'>Skills</p>
     <h1 className="my-5 text-4xl font-bold">
                         master in data science <br />
                       & big data analysis</h1>

        <div>
        <p className='flex justify-between text-blue-500 font-bold'> <span>DATA ANAYLSIS</span> <span>88%</span></p>
        <progress className="progress progress-accent h-4 my-2 " value="88" max="100"></progress>
        <p className='flex justify-between text-blue-500 font-bold'> <span>SOCIAL ASSISTANT</span> <span>95%</span></p>
        <progress className="progress progress-accent h-4 my-2 " value="95" max="100"></progress>
        <p className='flex justify-between text-blue-500 font-bold'> <span>AI SOLUTIONS</span> <span>70%</span></p>
        <progress className="progress progress-accent h-4 my-2 " value="88" max="100"></progress>
       
        </div>
                           
       
    </div>

    <div className='relative w-1/2 md:mb-24 mb-8'>
   <img src="https://i.ibb.co/FgnxQKT/1.jpg" alt="" className='w-4/5 h-full rounded-lg shadow-2xl' />
    <img src="https://i.ibb.co/5vqQGd5/3.jpg" alt=""  className='absolute right-5 top-1/2 w-3/5 border-8 rounded-lg'/>
   </div>
  </div>
</div>
    );
};

export default Skills;
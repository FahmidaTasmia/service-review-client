import React from 'react';

const Work = () => {
    return (
       <div className=' items-center md:py-12 shadow-sm rounded-md bg-gray-100'>
            <p className="text-lg font-bold text-center md:mb-4">WORK PROCESS</p>
                <h2 className="text-3xl font-bold text-center md:mb-8">How To Work</h2>
               

      <div className='grid md:grid-cols-3 gap-8 w-9/12 m-auto'>
          <div className=' p-12 items-center'>
          <div className="indicator rounded-full mx-12">
                <span className="indicator-item  badge bg-blue-500 border-none  font-bold p-3 ">01</span>
                <div className="grid w-32 h-32 bg-base-300  place-items-center rounded-md">
                    <img className='w-20 h-20' alt='' src="https://i.ibb.co/RjvSZTc/solution.png"  />
                </div>
            </div>

            <div className='text-center'>
                <h2 className='font-bold text-lg mt-2 text-blue-500'>Frame The Problem</h2>
                <p>Evening do forming observe spirits is in. Country hearted be of justice sending. </p>
            </div>
          </div>

          <div className=' p-12 items-center'>
          <div className="indicator rounded-full mx-12">
                <span className="indicator-item  badge bg-blue-500 border-none  font-bold p-3 ">02</span>
                <div className="grid w-32 h-32 bg-base-300  place-items-center rounded-md">
                    <img className='w-20 h-20' alt='' src="https://i.ibb.co/KryGLMX/data-collection.png"  />
                </div>
            </div>

            <div className='text-center'>
                <h2 className='font-bold text-lg mt-2 text-blue-500'>Collect Data</h2>
                <p>Evening do forming observe spirits is in. Country hearted be of justice sending. </p>
            </div>
          </div>

          <div className=' p-12 items-center'>
          <div className="indicator rounded-full mx-12">
                <span className="indicator-item  badge bg-blue-500 border-none  font-bold p-3 ">03</span>
                <div className="grid w-32 h-32 bg-base-300  place-items-center rounded-md">
                    <img className='w-20 h-20' alt='' src="https://i.ibb.co/qWRnqcS/solution-1.png"  />
                </div>
            </div>

            <div className='text-center'>
                <h2 className='font-bold text-lg mt-2 text-blue-500'>Final Solution</h2>
                <p>Evening do forming observe spirits is in. Country hearted be of justice sending. </p>
            </div>
          </div>

        </div>
       </div>
    );
};

export default Work;
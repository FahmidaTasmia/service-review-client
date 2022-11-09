import React, { useEffect, useRef } from 'react';
import { FaArrowRight } from "react-icons/fa";
import Lottie from 'lottie-web';


const Banner = () => {

    const container =useRef(null)
    useEffect(()=>{
        const instance = Lottie.loadAnimation({
            container:container.current,
            renderer:'svg',
          
            autoplay:true,
            animationData:require('./banner.json')
        })
        return () => instance.destroy();
     
    },[])
    return (
        <div className='grid md:grid-cols-2'>
        <div className=' mx-auto self-center'>
      <h1 className="text-5xl font-bold ">Do Data Analytic Services with <span className='text-blue-500'>iDot</span> !</h1>
      <p className="py-6">Mission is to bring the power of AI to every Business.My services is different from other Traditional Services a bit elite, rememberable</p>

      <button className="btn border-none btn-wide hover:font-bold bg-blue-500 hover:bg-blue-500">Lets Start <FaArrowRight className='ml-2 '></FaArrowRight> </button>
    </div>
      
        <div className='container w-75 h-75' ref={container}></div>
    </div>
    );
};

export default Banner;
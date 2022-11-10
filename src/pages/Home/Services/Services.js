import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import ServiceCard from './ServiceCard';


const Services = () => {
    const [services, setServices]=useState([]);

    useEffect(()=>{
        fetch('https://idot-server.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServices(data));
    }, [])
    return (
        <div className=' my-12 shadow-sm p-8 md:py-32'>

<div className='text-center'>
                <p className="text-3xl font-bold text-blue-500 md:mb-4">My Services</p>
                <h2 className="md:text-3xl text-lg font-bold">We offer a wide range of services and provide realtime data Solutions</h2>
                <p className='md:mb-12 mt-5 text-base '>Everything melancholy uncommonly but solicitude inhabiting projection off.  <br /> Connection stimulated estimating excellence an to impression. </p>
    </div>

    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

        {
            services.map(service=> <ServiceCard
            key ={service._id}
            service = {service}
            >

            </ServiceCard>)
        }
    </div>

    <div className='text-center  md:mt-24 mt-5'>
        <Link to='/allServices' className='btn gap-2 border-none bg-blue-500 hover:bg-blue-500 hover:font-bold'> View MY All Services <FaArrowRight></FaArrowRight></Link>
    </div>
            
        </div>
    );
};

export default Services;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllServiceCard from './AllServiceCard';



const AllServices = () => {
    const [services, setServices]=useState([]);

    useEffect(()=>{
        fetch('https://idot-server.vercel.app/allServices')
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
            services.map(service=> <AllServiceCard
            key ={service._id}
            service = {service}
            >

            </AllServiceCard>)
        }
    </div>
            
        </div>
    );
};

export default AllServices;
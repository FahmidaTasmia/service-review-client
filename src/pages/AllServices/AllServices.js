import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AllServices = () => {
    const  {title} = useLoaderData();
    
    return (
        <div>
            {title}
        </div>
    );
};

export default AllServices;
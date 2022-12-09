import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const UserRequired = () => {
    const location =useLocation()
    return (
       <div className='bg-gray-100 p-20'>
<h4>Kindly login or register to leave your opinion</h4>
<div className='flex gap-2'>
<button className='btn'>login</button>
<button className='btn'>Register</button>
</div>
       </div>
    );
};

export default UserRequired;
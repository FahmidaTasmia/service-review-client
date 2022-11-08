import React from 'react';

const NewsLetter = () => {
    return (
        <div className="form-control ">
        <label className="label">
            <span className='font-bold mt-3 font-sans uppercase'>Enter your email address</span>
        </label> 
        <div className="relative ">
            <input type="text" placeholder="" className="input input-bordered w-full pr-16" /> 
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
        </div>
    </div>
    );
};

export default NewsLetter;
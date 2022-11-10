import React from 'react';

const NewsLetter = () => {
    return (
       <div className='grid md:grid-cols-2 my-8 md:my-24 md:p-32 shadow-sm bg-slate-100 rounded-md'>
        <div>
            <h1 className='m-auto font-bold text-2xl text-blue-500'>I’d love to hear  from you anytime <br />Subscribe My NewsLetter!</h1>
        </div>
        <div className="form-control ">
        <label className="label">
            <span className='font-bold mt-3 font-sans uppercase'>Enter your email address</span>
        </label> 
        <div className="relative ">
            <input type="text" placeholder="Enter mail" className="input rounded-none input-bordered w-full pr-16" /> 
            <button className="btn block bg-blue-500 hover:bg-blue-500 border-none rounded-none absolute top-0 right-0 rounded-l-none">Subscribe</button>
        </div>
    </div>
       </div>
    );
};

export default NewsLetter;
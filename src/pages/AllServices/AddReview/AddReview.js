import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const AddReview = ({serviceId, serviceName}) => {
    const [rating,setRating]=useState("2");
    const {user}=useContext(AuthContext);

    
    const handleSubmit = event =>{
        event.preventDefault();
        const review = event.target.review.value;


        if(review.length<10){
            toast.error('Review must be at least 10 characters long');
            return;
        }

        const newReview ={
            serviceId,
            serviceName,
            rating,
            review,
            name:user.displayName,
            uid:user.uid,
            reviewTime: new Date().toLocaleString(),
    
        };
        
        fetch('http://localhost:5000/add-reviews',{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body: JSON.stringify(newReview),
        })

        .then(res=>res.json())
        .then(data =>{
            if(data.success){
                toast.success(data.message);
                event.target.reset();
            }
            else{
                toast.error(data.error);
            }
        })

        .catch(error=>console.error(error));
    };

   

    return (
        <div className=' my-12 bg-gray-100 p-20'>

<form onSubmit={handleSubmit} className=" w-full">
  
<div className="rating rating-md">
  <input type="radio" name="rating" onChange={(e)=>setRating(e.target.value)} value={1} className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating" onChange={(e)=>setRating(e.target.value)} value={2} className="mask mask-star-2 bg-orange-400" defaultChecked />
  <input type="radio" name="rating" onChange={(e)=>setRating(e.target.value)} value={3} className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating" onChange={(e)=>setRating(e.target.value)} value={4} className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating" onChange={(e)=>setRating(e.target.value)} value={5} className="mask mask-star-2 bg-orange-400" />
</div>
  <textarea name="review" className="textarea textarea-bordered h-24 w-full my-5" placeholder="Your Message" required></textarea>
  <button className='btn ' type='submit'>submit</button>
</form>
            
</div>
    );
};

export default AddReview;
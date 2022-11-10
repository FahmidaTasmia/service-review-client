import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Review = () => {
    const navigate =useNavigate();
    const params = useParams();
    const[reviews, setReviews]=useState([]);

    const handlePlaceReview =event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
       const feedback = form.feedback.value;
     

       const reviews={
        name,
      
        feedback
       }

       fetch(`https://idot-server.vercel.app/riviews/${params.id}`,{

        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(reviews)


       })
       .then(res => res.json())
       .then(data => {
           console.log(data)
           if(data.acknowledged){
               alert('Order placed successfully')
               form.reset();
               
           }
       })
   .catch(error=>console.error(error));
        
    };
    
    useEffect(()=>{
        fetch(`https://idot-server.vercel.app/riviews/${params.id}`)
        .then(res => res.json())
        .then(data=>setReviews(data));
    },[params.id])
    return (
        <div>
           <form onSubmit={handlePlaceReview}  className='my-8 p-8' >
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="Name" className="input input-ghost w-full  input-bordered" />
                   
                    <input name="firstName" type="text" placeholder="Name" className="input input-ghost w-full  input-bordered" />
                    
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full my-5" placeholder="Your Message" required></textarea>

                <input className='btn btn-sm btn-wide border-none bg-blue-500 hover:bg-blue-500' type="submit" value="Place Your review" /> 
            </form> 
        </div>
    );
};

export default Review;
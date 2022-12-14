import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import AddReview from '../AllServices/AddReview/AddReview';
import ReviewItem from '../AllServices/ReviewItem/ReviewItem';
import Star from '../AllServices/Star/Star';
import UserRequired from '../AllServices/UserRequired/UserRequired';


const Checkout = () => {
    const serviceData = useLoaderData()
    const {img, price, title,_id,description,rating,numReviews}=serviceData;
    console.log(serviceData);
    const[reviews, setReviews]=useState()
    const {user} =useContext(AuthContext);
   
    const handlePlaceOrder =event=>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message=form.message.value;

        const order={
            service:_id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        fetch('https://idot-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
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
    }



    useEffect(()=>{
        fetch(`http://localhost:5000/get-review/${_id}`)
        .then(res=>res.json())
        .then(data=>setReviews(data));

    },[])

    return (
        
        <div className='grid '>
            {/* //card */}
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                <img src={img} alt="" />
                </figure>
                <div className="card-body  ">
                <Star star={rating} reviews={numReviews}></Star>
                    <h2 className="card-title text-blue-500 font-bold text-2xl">{title}</h2>
                    <p className='text-justify '><span className='text-blue-500 font-bold text-lg'>Description: </span>{description}</p>
                    <p className='text-blue-500 font-bold text-lg'>Total Price: $ {price}</p>
                   
                </div>
                
                {/* form */}
                <form onSubmit={handlePlaceOrder}  className='my-8 p-8' >
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email}  className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full my-5" placeholder="Your Message" required></textarea>

                <input className='btn btn-sm btn-wide border-none bg-blue-500 hover:bg-blue-500' type="submit" value="Place Your Order" /> 
            </form>
            </div>


            <div>

            </div>

           
            <div>
                {
                    reviews?.map(review=><ReviewItem
                    key={review.serviceId} review={review}></ReviewItem>)
                }
            </div>

            <AddReview
            serviceId={_id}
            serviceName={title}
            ></AddReview>

            <UserRequired></UserRequired>


        </div>
    );
};

export default Checkout;
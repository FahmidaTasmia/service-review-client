import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import Star from './Star/Star';

const AllServiceCard = ({service}) => {
    const {img, price, title,_id,description, rating,numReviews}=service;
    return (
    

        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl w-60 h-60" />
  </figure>
  <div className="card-body  ">
  <Star star={rating} reviews={numReviews}></Star>
    <h2 className="card-title text-blue-500">{title}</h2>
    <p className='text-justify'>{description.slice(0,200)}...</p>
    
    
    <div className="card-actions my-3">
    <Link to={`/checkout/${_id}`}>
              <button className='btn hover:font-bold gap-2 btn-sm btn-outline text-blue-500 hover:bg-white hover:text-blue-500'>
              View Details <FaArrowRight></FaArrowRight>
              </button>
                </Link>
    </div>
  </div>
</div>

    );
};

export default AllServiceCard;
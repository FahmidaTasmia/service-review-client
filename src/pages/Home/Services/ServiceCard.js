import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({service}) => {
    const {img, price, title,_id,description}=service;
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl w-60 h-60" />
  </figure>
  <div className="card-body  ">
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

export default ServiceCard;
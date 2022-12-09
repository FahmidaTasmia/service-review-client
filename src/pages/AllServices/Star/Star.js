import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const Star = ({star,reviews}) => {
   const ratingStar= Array.from({length:5},(elem,index)=>{
        let number = index+0.5;
        return <span key ={index}>
            {
                star >= index+1?<FaStar className='text-yellow-500'></FaStar>:star >= number?<FaStarHalfAlt className='text-yellow-500'></FaStarHalfAlt>:<AiOutlineStar className='text-yellow-500'></AiOutlineStar>
            }
        </span>

    })
    return (
        <div>
            <span className='flex'>
                <p className='flex gap-2'>{ratingStar}</p>
                <p>customer reviews {reviews}  </p>
            </span>
        </div>
    );
};

export default Star;
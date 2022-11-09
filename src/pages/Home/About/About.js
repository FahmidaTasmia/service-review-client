import React from 'react';
import { FaArrowRight } from "react-icons/fa";
const About = () => {
    return (
        <div className="hero my-20">
  <div className="hero-content flex-col lg:flex-row">
   <div className='relative w-1/2'>
  <img src="https://i.ibb.co/0srjDy5/7.png" alt="" />
   </div>

    <div className='w-1/2'>
     <p className='text-2xl font-bold text-blue-500'>About Us</p>
     <h1 className="my-5 text-5xl font-bold">
                        We are qualified <br />
                        & of experience <br />
                        in this field</h1>
        <p className="py-6">Data analysis is the practice of working with data to glean useful information, which can then be used to make informed decisions. </p>
        <p className="py-6">"It is a capital mistake to theorize before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts," Sherlock Holme's proclaims in Sir Arthur Conan Doyle's A Scandal in Bohemia. </p>

        <p className="py-6">Companies are wisening up to the benefits of leveraging data. Data analysis can help a bank to personalize customer interactions, a health care system to predict future health needs, or an entertainment company to create the next big streaming hit. </p>
        <button className="btn border-none btn-wide hover:font-bold bg-blue-500 hover:bg-blue-500">Get More Info<FaArrowRight className='ml-2 '></FaArrowRight> </button>
    </div>
  </div>
</div>
    );
};

export default About;
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=''>
            <footer className="footer p-32  bg-gray-100 text-blue-500 rounded-md md:mt-24 ">
       <div >
        <h4 className='text-3xl    font-semibold '>iDot</h4>
        <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
       </div>
       <div className="divider lg:divider-horizontal"></div> 
        <div >
          <span className="text-lg  uppercase  font-semibold">Company</span> 
          <Link className="link link-hover">Home</Link>
          <Link className="link link-hover">Courses</Link>
          <Link className="link link-hover">Blog</Link>
          <Link className="link link-hover">Checkout</Link>
        </div> 
        <div className="divider \ lg:divider-horizontal"></div> 
        <div >
          <span className="text-lg  uppercase  font-semibold">Legal</span> 
          <Link className="link link-hover ">Terms of use</Link>
          <Link className="link link-hover ">Privacy Policy</Link>
          <Link className="link link-hover ">Cookie policy</Link>
        </div> 
        <div className="divider lg:divider-horizontal"></div> 
        <div>
    <span className="text-lg  uppercase  font-semibold">Social</span> 
    <p className='uppercase  '>Stay with US:</p>
    <div className="grid grid-flow-col gap-4">
     <FaFacebook className=' w-5 mt-5 h-5'></FaFacebook>
     <FaGoogle   className=' w-5 mt-5 h-5'></FaGoogle>
     <FaLinkedin className=' w-5 mt-5 h-5'></FaLinkedin>
     <FaTwitter  className=' w-5 mt-5 h-5'></FaTwitter>
    </div>
  </div>
        
     </footer>
     <footer className="footer footer-center p-4 text-base-content border-t-2 bg-gray-100">
          
  <div className='text-gray-600 '>
    <p>Copyright © 2022 - All right reserved by iDot</p>
  </div>
</footer>
        </div>
     
    );
};

export default Footer;
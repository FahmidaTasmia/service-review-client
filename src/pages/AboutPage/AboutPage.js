import React from 'react';
import Hero from '../Home/Hero/Hero';
import { FaCheckCircle} from "react-icons/fa";
import About from '../Home/About/About';
import Skills from '../Home/Skills/Skills';
import NewsLetter from '../Newsletter/NewsLetter';
const AboutPage = () => {
    return (
        <div>
            <Hero></Hero>

            <section className='grid md:grid-cols-2 pt-12 gap-8'>
            <div>
                <div>
                <h2 className='text-2xl md:text-3xl font-bold  mb-3'>I Always provide a multitude of data solutions and services.</h2>
                <p className='text-justify'>Bringing unlocked me an striking ye perceive. Mr by wound hours oh happy. Me in resolution pianoforte continuing we. Most my no spot felt by no. He he in forfeited furniture sweetness he arranging. Me tedious so to behaved written account ferrars moments.</p>
                <h2 className='text-2xl font-bold md:my-5 '>Easy Steps to Get Started</h2>
                </div>

                <div className='grid grid-cols-2 gap-5'>
                   <div > 
                   <div className='flex gap-2'>
                   <p className='grid place-items-center text-blue-500 '><FaCheckCircle></FaCheckCircle></p>
                   <h2 className='text-lg font-bold text-blue-500 md:my-2'>Understand Database</h2>
                   </div>
                   <div>
                   <p className='text-justify'>A database is information that is set up for easy access, management and updating. Computer databases typically store aggregations of data records or files that contain information, such as sales transactions, customer data, financials and product information.</p>
                   </div>
                   </div>
                   {/* //2 */}
                   <div > 
                   <div className='flex gap-2'>
                   <p className='grid place-items-center text-blue-500'><FaCheckCircle></FaCheckCircle></p>
                   <h2 className='text-lg font-bold text-blue-500 md:my-2'>Explore Data Workflow</h2>
                   </div>
                   <div>
                   <p className='text-justify'>Data exploration techniques include both manual analysis and automated data exploration software solutions that visually explore and the distribution of data values in order to reveal patterns and points of interest, enabling data analysts to gain greater insight into the raw data.</p>
                   </div>
                   </div>
                   {/* //3 */}
                   <div > 
                   <div className='flex gap-2'>
                   <p className='grid place-items-center text-blue-500'><FaCheckCircle></FaCheckCircle></p>
                   <h2 className='text-lg font-bold text-blue-500 md:my-2'>Level Up with Big Data</h2>
                   </div>
                   <div>
                   <p className='text-justify'>Big data is a combination of structured, semistructured and unstructured data collected by organizations that can be mined for information and used in machine learning projects, predictive modeling and other advanced analytics applications.</p>
                   </div>
                   </div>
                   {/* 4//  */}
                   <div > 
                   <div className='flex gap-2'>
                   <p className='grid place-items-center text-blue-500'><FaCheckCircle></FaCheckCircle></p>
                   <h2 className='text-lg font-bold text-blue-500 md:my-2'>Professional Services</h2>
                   </div>
                   <div>
                   <p className='text-justify'>Professional service providers can be anyone who sells specialised knowledge to businesses. Financial Services – can be recognised as a provider of professional services, including accountants, financial advisers and tax advisers.</p>
                   </div>
                   </div>
                </div>
            </div>

            <div className='ml-20 grid place-content-center' >
                <img  src="https://i.ibb.co/xs00VhZ/9.png" alt="" />
            </div>
            </section>

            <About></About>

            <Skills></Skills>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default AboutPage;
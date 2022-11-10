import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Work from '../Work-process/Work';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <About></About>
           <Work></Work>
        </div>
    );
};

export default Home;
import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Work from '../Work-process/Work';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Work></Work>
        </div>
    );
};

export default Home;
import React from 'react';
import NewsLetter from '../../Newsletter/NewsLetter';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';
import Work from '../Work-process/Work';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <About></About>
           <Work></Work>
           <Skills></Skills>
           <NewsLetter></NewsLetter>
      
        </div>
    );
};

export default Home;
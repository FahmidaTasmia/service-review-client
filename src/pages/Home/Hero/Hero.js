import React from 'react';

const Hero = () => {

    const myStyle={
        backgroundImage: 
 "url('https://i.ibb.co/HGp2Ym6/Shape.png')",
        height:'60vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor:'#3b82f6'
    };
    return (
        <div >
            <div className='grid place-items-center rounded  text-white text-3xl font-bold' style={myStyle}>
        <h1> About </h1>
      </div>
        </div>
    );
};

export default Hero;
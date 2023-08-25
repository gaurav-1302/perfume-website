import React from 'react'
const bottle = require('../assets/images/bottle.png');

const Hero = () => {
    return (
        <div className='hero-section'>
            <span className='text-7xl font-semibold text-white'>Discover Your Perfect</span>
            <div className='flex justify-center item-center content-center flex-wrap'>
                <div className="left-hero-text">
                    <p className='left-hero-text'>
                        Discover the perfect fragrance for you with our wide selection of perfumes.
                    </p>
                </div>
                <img src={bottle} alt="" className='hero-image' />
                <div className="left-hero-text">
                    <p className='left-hero-text'>
                        Discover the perfect fragrance for you with our wide selection of perfumes.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero
import React from 'react';
import bannerImg from '../../../images/Slide1.jpg'
// import Typography from '@mui/material/Typography'
const Banner = () => {


    return (
        <div className="banner">
            <div className="banner-img">
                <img src={bannerImg} style={{ width: '100%' }} alt="Fahim Foisal" />
            </div>
            <div className="banner-text">
                <h3 className="banner-h3-text">Hey! I'm Faisal</h3>
                <p className="banner-p-text">I am a <span id="dynamic-text" style={{ color: ' #47d147' }}>MERN stack</span> Developer</p>
            </div>
        </div>
    );
};

export default Banner;
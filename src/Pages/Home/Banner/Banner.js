import { Grid, Typography } from '@mui/material';
import React from 'react';
import bannerImg from '../../../images/Slide1.jpg'
// import Typography from '@mui/material/Typography'
const Banner = () => {


    return (
        <Grid className="banner" container spacing={2}>
            <Grid xs={12} md={6}>
                <img src={bannerImg} style={{ width: '100%' }} alt="Fahim Foisal" />
            </Grid>
            <Grid xs={12} md={6} >
                <Typography variant="h3" style={{ fontFamily: 'cursive' }}>Hey! I'm Faisal</Typography>
                <p className="">I am a <span id="dynamic-text" style={{ color: ' #47d147' }}>MERN stack</span> Developer</p>
            </Grid>
        </Grid>
    );
};

export default Banner;
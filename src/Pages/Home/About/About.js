import { Grid } from '@mui/material';
import React from 'react';
import aboutImg from '../../../images/des.jpg'

const About = () => {
    return (
        <Grid container spacing={2} id="about">
            <Grid xs={12} md={6} className="about-text">
                <h1 className="heading">About Me</h1>
                <p className="text">
                    I am a student. I have studying Computer Science And Engineering at University Of Chittagong.
                    <br />
                    I am greatly pationate to technology and coding. So, I love Web developing and other development stuff.
                    <br />
                    I have great skills in HTML5, CSS3, Bootstrap, Tailwind, JavaScript, React, Material UI as a front end tool.
                    <br />
                    I am also handy at MongoDB, MySQL, Express, SQL as a background development tool.
                </p>
            </Grid>
            <Grid xs={12} md={6} className="about-img">
                <img src={aboutImg} alt="Fahim Foisal" />
            </Grid>
        </Grid>
    );
};

export default About;
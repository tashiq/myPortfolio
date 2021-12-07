import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Project from '../Project/Project';
import ContactForm from '../../ContactForm/ContactForm'
const Home = () => {
    return (
        <div id="home">
            <a href="https://drive.google.com/file/d/1BzKMcKw9ib_p2KCwAQopQfQL73r8h_Y0/view?usp=sharing" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noreferrer">
                <div className="cv">
                    <span className='cv-text'>Download Resume </span>
                    <i className="fas fa-file-download"></i>
                </div>
            </a>
            {/* <form method="get" action="./Resume (2).pdf">
                <button type="submit">Download!</button>
            </form> */}
            {/* <embed src="./Resume (2).pdf" width="100" height="100" /> */}
            <Banner />
            <About />
            <Project />
            <ContactForm />
        </div>
    );
};

export default Home;
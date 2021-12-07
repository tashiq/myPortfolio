import React from 'react';
import './Navigation.css'
// import {Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
const Navigation = () => {
    return (
        <div>
            <ul className="nav">
                <li className="nav-item"><HashLink to="/home#home"><span className="nav-prev">.me()</span><span className="nav-span"> Home </span></HashLink></li>
                <li className="nav-item"><HashLink to="/home#about"><span className="nav-prev">.about()</span><span className="nav-span"> MySelf </span></HashLink></li>
                <li className="nav-item"><HashLink to="/home#projects"><span className="nav-prev">.myWorks()</span><span className="nav-span"> Projects </span></HashLink></li>
                <li className="nav-item"><HashLink to="/home#contact"><span className="nav-prev">.contact()</span><span className="nav-span"> Email Me </span></HashLink></li>
            </ul>
        </div>
    );
};

export default Navigation;
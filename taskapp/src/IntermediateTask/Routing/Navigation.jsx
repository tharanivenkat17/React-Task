import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AboutUs from './AboutUs';
import Home from './Home';
import ContactUs from './ContactUs';
import './Navigation.css';

function Navigation() {
    return (
        <div>
            <Router>
                <div className='nav'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>

                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/about' element={<AboutUs/>} />
                    <Route path='/contact' element={<ContactUs/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default Navigation
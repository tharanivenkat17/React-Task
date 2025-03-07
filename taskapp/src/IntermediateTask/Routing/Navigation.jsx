import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutUs from './AboutUs';
import Home from './Home';
import ContactUs from './ContactUs';
import './Navigation.css';
import Login from '../../AdvanceTask/Authentication/Login';
import SignUp from '../../AdvanceTask/Authentication/SignUp';
import { useAuth } from '../../AdvanceTask/Authentication/AuthContext';

function Navigation() {
    const {isLoggedIn, logout} = useAuth();
    if(isLoggedIn){
        console.log("Login")
    }
    else{
        console.log("Logout")
    }
    return (
        <div>
            <div className='nav'>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                {/* if isLoggedIn is true logout is called else it will not do anything it remains as login component */}
                <Link to="/login" onClick={isLoggedIn ? logout : null}>{isLoggedIn ? 'Logout' : 'Login'}</Link>
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/contact' element={<ContactUs />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
            </Routes>
        </div>
    )
}

export default Navigation
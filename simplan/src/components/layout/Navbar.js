import React from 'react'
import { Link } from 'react-router-dom'
import SignInLink from './SignInLink';
import SignOutLink from './SignOutLink';


const Navbar = () =>{
    return(
        <nav className ="nav-wrapper grey darken-3">
            <div className="container">
            <div className="container">
                <a href='/' class='brand-logo'>SimplePlan</a>
                <SignInLink/>
                <SignOutLink/>
                
            </div>
            </div>
        </nav>
    )
}

export default Navbar 
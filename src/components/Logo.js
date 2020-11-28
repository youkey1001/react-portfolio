import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.gif';

const Logo = () => {
    return (
        <h1 id="logo">
            <Link to="/">
                <img src={logo} alt="UNDERLINE" />
            </Link>
        </h1>
    )
}

export default Logo;
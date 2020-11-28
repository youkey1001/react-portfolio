import React from 'react';
import Logo from './Logo';
import Navber from './Navbar';
import SocialBtn from './SocialBtn';
import '../css/Header.css';


const Header = () => {

    return (
        <header>
            <Logo />
            <Navber />
            <SocialBtn />
        </header>
    )
}

export default Header;
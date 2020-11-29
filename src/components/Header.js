import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from './Logo';
import Navber from './Navbar';
import SocialBtn from './SocialBtn';
import '../css/Header.css';


const Header = props => {
    const Location = useLocation();

    return (
        <header {...Location.pathname === '/' ? {} : {id:'inner'}}>
            <Logo />
            <Navber />
            <SocialBtn />
        </header>
    )
}

export default Header;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    const Space = " "; // minify対策
    const Location = useLocation();
    const [location, setLocation] = useState('');

    useEffect(() => {
        switch (Location.pathname) {
            case '/' :
                setLocation('top');
                break;
            case '/about' :
                setLocation('about');
                break;
            case '/works' :
                setLocation('works');
                break;
            case '/blog' :
                setLocation('blog');
                break;
            case '/contact' :
                setLocation('contact');
                break;
            default :
                setLocation('top');
        }
    }, [Location]);
    return (
        <nav id={location}>
            <ul className="cf">
                <li className="about">
                    <Link to="/about">About</Link>
                </li>{Space}
                <li className="works">
                    <Link to="/works">Works</Link>
                </li>{Space}
                <li className="blog">
                    <Link to="/blog">Blog</Link>
                </li>{Space}
                <li className="contact">
                    <Link to="/contact">Contact</Link>
                </li>{Space}
            </ul>
        </nav>
    )
}

export default Navbar;
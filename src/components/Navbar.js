import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    const space = " ";

    return (
        <nav>
            <ul className="cf">
                <li className="about">
                    <Link to="/about">About</Link>
                </li>{space}
                <li className="works">
                    <Link to="/works">Works</Link>
                </li>{space}
                <li className="blog">
                    <Link to="/blog">Blog</Link>
                </li>{space}
                <li className="contact">
                    <Link to="/contact">Contact</Link>
                </li>{space}
            </ul>
        </nav>
    )
}

export default Navbar;
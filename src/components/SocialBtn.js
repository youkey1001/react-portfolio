import React from 'react';
import InstagramIcon from '../img/icon_instagram.gif';
import FacebookIcon from '../img/icon_facebook.gif';
import '../css/SocialBtn.css';

const SocialBtn = () => {
    return (
        <ul className="socialBtn">
            <li>
                <a href="http://instagram.com/underline_t" rel="noreferrer noopener" target="_blank">
                    <img src={InstagramIcon} alt="Instagram" />
                </a>
            </li>
            <li className="last">
                <a href="http://instagram.com/underline_t" rel="noreferrer noopener" target="_blank">
                    <img src={FacebookIcon} alt="FaceBook" />
                </a>
            </li>
        </ul>
    )
}

export default SocialBtn;
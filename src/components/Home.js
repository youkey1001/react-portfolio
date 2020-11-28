import React from 'react';
import Service from './Service';
import mainImg from '../img/img_main_l.jpg';
import '../css/Home.css';

const Home = () => {
    return (
        <div id="main">
            <div id="mainVisual">
                <div className="pc">
                    <img src={mainImg} alt="つくるものを通して人と人がつながり 新しい価値が生まれ、気持ちや想いが届く。 そんなお手伝いができればと考えています。" />
                </div>
            </div>
            <Service />
        </div>
    )
}

export default Home;
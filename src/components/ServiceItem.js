import React from 'react';
import '../css/Service.css';

const ServiceItem = props => {
    const {ttlJP, ttlEN, icon, alt, text, isLast} = props;

    return (
        <section className={isLast ? 'last' : ''}>
            <h3 className="ttl">{ttlJP}</h3>
            <p className="ttl">{ttlEN}</p>
            <p className="icon">
                <img src={icon} alt={alt} />
            </p>
            <p className="text01">
                {text}
            </p>
        </section>
    )
}

export default ServiceItem;

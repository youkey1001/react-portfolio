import React from 'react';

const ServiceItem = props => {
    const {ttlJP, ttlEN, icon, alt, text} = props;

    return (
        <section>
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

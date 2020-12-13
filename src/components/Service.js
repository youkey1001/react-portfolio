import React from 'react';
import ServiceItem from './ServiceItem';
import ItemJson from '../item.json';
import '../css/Service.css';

const Service = () => {
    const serviceItems = ItemJson.service.map((item, index) => {
        return (
            <ServiceItem
                key={index}
                ttlJP={item.serviceNameJp}
                ttlEN={item.serviceNameEn}
                icon={process.env.PUBLIC_URL + 'img/' + item.iconName}
                alt={item.imgAlt}
                text={item.textContent}
                isLast={ItemJson.service.length - 1 === index ? true : false}
            />
        )
    })
    return (
        <section id="service" className="cf">
            <h2 className="ttl">Service</h2>
            {serviceItems}
        </section>
    )
}

export default Service;
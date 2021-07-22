import React from 'react';
import './Services.css';
import service_img from '../../img/img.jpg';

const Services = (props) => {
    const {name, price} = props.service;
    return (
        <div className="service_wrapper">
            <div className="services_img">
                <img className="img-fluid" src={service_img} alt="" />
            </div>
            <div className="service_info">
                <h2>{name}</h2>
                <p>price : {price}</p>
                <button onClick={() => props.addToCart(props.service)} className="btn btn-success">সার্ভিসটি বাছুন</button>
            </div>
        </div>
    );
};

export default Services;
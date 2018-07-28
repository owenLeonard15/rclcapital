import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <div className="cards shadow-lg">
            <div className="card-body">
                <h5 className="card-title">RCL Capital Management</h5>
                <p className="card-text">RCL Capital Management is an independent financial advisor for 
                individuals and families who desire carefully-crafted, personalized investment plans.
                 For a quick overview, take a look at our services</p>
                <a href="#services" className="btn btn-primary">Services</a>
            </div>
        </div>
    );
}

export default Card;
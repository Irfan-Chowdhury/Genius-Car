import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const {_id, title, img, price} = service;
    return (
        <div className="col-3 p-2 ms-5">
            <div className="card">
                <img src={img} style={{ width: '300px', height:'150px' }} className="card-img-top" alt="..." />
                <div className="card-body text-start">
                    <h5 className="card-title text-dark">{title}</h5>
                    <h5 className="card-title text-danger">Price $ {price}</h5>
                    <Link to={`/checkout/${_id}`}>
                        <button className='btn btn-primary btn-sm'>Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
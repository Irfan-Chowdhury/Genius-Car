import React from 'react';
import './BannerItem.css';

const BannerItem = ({ slide }) => {
    const {image} = slide;
    return (
        <div className="carousel-item active">
            <div className='carousel-img'>
                <img src={image} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-caption top-0">
                <h1 className='text-start font-bold text-light'>
                    Affordable <br />
                    Price for car <br />
                    Servicing
                </h1>
                <h6 className='text-start font-bold text-light'>
                    There are many variants of passages of available, <br /> but the majority have alternation some form.
                </h6>
                <div className="d-flex flex-row mb-3">
                    <div className="p-2"><button className="btn btn-outline-danger rounded" type="submit">Appointment</button></div>
                    <div className="p-2"><button className="btn btn-outline-danger rounded" type="submit">Appointment</button></div>
                </div>
            </div>
        </div>
    );
};

export default BannerItem;
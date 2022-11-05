import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {

    const {title} = useLoaderData();

    return (
        <div>
        <h1>This is checkout {title} </h1>
        </div>
    );
};

export default Checkout;
import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    })

    return (
        <div className='container card'>
            <div className='card-body text-center'>
                <h5 className='text-danger'>Service</h5>
                <h2 className='text-dark'>Our Service Area</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod quos vitae fugiat, rerum quaerat neque doloremque atque est <br /> odit placeat ratione ducimus sapiente, sit, harum dolorum earum fuga praesentium mollitia!</p>
            </div>

            <div className="row p-5">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>


        </div>
    );
};

export default Services;
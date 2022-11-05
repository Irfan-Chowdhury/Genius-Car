import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {

    const { _id ,title, price } = useLoaderData();
    const {user} = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form      = event.target;
        const name      = `${form.firstName.value} ${form.lastName.value}`;
        const email     = user?.email || 'unregistered';
        const phone     = form.phone.value;
        const message   = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer:name,
            email,
            phone,
            message
        }
    }

    return (
        <div className='container p-5'>
            <form onSubmit={handlePlaceOrder}>
                <h2>You are about to order : {title}</h2>
                <h4>Price : {price}</h4>
                <div class="row">
                    <div class="col-6">
                        <input type="text" name='firstName' class="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div class="col-6">
                        <input type="text" name='lastName'  class="form-control" placeholder="Last name" aria-label="Last name" />
                    </div>
                    <div class="col-6">
                        <input type="text" name='phone' class="form-control" placeholder="Your Phone" aria-label="Your Phone" />
                    </div>
                    <div class="col-6">
                        <input type="email" name='email' readOnly class="form-control" defaultValue={user?.email} placeholder="Your Email" aria-label="Your Email" />
                    </div>
                    <div class="col-12">
                        <textarea class="form-control" name='message' id="exampleFormControlTextarea1" rows="3" placeholder='Message'></textarea>
                    </div>
                </div>
                <div class="d-grid gap-2">
                    <button type="submit" className='btn btn-success'>Place your order</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
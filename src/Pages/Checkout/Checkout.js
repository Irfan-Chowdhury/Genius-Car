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

        fetch('http://localhost:5000/orders', {
            method:'POST',
            headers:{
                'content-type':'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data =>{
             console.log(data)
             if(data.acknowledged){
                alert('Order Placed successfully');
                form.reset();
             }
        })
        .catch(err => console.error(err));
    }

    return (
        <div className='container p-5'>
            <form onSubmit={handlePlaceOrder}>
                <h2>You are about to order : {title}</h2>
                <h4>Price : {price}</h4>
                <div className="row">
                    <div className="col-6">
                        <input type="text" name='firstName' className="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div className="col-6">
                        <input type="text" name='lastName'  className="form-control" placeholder="Last name" aria-label="Last name" />
                    </div>
                    <div className="col-6">
                        <input type="text" name='phone' className="form-control" placeholder="Your Phone" aria-label="Your Phone" />
                    </div>
                    <div className="col-6">
                        <input type="email" name='email' readOnly className="form-control" defaultValue={user?.email} placeholder="Your Email" aria-label="Your Email" />
                    </div>
                    <div className="col-12">
                        <textarea className="form-control" name='message' id="exampleFormControlTextarea1" rows="3" placeholder='Message'></textarea>
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className='btn btn-success'>Place your order</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
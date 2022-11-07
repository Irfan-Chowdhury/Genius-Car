import { fromJSON } from 'postcss';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // fetch(`http://localhost:5000/orders?email=shamim@gmail.com`)
        fetch(`http://localhost:5000/orders?email=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
        .then(res => {
            if(res.status === 401 || res.status ===403){
                return logOut();
            }
            return res.json();
        })
        .then(data => {
            setOrders(data)
        })
    }, [user?.email, logOut]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete ?');
        if(proceed){
            fetch(`http://localhost:5000/orders/${id}`,{
                method:'DELETE',
                headers:{
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Deleted Successfully');
                    const remaining = orders.filter(odr => odr._id !== id);
                    setOrders(remaining);
                }
            });
        }
    }

    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/orders/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify({status:'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                const remaining = orders.filter(odr => odr._id !==id);
                const approving = orders.find(odr => odr._id ===id);
                approving.status ='Approved';

                const newOrders = [approving, ...remaining];
                setOrders(newOrders);
            }
        })

    }

    return (
        <div className='container'>
            <h1>You have {orders.length} Orders</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Remove</th>
                        <th scope="col">Image</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <OrderRow key={order._id} handleDelete={handleDelete} handleStatusUpdate={handleStatusUpdate} order={order}></OrderRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
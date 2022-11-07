import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
    const { _id, serviceName, phone, customer, price, service, status } = order;
    const [orderService, setOrderService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
        .then(res => res.json())
        .then(data => setOrderService(data));
    }, [service]);



    return (
        <tr>
            <td><button onClick={()=> handleDelete(_id)} className='btn btn-danger'>X</button></td>

            <td>
                {
                    orderService?.img && 
                    <img src={orderService.img} style={{height:'50px',width:'60px'}} alt="" srcset="" />
                }
            </td>
            <td>{customer}</td>
            <td>{phone}</td>
            <td>{serviceName}</td>
            <td>{price}</td>
            <td><button onClick={()=>handleStatusUpdate(_id)} className='btn btn-primary'>{status ? status: 'pending'}</button></td>
        </tr>
    );
};

export default OrderRow;
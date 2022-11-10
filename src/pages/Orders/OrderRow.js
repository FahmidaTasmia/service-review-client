import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
    const { _id, serviceName, phone, customer, price, service, status } = order;
    const [orderService, setOrderService] = useState({})

    useEffect(() => {
        fetch(`https://idot-server.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [service])

    

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn  btn-circle btn-outline text-blue-500 hover:bg-blue-500 hover:text-white hover:border-none'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                orderService?.img && 
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div >
                        <div className='text-blue-500 font-bold'>{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td className='text-blue-500 font-bold'>
                {serviceName}
                <br />
                <span className="text-xl font-bold">${price}</span>
            </td>
            
            <th>
                <button 
                onClick={() => handleStatusUpdate(_id)}
                className="btn btn-outline text-blue-500 hover:bg-blue-500 hover:text-white hover:border-none">{status ? status : 'Pending'}</button>
            </th>
        </tr>
    );
};

export default OrderRow;
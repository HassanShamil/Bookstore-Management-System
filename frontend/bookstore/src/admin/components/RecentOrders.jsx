
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getOrders } from '../../data/orders';

const RecentOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then(data => {
      setOrders(data.slice(0, 5));
    });
  }, []);

  const statusStyles = {
    Delivered: 'bg-green-100 text-green-700',
    Pending: 'bg-yellow-100 text-yellow-700',
    Cancelled: 'bg-red-100 text-red-700',
    Processing: 'bg-blue-100 text-blue-700',
    Shipped: 'bg-purple-100 text-purple-700',
  };

  return (

<div className="bg-white shadow rounded p-4 flex flex-col h-full">
    <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>

  <div className="flex-1 space-y-4 overflow-y-auto">
    {orders.map(order => (
      <Link
        key={order.id}
        to={`/orders/${order.id}`}
        className="block p-3 border rounded hover:shadow-sm transition"
      >
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-gray-500">Order #{order.id}</span>
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusStyles[order.status]}`}>
            {order.status}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium text-gray-800">{order.customer}</p>
            <p className="text-xs text-gray-400">{order.date}</p>
          </div>
          <p className="text-sm font-bold text-blue-600">{order.amount}</p>
        </div>
      </Link>
    ))}
  </div>

  <div className="mt-4 text-right">
    <Link to="/orders" className="text-sm text-blue-600 hover:underline font-medium">
      View all orders →
    </Link>
  </div>
</div>
  );
};

export default RecentOrders;


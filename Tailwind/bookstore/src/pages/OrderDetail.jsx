import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOrders } from '../data/orders.js';

const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    getOrders().then(data => {
      const found = data.find(o => o.id === parseInt(id));
      setOrder(found);
    });
  }, [id]);

  if (!order) {
    return <div className="p-4">Loading order details...</div>;
  }

  return (
    <div className="p-4 bg-white shadow rounded max-w-xl mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Order #{order.id}</h2>
      <p><strong>Customer:</strong> {order.customer}</p>
      <p><strong>Amount:</strong> {order.amount}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <p><strong>Date:</strong> {order.date}</p>
    </div>
  );
};

export default OrderDetail;

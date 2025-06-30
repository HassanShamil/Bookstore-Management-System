export const getStats = () => {
  return Promise.resolve([
    {
      id: 101,
      customer: 'Alice',
      amount: '$120',
      status: 'Delivered',
      date: '2025-06-21',
    },
    {
      id: 102,
      customer: 'Bob',
      amount: '$250',
      status: 'Pending',
      date: '2025-06-20',
    },
    {
      id: 103,
      customer: 'Carol',
      amount: '$90',
      status: 'Processing',
      date: '2025-06-18',
    },
    {
      id: 104,
      customer: 'David',
      amount: '$310',
      status: 'Shipped',
      date: '2025-06-17',
    },
    {
      id: 105,
      customer: 'Eve',
      amount: '$75',
      status: 'Cancelled',
      date: '2025-06-15',
    },
  ]);
};

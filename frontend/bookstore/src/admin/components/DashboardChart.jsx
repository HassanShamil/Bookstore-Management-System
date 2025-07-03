import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DashboardChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [1200, 1900, 3000, 2500, 3200, 2800, 4000, 3700],
        borderColor: 'rgba(59, 130, 246, 1)', // blue-500
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: 'black',
        },
      },
      title: {
        display: true,
        text: 'Monthly Revenue',
        color: 'black',
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: 'black' },
        grid: { display: false },
      },
      y: {
        ticks: { color: 'black' },
        grid: { color: '#e5e7eb' },
      },
    },
  };

  return (

    <div className="bg-white shadow rounded p-4 flex flex-col h-full">
        <div className="relative flex-1 min-h-[300px]">
            <Line data={data} options={options} />
        </div>
    </div>
  );
};

export default DashboardChart;

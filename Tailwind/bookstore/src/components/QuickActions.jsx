import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaUserPlus,
  FaBookMedical,
  FaTags,
  FaChartLine,
} from 'react-icons/fa';

const actions = [
  {
    label: 'Add New Author',
    icon: FaUserPlus,
    color: 'bg-blue-100 text-blue-600',
    path: '/authors/new',
  },
  {
    label: 'Add New Book',
    icon: FaBookMedical,
    color: 'bg-green-100 text-green-600',
    path: '/books/new',
  },
  {
    label: 'Create Promotion',
    icon: FaTags,
    color: 'bg-purple-100 text-purple-600',
    path: '/promotions/new',
  },
  {
    label: 'Generate Report',
    icon: FaChartLine,
    color: 'bg-red-100 text-red-600',
    path: '/reports/generate',
  },
];

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-6">Quick Actions</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <div
              key={index}
              onClick={() => navigate(action.path)}
              className="cursor-pointer bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-4 transition flex items-center space-x-4"
            >
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full ${action.color}`}
              >
                <Icon className="text-lg" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {action.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;

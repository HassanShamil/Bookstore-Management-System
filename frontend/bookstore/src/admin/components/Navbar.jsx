import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="bg-white shadow-md h-16 flex items-center px-4 justify-between">
      <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>

      <div className="flex items-center space-x-4">
        <div className="relative cursor-pointer">
          <FaBell className="text-gray-600 text-xl hover:text-blue-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] h-4 w-4 flex items-center justify-center rounded-full">
            3
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <FaUserCircle className="text-gray-600 text-2xl" />
          <div className="text-sm">
            <p className="font-medium text-gray-800">Admin</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



import React, { useState } from 'react';
import { FaShoppingCart, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-blue-600">
            ShopEase
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {/* <a href="#" className="text-gray-600 hover:text-blue-600">Home</a> */}
            <Link to="/" className="block py-2 text-gray-600 hover:text-blue-600">Home</Link>
            <a href="#" className="text-gray-600 hover:text-blue-600">Shop</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Deals</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Orders</a>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search books..."
                className="border rounded-full pl-4 pr-10 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* <span className="absolute right-3 top-1.5 text-gray-400 text-sm">🔍</span> */}
              <button className="absolute right-3 top-1.5 text-gray-400 text-sm">🔍</button>
            </div>

            {/* Icons */}
            <FaShoppingCart className="text-gray-700 text-xl cursor-pointer hover:text-blue-600" />
            <FaUserCircle className="text-gray-700 text-xl cursor-pointer hover:text-blue-600" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <a href="#" className="block py-2 text-gray-600 hover:text-blue-600">Home</a>
          <a href="#" className="block py-2 text-gray-600 hover:text-blue-600">Shop</a>
          <a href="#" className="block py-2 text-gray-600 hover:text-blue-600">Deals</a>
          <a href="#" className="block py-2 text-gray-600 hover:text-blue-600">Contact</a>
          <div className="flex items-center gap-4 mt-2">
            <FaShoppingCart className="text-gray-700 text-xl cursor-pointer hover:text-blue-600" />
            <FaUserCircle className="text-gray-700 text-xl cursor-pointer hover:text-blue-600" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

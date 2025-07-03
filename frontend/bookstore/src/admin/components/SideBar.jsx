

import React from 'react';
import {
  FaBars, FaBookOpen, FaArrowLeft, FaTachometerAlt, FaBook,
  FaUserEdit, FaUsers, FaBoxOpen, FaCog, FaSignOutAlt
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SideBar = ({ isOpen, toggleSidebar }) => {
  const NavItem = ({ icon, text, to }) => (
    <Link to={to} className="flex items-center space-x-2 text-white text-sm hover:bg-blue-700 p-2 rounded">
      {icon}
      {isOpen && <span>{text}</span>}
    </Link>
  );

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden bg-blue-800 p-4 flex justify-between items-center">
        <h1 className="text-white font-semibold text-lg">Book Store Admin</h1>
        <FaBars className="text-white text-xl cursor-pointer" onClick={toggleSidebar} />
      </div>

      {/* Sidebar */}
      <div className={`bg-blue-800 h-screen fixed top-0 left-0 z-50 overflow-hidden transition-[width] duration-300 ease-in-out ${isOpen ? 'w-48' : 'w-16'}`}>
        <div className="pt-4 space-y-4 px-4">
          <div className="flex items-center justify-between text-white pb-4">
            <FaBookOpen />
            {isOpen && <h1 className="font-semibold text-sm">Book Store Admin</h1>}
            <FaArrowLeft
              className={`cursor-pointer transition-transform duration-300 ${!isOpen ? 'rotate-180' : ''}`}
              onClick={toggleSidebar}
            />
          </div>

          <p className="text-[10px] font-semibold text-blue-300">MAIN</p>
          <NavItem icon={<FaTachometerAlt />} text="Dashboard" to="/" />
          <p className="text-[10px] font-semibold text-blue-300">MANAGEMENT</p>
          <NavItem icon={<FaBook />} text="Books" to="/books" />
          <NavItem icon={<FaUserEdit />} text="Authors" to="/authors" />
          <NavItem icon={<FaUsers />} text="Customers" to="/customers" />
          <NavItem icon={<FaBoxOpen />} text="Orders" to="/orders" />
          <p className="text-[10px] font-semibold text-blue-300">SETTINGS</p>
          <NavItem icon={<FaCog />} text="Settings" to="/settings" />
          <NavItem icon={<FaSignOutAlt />} text="Logout" to="/logout" />
        </div>
      </div>
    </>
  );
};

export default SideBar;

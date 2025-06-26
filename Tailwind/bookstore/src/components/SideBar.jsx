import React, { useState } from 'react';
import { FaBars, FaBookOpen, FaArrowLeft, FaTachometerAlt, FaBook, FaUserEdit, FaUsers, FaBoxOpen, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Toggle Button for Mobile */}
      <div className="md:hidden bg-blue-800 p-4 flex justify-between items-center">
        <h1 className="text-white font-semibold text-lg">Book Store Admin</h1>
        <FaBars className="text-white text-xl cursor-pointer" onClick={toggleSidebar} />
      </div>

      {/* Sidebar */}
      <div className={`bg-blue-800 h-screen fixed md:static top-0 left-0 z-50 transition-all duration-300 ${isOpen ? 'w-48' : 'w-0'} overflow-hidden md:w-48`}>
        <div className="pt-20 space-y-4 px-4">
          <div className="flex items-center justify-between text-white">
            <FaBookOpen />
            <h1 className="font-semibold text-sm">Book Store Admin</h1>
            <FaArrowLeft className="cursor-pointer" onClick={toggleSidebar} />
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

const NavItem = ({ icon, text, to }) => (
  <Link to={to} className="flex items-center space-x-2 text-white text-sm hover:bg-blue-700 p-2 rounded">
    {icon}
    <span>{text}</span>
  </Link>
);

export default SideBar;

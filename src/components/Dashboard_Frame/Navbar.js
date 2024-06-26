// Navbar.js
"use client"
import Image from 'next/image';
import profile from "../../assets/Profile.png";
import React from 'react';
import { FaBell, FaCog, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-8 h-8 border-4 border-yellow-500 rounded-full"></div>
        <ul className="flex ml-4 space-x-4">
          <li><a href="#" className="text-gray-600 bg-gray-300 p-2 rounded-md hover:text-gray-800">Home</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Dashboard</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Projects</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Tasks</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Reporting</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Users</a></li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
      <div className="relative">
      <FaSearch className="absolute left-2 top-2 text-gray-600" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-4 py-1 border rounded-md text-gray-600"
          />
          </div>
           
          <FaBell className="text-gray-600 hover:text-gray-800" />
          <FaCog className="text-gray-600 hover:text-gray-800" />
          
        <Image
          src={profile}
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;

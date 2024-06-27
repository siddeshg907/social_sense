// Navbar.js
"use client"
import Image from 'next/image';
import profile from "../../assets/Profile.png";
import React, { useState } from 'react';
import { FaBell, FaCog, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between w-full rounded-full">
      <div className="flex items-center">
        <div className="w-8 h-8 border-4 border-yellow-500 mr-3 rounded-full"></div>
        <ul className="hidden md:flex ml-4 space-x-4">
          <li><a href="#" className="text-center py-2 px-2 bg-yellow-200 text-yellow-600 text-sm font-medium transition-colors hover:text-primary rounded">Home</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Dashboard</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Projects</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Tasks</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Reporting</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Users</a></li>
        </ul>
        <button
          className="md:hidden ml-4 text-gray-600 hover:text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className="flex items-center space-x-4 ml-auto">
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
      {isMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4 md:hidden">
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Dashboard</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Projects</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Tasks</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Reporting</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Users</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

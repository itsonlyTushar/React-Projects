import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Salon Swipe</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded transition duration-300 ${
                    isActive ? "text-white bg-blue-700" : "text-gray-300 hover:text-white hover:bg-blue-600"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/booking"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-lg transition duration-300 ${
                    isActive ? "text-white bg-purple-700" : "text-gray-300 hover:text-white hover:bg-purple-600"
                  }`
                }
              >
                Booking
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-lg transition duration-300 ${
                    isActive ? "text-white bg-purple-700" : "text-gray-300 hover:text-white hover:bg-purple-600"
                  }`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

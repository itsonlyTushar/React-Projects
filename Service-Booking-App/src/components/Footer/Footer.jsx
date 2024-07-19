import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          &copy; 2024 Salon Swipe. All rights reserved.
        </div>
        <div>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-400">Source Code</a></li>
            <li><a href="#" className="hover:text-gray-400">Github</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
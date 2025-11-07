import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar({ toggleSidebar, setActiveTab }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <button onClick={toggleSidebar} className="p-2 focus:outline-none">
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>
      <h1 className="text-xl">Admin Panel</h1>
      
      {/* User Menu with Icon and Dropdown */}
      <div className="relative">
        <button onClick={toggleDropdown} className="p-2 focus:outline-none flex items-center space-x-2">
          <FontAwesomeIcon icon={faUser} size="lg" />
          <span>User</span>
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg z-10">
            <div className="p-4 border-b">
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-600">johndoe@example.com</p>
            </div>
            <ul className="py-2">
              <li onClick={() => { setActiveTab(20); setIsDropdownOpen(false); }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Profile
              </li>
              <li onClick={() => { setActiveTab(21); setIsDropdownOpen(false); }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Settings
              </li>
              <li onClick={() => { setActiveTab(3); setIsDropdownOpen(false); }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        )}
        </div>
    </nav>
  );
}

export default Navbar;

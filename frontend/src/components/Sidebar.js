import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faCog,
  faUser,
  faSignOutAlt,
  faChevronDown,
  faTools,
  faShieldAlt,
  faEdit,
  faUserShield
} from '@fortawesome/free-solid-svg-icons';
// Import the two logos
import logoOpen from '../assets/largeLogo.webp';
import logoClosed from '../assets/smallLogo.webp';

function Sidebar({ isOpen, setActiveTab }) {
  const [activeMainTab, setActiveMainTab] = useState(null); // Track which main tab is expanded for sub-tabs

  // Toggle the sub-tabs for a main tab
  const toggleSubTabs = (index) => {
    setActiveMainTab(activeMainTab === index ? null : index);
  };

  return (
    <div className={`${isOpen ? 'w-64' : 'w-16'} bg-gray-800 h-screen text-white duration-200 flex flex-col`}>
      {/* Conditionally render the logo based on isOpen */}
      <div className="p-4 flex items-center w-full">
        <img src={isOpen ? logoOpen : logoClosed} alt="Logo" />
      </div>
      <ul className="flex flex-col mt-4">
        {/* Dashboard Tab with Sub-Tabs */}
        <li
          onClick={() => {
            setActiveTab(0);
            toggleSubTabs(0);
          }}
          className={`p-4 hover:bg-gray-700 flex items-center cursor-pointer ${
            isOpen ? 'justify-start pl-4' : 'justify-center'
          }`}
        >
          <FontAwesomeIcon icon={faTachometerAlt} size="lg" />
          {isOpen && (
            <>
              <span className="ml-3">Dashboard</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`ml-auto transform ${activeMainTab === 0 ? 'rotate-180' : ''} transition-transform duration-200`}
              />
            </>
          )}
        </li>
        {isOpen && activeMainTab === 0 && (
          <ul className="ml-8">
            <li onClick={() => setActiveTab(10)} className="p-2 hover:bg-gray-600 flex items-center cursor-pointer">
              <FontAwesomeIcon icon={faTools} className="mr-2" />
              <span>Sub Tab 1</span>
            </li>
            <li onClick={() => setActiveTab(11)} className="p-2 hover:bg-gray-600 flex items-center cursor-pointer">
              <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />
              <span>Sub Tab 2</span>
            </li>
          </ul>
        )}

        {/* Settings Tab with Sub-Tabs */}
        <li
          onClick={() => {
            setActiveTab(1);
            toggleSubTabs(1);
          }}
          className={`p-4 hover:bg-gray-700 flex items-center cursor-pointer ${
            isOpen ? 'justify-start pl-4' : 'justify-center'
          }`}
        >
          <FontAwesomeIcon icon={faCog} size="lg" />
          {isOpen && (
            <>
              <span className="ml-3">Settings</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`ml-auto transform ${activeMainTab === 1 ? 'rotate-180' : ''} transition-transform duration-200`}
              />
            </>
          )}
        </li>
        {isOpen && activeMainTab === 1 && (
          <ul className="ml-8">
            <li onClick={() => setActiveTab(12)} className="p-2 hover:bg-gray-600 flex items-center cursor-pointer">
              <FontAwesomeIcon icon={faTools} className="mr-2" />
              <span>General Settings</span>
            </li>
            <li onClick={() => setActiveTab(13)} className="p-2 hover:bg-gray-600 flex items-center cursor-pointer">
              <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />
              <span>Security Settings</span>
            </li>
          </ul>
        )}

        {/* Profile Tab */}
        <li
          onClick={() => {
            setActiveTab(2);
            toggleSubTabs(2);
          }}
          className={`p-4 hover:bg-gray-700 flex items-center cursor-pointer ${
            isOpen ? 'justify-start pl-4' : 'justify-center'
          }`}
        >
          <FontAwesomeIcon icon={faUser} size="lg" />
          {isOpen && (
            <>
              <span className="ml-3">Profile</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`ml-auto transform ${activeMainTab === 2 ? 'rotate-180' : ''} transition-transform duration-200`}
              />
            </>
          )}
        </li>
        {isOpen && activeMainTab === 2 && (
          <ul className="ml-8">
            <li onClick={() => setActiveTab(14)} className="p-2 hover:bg-gray-600 flex items-center cursor-pointer">
              <FontAwesomeIcon icon={faEdit} className="mr-2" />
              <span>Edit Profile</span>
            </li>
            <li onClick={() => setActiveTab(15)} className="p-2 hover:bg-gray-600 flex items-center cursor-pointer">
              <FontAwesomeIcon icon={faUserShield} className="mr-2" />
              <span>Account Settings</span>
            </li>
          </ul>
        )}

        {/* Logout */}
        <li
          onClick={() => setActiveTab(3)}
          className={`p-4 hover:bg-gray-700 flex items-center cursor-pointer ${
            isOpen ? 'justify-start pl-4' : 'justify-center'
          }`}
        >
          <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
          {isOpen && <span className="ml-3">Logout</span>}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

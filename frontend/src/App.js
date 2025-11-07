import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Tabs from './components/Tabs';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(0); // Track active tab

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} setActiveTab={setActiveTab} />
      <div className={`flex-1 flex flex-col`}>
        <Navbar toggleSidebar={toggleSidebar} setActiveTab={setActiveTab} />
        <div className="p-4 overflow-y-auto">
          <Tabs activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}

export default App;

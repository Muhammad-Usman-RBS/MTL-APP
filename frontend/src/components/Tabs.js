import React from 'react';

function Tabs({ activeTab }) {
  return (
    <div className="p-4">
      {activeTab === 0 && <div>Dashboard Content</div>}
      {activeTab === 10 && <div>Dashboard - Sub Tab 1 Content</div>}
      {activeTab === 11 && <div>Dashboard - Sub Tab 2 Content</div>}
      
      {activeTab === 1 && <div>Settings Content</div>}
      {activeTab === 12 && <div>General Settings Content</div>}
      {activeTab === 13 && <div>Security Settings Content</div>}

      {activeTab === 2 && <div>Profile Content</div>}
      {activeTab === 14 && <div>Edit Profile Content</div>}
      {activeTab === 15 && <div>Account Settings Content</div>}

      {activeTab === 20 && <div>Profile Page Content</div>}
      {activeTab === 21 && <div>Settings Page Content</div>}

      {activeTab === 3 && <div>Logout Content</div>}
    </div>
  );
}

export default Tabs;

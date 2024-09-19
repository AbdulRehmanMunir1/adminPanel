import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/admin/sidebar';

import Dashboard from './components/admin/dashboard';
import AdminLogin from './components/admin/admin_login';  // Capitalize component name as per convention
import Schedule from './components/admin/schedule';
import SettingsComponent from './components/admin/Settings';
import ContentRetriever from './components/admin/smart_search';



const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // State to manage user authentication
  const handleLogin = () => {
    // You can add actual login logic here, like verifying credentials
    setIsAuthenticated(true);
  };

  return (
    <>
      <div className='w-full flex gap-1 '>
        <Sidebar />
        <div className='w-[75%] h-screen rounded-md p-2 bg-primary '>
          <Routes>

            If user is not authenticated, show the login page
            <Route path="/login" element={<AdminLogin onLogin={handleLogin} />} />

            <Route path="/" element={<Dashboard />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/search-content" element={<ContentRetriever />} />
            <Route path="/settings" element={<SettingsComponent />} />

          </Routes>
        </div>
      </div>

    </>


  );
};




export default App

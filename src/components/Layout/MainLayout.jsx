import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from './../shared/sidebar/Sidebar';

const MainLayout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainLayout;

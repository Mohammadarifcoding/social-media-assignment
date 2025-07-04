import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
 
  return (
    <div className="min-h-screen flex flex-col justify-center py-8 sm:px-6 lg:px-8">
      <Outlet />
    </div>
  );
};

export default AuthLayout;

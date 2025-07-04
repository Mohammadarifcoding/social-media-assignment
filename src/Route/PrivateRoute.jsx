import React from 'react';
import { useAuth } from '../store';
import { Navigate, Outlet } from 'react-router';
import Sidebar from '../components/shared/sidebar/Sidebar';

const PrivateRoute = ({ children }) => {
  const { user, loading, token } = useAuth((state) => state.auth);
  console.log(user, loading, token);
  if (loading && !token) {
    return <h1>Loading...</h1>;
  }

  if (token) {
    return children;
  }

  return <Navigate to="/login" replace />;
};

export default PrivateRoute;

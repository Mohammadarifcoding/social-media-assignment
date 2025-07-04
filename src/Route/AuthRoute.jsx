import React from 'react';
import { useAuth } from '../store';
import { Navigate } from 'react-router';

const AuthRoute = ({children}) => {
  const {  loading ,token} = useAuth((state) => state.auth);
  if(loading){
    return <h1>Loading...</h1>
  }
  if (token) {
      return <Navigate to="/" replace />;
  }
  return children
    

};

export default AuthRoute;
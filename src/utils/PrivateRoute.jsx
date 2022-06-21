import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLogin = !!localStorage.getItem('id');

  return isLogin ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

import React from 'react';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <MainPage />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;

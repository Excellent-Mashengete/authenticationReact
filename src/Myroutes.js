import { Routes, Route } from 'react-router-dom';
import React from 'react'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import TWoFactorAuth from './Pages/TwoFactorAuth';

function Myroutes() {
  return (  
    <Routes>
      <Route path="auth/login" element={<Login />} />
      <Route path="auth/register" element={<Register />} />
      <Route path="sessions/two-factor/app" element={<TWoFactorAuth />} />
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default Myroutes
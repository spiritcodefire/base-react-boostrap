import './App.css';
import React, { } from 'react'
import { Routes, Route } from 'react-router-dom';
//import config from './config';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';


function App() {

  console.log('UrlServer: ' + process.env.REACT_APP_CONFIG + '\nVersion: 0.01')

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      {/* <Route path="/Home/:token" element={<Home />} /> */}
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  );
}

export default App;

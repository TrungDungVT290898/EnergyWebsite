import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Layout from './components/Layout';
import Dashboard from './features/dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />}></Route>
      </Route>

      <Route path="*" element={<h1>Not Found-404 </h1>}></Route>
    </Routes>
  );
}

export default App;

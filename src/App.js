import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Correct import for Bootstrap CSS
import './App.css';
import MyNavbarComponent from './components/navbar';
import Calculator from './components/calculator';
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';

function App() {
  return (
    <Router>
      <>
        <MyNavbarComponent />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Calculator />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;


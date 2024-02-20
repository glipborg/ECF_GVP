import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n';
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import AdminDashboard from './components/pages/Dashboard/AdminDashboard';
import SellerDashboard from './components/pages/Dashboard/SellerDashboard';
import CustomerDashboard from './components/pages/Dashboard/CustomerDashboard';
import Cars from './components/pages/Cars/Cars';
import Home from './components/pages/Home/Home';
import Services from './components/pages/Services/Services';
import Legal from './components/common/Modal/Legal';
import LogIn from './components/common/Modal/Login';
import Register from './components/common/Modal/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <Header />
        </div>
        <div className="body">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/admin" element={<AdminDashboard/>} />
              <Route path="/dashboard" element={<SellerDashboard/>} />
              <Route path="/profile" element={<CustomerDashboard/>} />
              <Route path="/services" element={<Services/>} />
              <Route path="/concession" element={<Cars/>} />
              <Route path="/legal" element={<Legal/>} />
              <Route path="/login" element={<LogIn/>} />
              <Route path="/register" element={<Register/>} />
            </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;

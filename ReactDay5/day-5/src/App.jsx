import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import EventBooking from './pages/EventBooking';
import Register from './pages/Register';

const App = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event-booking" element={<EventBooking />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
    <Footer />
  </div>
);

export default App;
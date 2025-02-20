import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import EventBooking from './pages/EventBooking';
import Menu from './pages/Menu';
import UserForm from './pages/UserFrom';
import About from './pages/About';
import { CartProvider } from './context/CartContext';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <CartProvider>
      <div className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <div className={`flex-grow ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/event-form" element={<EventBooking />} />
            <Route path="/register" element={<UserForm />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;

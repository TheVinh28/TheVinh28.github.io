import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import EventBooking from "./pages/EventBooking";
import Menu from "./pages/Menu";
import ProfilePage from "./pages/ProfilePage";
import About from "./pages/About";
import LoginPage from "./pages/LoginPage";
import NewsPage from './pages/NewsPage'
import { CartProvider } from "./context/CartContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from './context/ThemeContext'

const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode); 
      return newMode;
    });
  };

  return (
    <ThemeProvider>
    <AuthProvider>
      <CartProvider>
        <div
          className={`flex flex-col min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
        >
          <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
          <div className={`flex-grow ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
            <Routes>
              <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
              <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
              <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/news" element={<PrivateRoute><NewsPage /></PrivateRoute>} />
              <Route
                path="/event-form"
                element={<PrivateRoute><EventBooking /></PrivateRoute>}
              />
              <Route
                path="/profile"
                element={<PrivateRoute><ProfilePage /></PrivateRoute>}
              />
              <Route
                path="/menu"
                element={<PrivateRoute><Menu /></PrivateRoute>}
              />
            </Routes>
          </div>
          <Footer />
        </div>
        <ToastContainer />
      </CartProvider>
    </AuthProvider>
    </ThemeProvider>
  );
};

export default App;

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="bg-[#032541] text-white mt-10 py-8">
        <div className="container mx-auto text-center space-y-4 px-6">
          <div className="flex justify-center items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-12 w-auto"
              />
              <span className="text-lg font-bold">Movie Booking</span>
            </Link>
          </div>
          <p className="text-gray-300 text-sm">
            © 2025 The Movie Database (TMDb). All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/terms"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Terms of Use
            </Link>
            <Link
              to="/privacy"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    );
  };
export default Footer;
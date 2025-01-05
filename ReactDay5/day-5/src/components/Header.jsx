import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-blue-500 text-white py-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold">Event Booking</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/event-booking" className="hover:underline">Book an Event</Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </div>
        </nav>
      </header>
);

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Menu } from 'antd';

const Header = () => {
  const moviesMenu = (
    <Menu>
      <Menu.Item key="popular">
        <Link to="/movies/popular">Popular</Link>
      </Menu.Item>
      <Menu.Item key="now-playing">
        <Link to="/movies/now-playing">Now Playing</Link>
      </Menu.Item>
      <Menu.Item key="upcoming">
        <Link to="/movies/upcoming">Upcoming</Link>
      </Menu.Item>
      <Menu.Item key="top-rated">
        <Link to="/movies/top-rated">Top Rated</Link>
      </Menu.Item>
    </Menu>
  );

  const tvShowsMenu = (
    <Menu>
      <Menu.Item key="popular">
        <Link to="/tv-shows/popular">Popular</Link>
      </Menu.Item>
      <Menu.Item key="airing-today">
        <Link to="/tv-shows/airing-today">Airing Today</Link>
      </Menu.Item>
      <Menu.Item key="on-tv">
        <Link to="/tv-shows/on-tv">On TV</Link>
      </Menu.Item>
      <Menu.Item key="top-rated">
        <Link to="/tv-shows/top-rated">Top Rated</Link>
      </Menu.Item>
    </Menu>
  );

  const peopleMenu = (
    <Menu>
      <Menu.Item key="popular-people">
        <Link to="/people/popular">Popular People</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="bg-[#032541] text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-2xl font-bold flex items-center space-x-2">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-8 w-auto"
          />
          <span>Movie Booking</span>
        </Link>

        <nav className="flex space-x-6">
          <Dropdown overlay={moviesMenu} placement="bottomLeft" arrow>
            <Link
              to="/movies"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              Movies
            </Link>
          </Dropdown>
          <Dropdown overlay={tvShowsMenu} placement="bottomLeft" arrow>
            <Link
              to="/tv-shows"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              TV Shows
            </Link>
          </Dropdown>
          <Dropdown overlay={peopleMenu} placement="bottomLeft" arrow>
            <Link
              to="/people"
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              People
            </Link>
          </Dropdown>
          <Link
            to="/more"
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            More
          </Link>
        </nav>

        <div className="space-x-4">
          <Link to="/login">
            <Button className="text-[#032541] bg-white hover:bg-gray-200">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button
              className="bg-green-500 hover:bg-green-600 text-white"
              type="primary"
            >
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

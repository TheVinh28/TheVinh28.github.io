import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown, Menu } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, removeAllFromCart } from '../redux/store/cartSlice';

const Header = ({ toggleDarkMode, isDarkMode }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0));
  }, [cartItems]); 

  const menu = (
    <Menu className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <Menu.Item key={item.id}>
            {item.name} - x{item.quantity} (${item.price * item.quantity})
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="ml-2 text-red-500"
            >
              Xóa 1
            </button>
          </Menu.Item>
        ))
      ) : (
        <Menu.Item disabled>No items in cart</Menu.Item>
      )}
      {cartItems.length > 0 && (
        <Menu.Item
          key="delete-all"
          onClick={() => dispatch(removeAllFromCart())}
          className="text-red-500"
        >
          Xóa tất cả
        </Menu.Item>
      )}
    </Menu>
  );

  return (
    <header className={`shadow-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <ul className="flex space-x-6">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "text-orange-500 font-semibold border-b-2 border-orange-500" : `${isDarkMode ? 'text-white' : 'text-gray-700'} hover:text-orange-500`}>Trang chủ</NavLink></li>
          <li><NavLink to="/menu" className={({ isActive }) => isActive ? "text-orange-500 font-semibold border-b-2 border-orange-500" : `${isDarkMode ? 'text-white' : 'text-gray-700'} hover:text-orange-500`}>Thực đơn</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-orange-500 font-semibold border-b-2 border-orange-500" : `${isDarkMode ? 'text-white' : 'text-gray-700'} hover:text-orange-500`}>Về chúng tôi</NavLink></li>
          <li><NavLink to="/news" className={({ isActive }) => isActive ? "text-orange-500 font-semibold border-b-2 border-orange-500" : `${isDarkMode ? 'text-white' : 'text-gray-700'} hover:text-orange-500`}>Tin tức</NavLink></li>
          <li><NavLink to="/event-form" className={({ isActive }) => isActive ? "bg-orange-600 text-white px-4 py-2 rounded" : "bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"}>Đặt tiệc ngay</NavLink></li>
        </ul>
        <div className="flex items-center space-x-4">
          <div className={`relative flex items-center ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-2 rounded`}>
            <input type="text" placeholder="Tìm kiếm món ăn" className={`${isDarkMode ? 'text-white bg-gray-800' : 'text-black bg-white'} border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500`} />
            <button className={`${isDarkMode ? 'text-white' : 'text-gray-500'} absolute right-3 hover:text-orange-500`}>🔍</button>
          </div>
          <NavLink to="/register" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : `${isDarkMode ? 'text-white' : 'text-gray-700'} hover:text-orange-500`}>Tài khoản</NavLink>
          <Dropdown overlay={menu} trigger={['click']}>
            <a className={`relative ${isDarkMode ? 'text-white' : 'text-gray-700'} hover:text-orange-500`}>
              <ShoppingCartOutlined style={{ fontSize: '24px' }} />
              <span className="absolute top-0 right-0 w-5 h-5 text-xs text-white bg-red-500 rounded-full flex justify-center items-center">
                {cartCount}
              </span>
            </a>
          </Dropdown>
          <button onClick={toggleDarkMode} className={`${isDarkMode ? 'text-white' : 'text-gray-700'} hover:text-orange-500`}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

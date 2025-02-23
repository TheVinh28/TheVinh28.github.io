import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const { login, register } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(""); 
  const [isRegistering, setIsRegistering] = useState(false); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      toast.success("Đăng nhập thành công!");
    } catch (error) {
      toast.error("Đăng nhập thất bại!");
      setUsername("");
      setPassword("");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const user = await register(username, password, email);
      if (user) {
        setIsRegistering(false); 
      }
    } catch (error) {
      toast.error("Đăng ký thất bại!");
      setUsername("");
      setPassword("");
      setEmail("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-teal-200 to-pink-200">
      <div className="w-full max-w-lg p-10 bg-white rounded-xl shadow-lg space-y-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800">
          {isRegistering ? "Đăng ký" : "Đăng nhập"}
        </h2>
        <form
          onSubmit={isRegistering ? handleRegister : handleLogin}
          className="space-y-6"
        >
          {isRegistering && (
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out transform hover:scale-105"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Tên đăng nhập"
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out transform hover:scale-105"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <input
              type="password"
              placeholder="Mật khẩu"
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out transform hover:scale-105"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-600 focus:outline-none transition-all duration-300 transform hover:scale-105"
          >
            {isRegistering ? "Đăng ký" : "Đăng nhập"}
          </button>
        </form>
        <div className="text-center">
          <span className="text-gray-600">
            {isRegistering ? "Đã có tài khoản? " : "Chưa có tài khoản? "}
            <button
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-teal-500 hover:underline font-semibold"
            >
              {isRegistering ? "Đăng nhập" : "Đăng ký"}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

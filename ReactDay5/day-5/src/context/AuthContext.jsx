import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true); 
  const [loginError, setLoginError] = useState(""); 
  const [isLoggingIn, setIsLoggingIn] = useState(false); 
  const navigate = useNavigate();


  useEffect(() => {
    if (token) {
      axios
        .get("https://dummyjson.com/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUserData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          logout(); 
        });
    } else {
      setLoading(false);
    }
  }, [token]);

 
  const login = async (username, password) => {
    if (isLoggingIn) return;
  
    setIsLoggingIn(true);
    setLoginError(""); 
  
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });
  
      if (!response.data || !response.data.accessToken) {
        throw new Error("Invalid credentials"); 
      }
  
      setUserData(response.data);
      setToken(response.data.accessToken);
      localStorage.setItem("token", response.data.accessToken);
      navigate("/home"); 
    } catch (error) {
      console.error("Login failed:", error);
      setLoginError("Invalid username or password!"); 
      throw error; 
    } finally {
      setIsLoggingIn(false);
    }
  };

  const logout = () => {
    setUserData(null);
    setToken(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ userData, token, login, logout, loading, loginError, isLoggingIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;

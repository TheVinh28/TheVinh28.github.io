import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    width: "100%" 
  };

  const mainStyle = {
    flex: 1,
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div style={layoutStyle}>
      <Header />
      <main style={mainStyle}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

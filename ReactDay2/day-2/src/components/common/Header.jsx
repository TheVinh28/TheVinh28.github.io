import React from "react";

const Header = () => {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e7f5e9",
    padding: "10px 50px",
    fontFamily: "Arial, sans-serif",
  };

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold",
  };

  const navStyle = {
    display: "flex",
    listStyle: "none",
    margin: 0,
  };

  const navItemStyle = {
    margin: "0 15px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "black",
    fontWeight: "500",
  };

  const buttonStyle = {
    marginLeft: "10px",
    padding: "5px 15px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  };

  const signupButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#4caf50",
    color: "white",
  };

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>Nexcent</div>
      <nav>
        <ul style={navStyle}>
          <li style={navItemStyle}>
            <a href="#" style={linkStyle}>
              Home
            </a>
          </li>
          <li style={navItemStyle}>
            <a href="#" style={linkStyle}>
              Service
            </a>
          </li>
          <li style={navItemStyle}>
            <a href="#" style={linkStyle}>
              Feature
            </a>
          </li>
          <li style={navItemStyle}>
            <a href="#" style={linkStyle}>
              Product
            </a>
          </li>
          <li style={navItemStyle}>
            <a href="#" style={linkStyle}>
              Testimonial
            </a>
          </li>
          <li style={navItemStyle}>
            <a href="#" style={linkStyle}>
              FAQ
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <button style={buttonStyle}>Login</button>
        <button style={signupButtonStyle}>Sign up</button>
      </div>
    </header>
  );
};

export default Header;

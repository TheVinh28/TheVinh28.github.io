import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#1e1e2d",
    color: "white",
    padding: "20px 50px",
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Arial, sans-serif",
  };

  const sectionStyle = {
    flex: 1,
    marginRight: "20px",
  };

  const headingStyle = {
    marginBottom: "10px",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
  };

  const socialIconsStyle = {
    marginTop: "10px",
  };

  const inputStyle = {
    padding: "5px",
    borderRadius: "5px",
    border: "none",
  };

  return (
    <footer style={footerStyle}>
      <div style={sectionStyle}>
        <h3 style={headingStyle}>Nexcent</h3>
        <p>
          Copyright © 2020 Nexcent Ltd.
          <br />
          All rights reserved
        </p>
        <div style={socialIconsStyle}>
          <a href="#" style={{ color: "#4caf50", marginRight: "10px" }}>
            Instagram
          </a>
          <a href="#" style={{ color: "#4caf50", marginRight: "10px" }}>
            Facebook
          </a>
          <a href="#" style={{ color: "#4caf50", marginRight: "10px" }}>
            Twitter
          </a>
          <a href="#" style={{ color: "#4caf50" }}>
            YouTube
          </a>
        </div>
      </div>

      <div style={sectionStyle}>
        <h4 style={headingStyle}>Company</h4>
        <ul style={listStyle}>
          <li>About us</li>
          <li>Blog</li>
          <li>Contact us</li>
          <li>Pricing</li>
          <li>Testimonials</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h4 style={headingStyle}>Support</h4>
        <ul style={listStyle}>
          <li>Help center</li>
          <li>Terms of service</li>
          <li>Legal</li>
          <li>Privacy policy</li>
          <li>Status</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h4 style={headingStyle}>Stay up to date</h4>
        <input type="email" placeholder="Your email address" style={inputStyle} />
      </div>
    </footer>
  );
};

export default Footer;

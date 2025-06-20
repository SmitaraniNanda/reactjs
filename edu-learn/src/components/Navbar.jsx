import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleNavClick = (path, label) => {
    alert(`Navigating to ${label}`);
    navigate(path);
  };

  return (
    <header className="navbar">
      <div className="logo" onClick={() => handleNavClick("/", "Home")}>
        Education Learn
      </div>
      <nav className="nav-links">
        <span onClick={() => handleNavClick("/", "Home")}>Home</span>
        <span onClick={() => handleNavClick("/courses", "Courses")}>Courses</span>
        <span onClick={() => handleNavClick("/about", "About")}>About</span>
        <span onClick={() => handleNavClick("/contact", "Contact")}>Contact</span>
      </nav>
    </header>
  );
}

export default Navbar;

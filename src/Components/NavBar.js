import React from "react";
import "./NavBar.css";

const NavBar = ({ toggleDarkMode, darkMode }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Profiles</a>
          </li>
          <li>
            <a href="#">Create Profile</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>
    </header>
  );
};

export default NavBar;

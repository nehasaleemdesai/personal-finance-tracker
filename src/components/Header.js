import React from "react";
import "./Header.css";
import toggle_light from "../assets/night.png";
import toggle_dark from "../assets/day.png";

function Header({ theme, setTheme }) {
  const toggle_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="header">
      <h1>Personal Finance Tracker</h1>
      <img
        src={theme == "light" ? toggle_light : toggle_dark}
        alt=""
        className="toggle-icon"
        onClick={toggle_mode}
      />
    </div>
  );
}

export default Header;

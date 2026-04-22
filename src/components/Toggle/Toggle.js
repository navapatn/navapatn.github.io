import React, { useState } from "react";
import "./Toggle.css";
import { FaMoon, FaSun } from "react-icons/fa";
import { DARK_THEME, DEFAULT_THEME, LIGHT_THEME, setTheme } from "../../Util/themes";

function Toggle() {
  const initialTheme =
    typeof window !== "undefined" ? localStorage.getItem("theme") || DEFAULT_THEME : DEFAULT_THEME;
  const [isLight, setIsLight] = useState(initialTheme !== DARK_THEME);

  const handleChange = () => {
    const nextTheme = isLight ? DARK_THEME : LIGHT_THEME;
    setTheme(nextTheme);
    setIsLight(nextTheme === LIGHT_THEME);
  };

  return (
    <div className="toggle-container" aria-label="Theme toggle">
      <FaMoon className={`toggle-icon ${isLight ? "" : "is-active"}`} aria-hidden="true" />
      <label className="switch">
        <input type="checkbox" hidden checked={isLight} onChange={handleChange} />
        <span className="slider round"></span>
      </label>
      <FaSun className={`toggle-icon ${isLight ? "is-active" : ""}`} aria-hidden="true" />
    </div>
  );
}

export default Toggle;

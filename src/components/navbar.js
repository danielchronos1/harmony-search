import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import logoWhite from "../logo-white.png";

const Navbar = ({ isDarkMode, toggleTheme }) => {
  return (
    <div className="navbar flex items-center gap-100 pl-12 pr-12 pb-5 pt-5 mb-20 tablet:gap-10 tablet:justify-between tablet:flex-col tablet:w-full small:flex-col small:gap-1 small:mb-10 rounded-b-2xl bg-gray-800">
      <div className="logo-content flex items-center">
        <img
          className="logo w-20 small:mb-5"
          src={logoWhite}
          style={{
            filter: isDarkMode ? "none" : "invert(0)",
          }}
          alt="Logo"
        />
        <p className="company-name text-white text-2xl font-bold -ml-1.5 small:hidden">
          Harmony
        </p>
      </div>
      <div className="change-theme">
        <FontAwesomeIcon
          icon={isDarkMode ? faSun : faMoon}
          className={`${
            isDarkMode ? "text-white" : "text-white"
          } text-2xl cursor-pointer`}
          onClick={toggleTheme}
        />
      </div>
    </div>
  );
};

export default Navbar;

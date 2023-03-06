import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavTabs from "./NavTabs";
// import ghostIcon from "../assets/icons/ghost_avatar.png"
import codeIcon from "../assets/icons/coder_icn.png";
import "./styles/NavBar.module.css";
import "../App.css";
import myCV from "../assets/pdf/Matt Jones C.V 2023 (Google Docs).pdf";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  // handle side toggle navs onClick
  const handleLinkClick = () => {
    setToggle(false);
  };

  return (
    <>
      <nav className="flex bg-primary items-center p-3 mt-0 fixed top-0 w-full z-10 mx-auto">
        <div className="flex lg:flex-1">
          <Link to="/" className="flex items-center -m-2.5 p-2.5">
            <img
              className="h-12 pl-4 pr-6"
              src={`${codeIcon}`}
              alt="coder icon"
            />
          </Link>
          <span className="text-2xl font-bold text-accent">
            <a
              className="nameTag"
              href="https://github.com/Matt-Jones-Developer"
            >
              i am glitchy
            </a>
          </span>
        </div>
        <div className="flex ml-auto pr-4 lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center rounded-md p-2.5 text-white"
            onClick={handleToggle}
          >
            <div className="space-y-2">
              <div className="w-10 h-1.5 bg-white"></div>
              <div className="w-10 h-1.5 bg-white"></div>
              <div className="w-10 h-1.5 bg-white"></div>
            </div>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 nav-items">
          <NavTabs />
        </div>
      </nav>

      {/* for mobile toggle nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col pt-8 pb-6">
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={handleLinkClick}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
          <li>
            <a href={`${myCV}`} target="_blank" rel="noreferrer">
              CV
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;

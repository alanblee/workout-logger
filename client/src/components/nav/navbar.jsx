import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const openNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <header>
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <Link to="/">
              <h1>Ledger</h1>
            </Link>
          </div>
          <div
            className={`menu-icons open ${navOpen ? "hide" : "show"}`}
            onClick={openNav}
          >
            <i className="icon ion-navicon-round"></i>
          </div>

          <ul className={`nav-list ${navOpen ? "active" : null}`}>
            <div className="menu-icons close" onClick={openNav}>
              <i className="ion-close-round icon"></i>
            </div>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-in" className="nav-link">
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-up" className="nav-link">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/workouts" className="nav-link">
                Workouts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

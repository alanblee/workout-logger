import React from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";

const Navbar = () => {
  return (
    <header>
      <div className="nav-container">
        <h1>
          <Link to="/">Ledger</Link>
        </h1>
        <nav className="nav">
          <Link to="/sign-in">Sign In</Link>
          <Link to="/sign-up">Sign Up</Link>
          <Link to="/workouts">Workouts</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

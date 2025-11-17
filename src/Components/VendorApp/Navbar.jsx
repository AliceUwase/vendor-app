import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo_icon from "../../Assets/logo.svg";
import { SelectionCard } from "./SelectionCard";

export const Navbar = ({showBestDeals=false}) => {
  const [isSelectionOpen, setIsSelectionOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/landing">
            <img src={Logo_icon} alt="vendor logo" className="logo-img" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/landing">Home</Link>
          </li>
          <li>
            <Link to="/browsePage">Browse</Link>
          </li>
          <li>
            <Link to="/allCategories">Categories</Link>
          </li>
          {showBestDeals && (
            <li>
              <a href="#specials">Best Deals</a>
            </li>
          )}
          {/* <li><a href="#footer">About</a></li> */}
        </ul>

        <button className="nav-btn" onClick={() => setIsSelectionOpen(true)}>
          Get Started
        </button>
      </div>

      {isSelectionOpen && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Choose your path"
        >
          <div className="modal">
            <button
              className="modal-close"
              aria-label="Close"
              onClick={() => setIsSelectionOpen(false)}
            >
              ×
            </button>
            <SelectionCard />
          </div>
        </div>
      )}
    </nav>
  );
};

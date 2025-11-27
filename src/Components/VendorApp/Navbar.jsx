import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo_icon from "../../Assets/logo.svg";
import { SelectionCard } from "./SelectionCard";
import { isAuthenticated, getCurrentUser, logout } from "../../services/authService";
import { useToast } from "../../contexts/ToastContext";
import './Navbar.css';

export const Navbar = ({showBestDeals=false}) => {
  const toast = useToast();
  const [isSelectionOpen, setIsSelectionOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = isAuthenticated();
      setAuthenticated(authStatus);
      if (authStatus) {
        setUser(getCurrentUser());
      } else {
        setUser(null);
      }
    };

    checkAuth();
    const interval = setInterval(checkAuth, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('Failed to logout. Please try again.');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavLinkClick = () => {
    closeMobileMenu();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/landing" onClick={handleNavLinkClick}>
            <img src={Logo_icon} alt="vendor logo" className="logo-img" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/landing" onClick={handleNavLinkClick}>Home</Link>
          </li>
          <li>
            <Link to="/browsePage" onClick={handleNavLinkClick}>Browse</Link>
          </li>
          <li>
            <Link to="/allCategories" onClick={handleNavLinkClick}>Categories</Link>
          </li>
          {showBestDeals && (
            <li>
              <a href="#specials" onClick={handleNavLinkClick}>Best Deals</a>
            </li>
          )}
        </ul>

        <div className="nav-actions">
          {authenticated ? (
            <>
              <div className="user-info">
                <span className="user-name">{user?.name || 'User'}</span>
              </div>
              <button className="nav-btn logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <button className="nav-btn" onClick={() => setIsSelectionOpen(true)}>
              Get Started
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      >
        <div 
          className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mobile-menu-header">
            <img src={Logo_icon} alt="vendor logo" className="mobile-menu-logo" />
          </div>
          <ul className="mobile-nav-links">
            <li>
              <Link to="/landing" onClick={handleNavLinkClick}>Home</Link>
            </li>
            <li>
              <Link to="/browsePage" onClick={handleNavLinkClick}>Browse</Link>
            </li>
            <li>
              <Link to="/allCategories" onClick={handleNavLinkClick}>Categories</Link>
            </li>
            {showBestDeals && (
              <li>
                <a href="#specials" onClick={handleNavLinkClick}>Best Deals</a>
              </li>
            )}
          </ul>
          {authenticated ? (
            <>
              <div className="mobile-user-info">
                <span className="mobile-user-name">{user?.name || 'User'}</span>
              </div>
              <button 
                className="mobile-nav-btn logout-btn" 
                onClick={() => {
                  handleLogout();
                  closeMobileMenu();
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <button 
              className="mobile-nav-btn" 
              onClick={() => {
                setIsSelectionOpen(true);
                closeMobileMenu();
              }}
            >
              Get Started
            </button>
          )}
        </div>
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

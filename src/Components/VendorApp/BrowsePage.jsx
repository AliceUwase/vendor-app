import React, { useState } from 'react'
import Logo_icon from '../../Assets/logo.svg';
import { SelectionCard } from "./SelectionCard";
import './BrowsePage.css';
import { FaSearch, FaArrowRight } from "react-icons/fa";



export const BrowsePage = () => {
  const [isSelectionOpen, setIsSelectionOpen] = useState(false);

  return (
    <div className='Browse-Page'>
        {/* Navbar */}
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <img src={Logo_icon} alt="vendor logo" className="logo-img"/>
                </div>
                <ul className="nav-links">
                    <li>Home</li>
                    <li>Browse</li>
                    <li>Categories</li>
                    <li>Best Deals</li>
                    <li>About</li>
                </ul>
        
                <button className="nav-btn" onClick={() => setIsSelectionOpen(true)}>Get Started</button>
            </div>
        </nav>

        {/* Main Content */}
        <div className="main-content">
            {/* Hero Section */}
            <div className="hero-section">
                <h1 className="hero-title">Discover Local Vendor.</h1>
                <p className="hero-subtitle">Find the best services and products from your trusted local businesses.</p>
                
                {/* Search Bar */}
                <div className="search-container">
                    <input 
                        type="text" 
                        placeholder="Vendor Title or Keyword" 
                        className="search-input"
                    />
                    <button className="search-btn">
                        <FaSearch color="white" size={20} />
                    </button>
                </div>
            </div>

            {/* Category search Section */}
            <div className="category-section">
                <h2 className="section-title">Search by Category</h2>
                <div className="category-cards">
                    <div className="category-card">
                        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop" alt="Restaurant" />
                        <div className="category-overlay">
                            <span className="category-name">Restaurant</span>
                        </div>
                    </div>
                    <div className="category-card">
                        <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop" alt="Bakery" />
                        <div className="category-overlay">
                            <span className="category-name">Bakery</span>
                        </div>
                    </div>
                    <div className="category-card">
                        <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=200&fit=crop" alt="Catering" />
                        <div className="category-overlay">
                            <span className="category-name">Catering</span>
                        </div>
                    </div>
                </div>
                <button className="all-categories-btn">
                    All Categories
                        <FaArrowRight color="#0891b2" size={16} />
                </button>
            </div>

            {/* Popular Vendors Section */}
            <div className="vendors-section">
                <h2 className="section-title">Popular Vendors</h2>
                <div className="vendors-grid">
                    <div className="vendor-card">
                        <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=80&h=80&fit=crop" alt="L'Abidjanaise" className="vendor-image" />
                        <div className="vendor-info">
                            <div className="vendor-name-type">
                                <h3 className="vendor-name">L'Abidjanaise</h3>
                                <span className="vendor-type">Deli</span>
                            </div>
                            <div className="vendor-location">
                                <img src="https://img.icons8.com/ios-filled/50/000000/marker.png" alt="Location" width="12" height="12" style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                                <span>Kimironko, Gasabo</span>
                            </div>
                        </div>
                        <button className="contact-btn">Contact</button>
                    </div>

                    <div className="vendor-card">
                        <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=80&h=80&fit=crop" alt="Divine Catering" className="vendor-image" />
                        <div className="vendor-info">
                            <div className="vendor-name-type">
                                <h3 className="vendor-name">Divine Catering</h3>
                                <span className="vendor-type">Catering</span>
                            </div>
                            <div className="vendor-location">
                            <img src="https://img.icons8.com/ios-filled/50/000000/marker.png" alt="Location" width="12" height="12" style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                                <span>Kimironko, Gasabo</span>
                            </div>
                        </div>
                        <button className="contact-btn">Contact</button>
                    </div>

                    <div className="vendor-card">
                        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=80&h=80&fit=crop" alt="Mama Pizzalo" className="vendor-image" />
                        <div className="vendor-info">
                            <div className="vendor-name-type">
                                <h3 className="vendor-name">Mama Pizzalo</h3>
                                <span className="vendor-type">Pizzeria</span>
                            </div>
                            <div className="vendor-location">
                            <img src="https://img.icons8.com/ios-filled/50/000000/marker.png" alt="Location" width="12" height="12" style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                                <span>Kimironko, Gasabo</span>
                            </div>
                        </div>
                        <button className="contact-btn">Contact</button>
                    </div>

                    <div className="vendor-card">
                        <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=80&h=80&fit=crop" alt="Dontez Resto" className="vendor-image" />
                        <div className="vendor-info">
                            <div className="vendor-name-type">
                                <h3 className="vendor-name">Dontez Resto</h3>
                                <span className="vendor-type">Restaurant</span>
                            </div>
                            <div className="vendor-location">
                            <img src="https://img.icons8.com/ios-filled/50/000000/marker.png" alt="Location" width="12" height="12" style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                                <span>Kiyovu, Nyarugenge</span>
                            </div>
                        </div>
                        <button className="contact-btn">Contact</button>
                    </div>
                </div>
                <button className="view-all-btn">
                    View All Vendors
                    <FaArrowRight color="#0891b2" size={16} />
                </button>
            </div>
        </div>
    </div>
    
  )
}

import React, { useState } from 'react'
import Logo_icon from '../../Assets/logo.svg';
import { SelectionCard } from "./SelectionCard";
import './AllVendors.css';
import { FaArrowLeft, FaArrowRight} from "react-icons/fa";
import Footer from "./Footer";

export const AllVendors = () => {
    const [isSelectionOpen, setIsSelectionOpen] = useState(false);

        return (
            <div className='AllVendors'>
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
                <div className='main-content'>
                    {/* Hero section */}
                    <div className='header-section'>
                        <h1 className='main-title'>Discover All Vendors</h1>
                        <p className='subtitle'>Browse through a comprehensive list of all registered vendors on our platform.</p>
                    </div>

                    {/* Search Bar */}
                    <div className="search-container" >
                        {/* Filter Button */}
                        <button className="filter-btn">
                            <span style={{display: "flex", alignItems: "center"}}>
                                <svg width="16" height="16" fill="#85878b" style={{marginRight: "6px"}}><path d="M3 4h10M5 8h6M7 12h2" stroke="#85878b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                            </span>
                            Filter
                        </button>
                        {/* Search Input */}
                        <input
                            type="text"
                            placeholder="Search by Name, Category......"
                            className="search-input"
                           
                        />
                        {/* Sort Button */}
                        <button className="sort-btn">
                            <span style={{display: "flex", alignItems: "center"}}>
                                <svg width="16" height="16" fill="#85878b" style={{marginRight: "6px"}}><path d="M10 6l2 2-2 2M6 14V6M6 6l2-2-2-2" stroke="#85878b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                            </span>
                            Sort By
                        </button>
                    </div>

                    {/* Vendor Card grid */}
                    <div className="vendor-grid">
                        <div className="vendor-card">
                            <div className="vendor-profile-image">
                                <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop&crop=center" alt="Divine Catering" />
                            </div>
                            <div className="vendor-info">
                                <h3 className="vendor-name">Divine Catering</h3>
                                <span className="vendor-category">Catering</span>
                                <p className="vendor-description">
                                    Exquisite culinary experiences for events of all sizes, specializing in gourmet dishes and impeccable service.
                                </p>
                                <div className="vendor-location">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    <span>Kimironko, Gasabo</span>
                                </div>
                                <button className="visit-page-btn">Visit Page</button>
                            </div>
                        </div>

                        <div className="vendor-card">
                            <div className="vendor-profile-image">
                                <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop&crop=center" alt="Divine Catering" />
                            </div>
                            <div className="vendor-info">
                                <h3 className="vendor-name">Divine Catering</h3>
                                <span className="vendor-category">Catering</span>
                                <p className="vendor-description">
                                    Exquisite culinary experiences for events of all sizes, specializing in gourmet dishes and impeccable service.
                                </p>
                                <div className="vendor-location">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    <span>Kimironko, Gasabo</span>
                                </div>
                                <button className="visit-page-btn">Visit Page</button>
                            </div>
                        </div>

                        <div className="vendor-card">
                            <div className="vendor-profile-image">
                                <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop&crop=center" alt="Divine Catering" />
                            </div>
                            <div className="vendor-info">
                                <h3 className="vendor-name">Divine Catering</h3>
                                <span className="vendor-category">Catering</span>
                                <p className="vendor-description">
                                    Exquisite culinary experiences for events of all sizes, specializing in gourmet dishes and impeccable service.
                                </p>
                                <div className="vendor-location">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    <span>Kimironko, Gasabo</span>
                                </div>
                                <button className="visit-page-btn">Visit Page</button>
                            </div>
                        </div>

                        <div className="vendor-card">
                            <div className="vendor-profile-image">
                                <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop&crop=center" alt="Divine Catering" />
                            </div>
                            <div className="vendor-info">
                                <h3 className="vendor-name">Divine Catering</h3>
                                <span className="vendor-category">Catering</span>
                                <p className="vendor-description">
                                    Exquisite culinary experiences for events of all sizes, specializing in gourmet dishes and impeccable service.
                                </p>
                                <div className="vendor-location">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    <span>Kimironko, Gasabo</span>
                                </div>
                                <button className="visit-page-btn">Visit Page</button>
                            </div>
                        </div>

                        <div className="vendor-card">
                            <div className="vendor-profile-image">
                                <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop&crop=center" alt="Divine Catering" />
                            </div>
                            <div className="vendor-info">
                                <h3 className="vendor-name">Divine Catering</h3>
                                <span className="vendor-category">Catering</span>
                                <p className="vendor-description">
                                    Exquisite culinary experiences for events of all sizes, specializing in gourmet dishes and impeccable service.
                                </p>
                                <div className="vendor-location">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    <span>Kimironko, Gasabo</span>
                                </div>
                                <button className="visit-page-btn">Visit Page</button>
                            </div>
                        </div>

                        <div className="vendor-card">
                            <div className="vendor-profile-image">
                                <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop&crop=center" alt="Divine Catering" />
                            </div>
                            <div className="vendor-info">
                                <h3 className="vendor-name">Divine Catering</h3>
                                <span className="vendor-category">Catering</span>
                                <p className="vendor-description">
                                    Exquisite culinary experiences for events of all sizes, specializing in gourmet dishes and impeccable service.
                                </p>
                                <div className="vendor-location">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    <span>Kimironko, Gasabo</span>
                                </div>
                                <button className="visit-page-btn">Visit Page</button>
                            </div>
                        </div>

                        <div className="vendor-card">
                            <div className="vendor-profile-image">
                                <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop&crop=center" alt="Divine Catering" />
                            </div>
                            <div className="vendor-info">
                                <h3 className="vendor-name">Divine Catering</h3>
                                <span className="vendor-category">Catering</span>
                                <p className="vendor-description">
                                    Exquisite culinary experiences for events of all sizes, specializing in gourmet dishes and impeccable service.
                                </p>
                                <div className="vendor-location">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    <span>Kimironko, Gasabo</span>
                                </div>
                                <button className="visit-page-btn">Visit Page</button>
                            </div>
                        </div>

                        <div className="vendor-card">
                            <div className="vendor-profile-image">
                                <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop&crop=center" alt="Divine Catering" />
                            </div>
                            <div className="vendor-info">
                                <h3 className="vendor-name">Divine Catering</h3>
                                <span className="vendor-category">Catering</span>
                                <p className="vendor-description">
                                    Exquisite culinary experiences for events of all sizes, specializing in gourmet dishes and impeccable service.
                                </p>
                                <div className="vendor-location">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    <span>Kimironko, Gasabo</span>
                                </div>
                                <button className="visit-page-btn">Visit Page</button>
                            </div>
                        </div>

                        <div className="vendor-card">
                            <div className="vendor-profile-image">
                                <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop&crop=center" alt="Divine Catering" />
                            </div>
                            <div className="vendor-info">
                                <h3 className="vendor-name">Divine Catering</h3>
                                <span className="vendor-category">Catering</span>
                                <p className="vendor-description">
                                    Exquisite culinary experiences for events of all sizes, specializing in gourmet dishes and impeccable service.
                                </p>
                                <div className="vendor-location">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    <span>Kimironko, Gasabo</span>
                                </div>
                                <button className="visit-page-btn">Visit Page</button>
                            </div>
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="pagination">
                    <button className="pagination-btn">
                    <FaArrowLeft style={{ marginRight: '0.5rem' }}  /> 
                    </button>
                    <button className="pagination-btn active">1</button>
                    <button className="pagination-btn">2</button>
                    <button className="pagination-btn">3</button>
                    <button className="pagination-btn">4</button>
                    <button className="pagination-btn">5</button>
                    <button className="pagination-btn">
                    <FaArrowRight style={{ marginRight: '0.5rem' }}  /> 
                    </button>
                </div>
                </div>
                <Footer />
            </div>
        )
}

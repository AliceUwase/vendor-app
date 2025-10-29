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
                        {/* Sort Button
                        <button className="sort-btn">
                            <span style={{display: "flex", alignItems: "center"}}>
                                <svg width="16" height="16" fill="#85878b" style={{marginRight: "6px"}}><path d="M10 6l2 2-2 2M6 14V6M6 6l2-2-2-2" stroke="#85878b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                            </span>
                            Sort By
                        </button> */}
                    </div>

                    {/* Vendor Card grid */}
                    <div className="vendor-grid">
                        <div className="vendor-card">
                            <div className="vendor-profile-image">
                                <img src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" alt="Divine Catering" />
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
                                <img src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="Divine Catering" />
                            </div>
                            <div className="vendor-info">
                                <h3 className="vendor-name">XOXO</h3>
                                <span className="vendor-category">Restaurant</span>
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
                                <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhZmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="Divine Catering" />
                            </div>
                            <div className="vendor-info">
                                <h3 className="vendor-name">Shokola Cafe</h3>
                                <span className="vendor-category">Coffee Shop</span>
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
                                <img src="https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzdHJ5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" alt="Divine Catering" />
                            </div>
                            <div className="vendor-info">
                                <h3 className="vendor-name">Brioche</h3>
                                <span className="vendor-category">Pastry Shop</span>
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
                                <img src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" alt="Divine Catering" />
                            </div>
                            <div className="vendor-info">
                                <h3 className="vendor-name">Sapa Cakes</h3>
                                <span className="vendor-category">Cake Shop</span>
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
                                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" alt="Divine Catering" />
                            </div>
                            <div className="vendor-info">
                                <h3 className="vendor-name">Cave Restaurant</h3>
                                <span className="vendor-category">Restaurant</span>
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
                                <img src="https://images.unsplash.com/photo-1596995804697-27d11d43652e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1037" alt="Divine Catering" />
                            </div>
                            <div className="vendor-info">
                                <h3 className="vendor-name">Kebab House</h3>
                                <span className="vendor-category">Restaurant</span>
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
                                <img src="https://images.unsplash.com/photo-1571757392712-7c1052de7ce5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emVyaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="Divine Catering" />
                            </div>
                            <div className="vendor-info">
                                <h3 className="vendor-name">Mama Pizzalo</h3>
                                <span className="vendor-category">Pizzeria</span>
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
                                <img src="https://images.unsplash.com/photo-1559249849-58451f22f489?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyJTIwam9pbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="Divine Catering" />
                            </div>
                            <div className="vendor-info">
                                <h3 className="vendor-name">Burger Planet</h3>
                                <span className="vendor-category">Burger Joint</span>
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

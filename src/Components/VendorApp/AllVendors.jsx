import React, { useState, useEffect } from 'react'
import Logo_icon from '../../Assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import './AllVendors.css';
import { FaArrowLeft, FaArrowRight, FaSearch } from "react-icons/fa";
import Footer from "./Footer";
import { getAllVendors, searchVendors } from '../../services/vendorService';
import logo_icon from '../../Assets/logo.svg';

const normalizeVendors = (payload) => {
    if (Array.isArray(payload)) return payload;
    if (Array.isArray(payload?.data)) return payload.data;
    return [];
};

export const AllVendors = () => {
    const [vendors, setVendors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        loadVendors();
    }, [currentPage]);

    const loadVendors = async (searchQuery = null) => {
        setIsLoading(true);
        setError('');
        try {
            let response;
            if (searchQuery && searchQuery.trim()) {
                response = await searchVendors(searchQuery.trim());
            } else {
                response = await getAllVendors({ page: currentPage, limit: 9 });
            }
            
            const vendorList = normalizeVendors(response);
            setVendors(vendorList);
            
            if (response.total && response.pages) {
                setTotalPages(response.pages);
            }
        } catch (fetchError) {
            setError(fetchError?.message || 'Unable to load vendors right now.');
            setVendors([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearch = () => {
        setCurrentPage(1);
        loadVendors(searchTerm);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSearch();
        }
    };

    const handleVendorClick = (vendorId) => {
        navigate(`/vendorDetails?id=${vendorId}`);
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const renderPagination = () => {
        const pages = [];
        const maxVisible = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
        let endPage = Math.min(totalPages, startPage + maxVisible - 1);
        
        if (endPage - startPage < maxVisible - 1) {
            startPage = Math.max(1, endPage - maxVisible + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    className={`pagination-btn ${i === currentPage ? 'active' : ''}`}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </button>
            );
        }

        return (
            <div className="pagination">
                <button
                    className="pagination-btn"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <FaArrowLeft style={{ marginRight: '0.5rem' }} />
                </button>
                {pages}
                <button
                    className="pagination-btn"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <FaArrowRight style={{ marginRight: '0.5rem' }} />
                </button>
            </div>
        );
    };

    return (
        <div className='AllVendors'>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="logo">
                        <Link to="/landing">
                            <img src={Logo_icon} alt="vendor logo" className="logo-img"/>
                        </Link>
                    </div>
                    <ul className="nav-links">
                        <li><Link to="/landing">Home</Link></li>
                        <li><Link to="/browsePage">Browse</Link></li>
                        <li><Link to="/allCategories">Categories</Link></li>
                    </ul>
                    <button className="nav-btn" onClick={() => navigate('/vendor-registration')}>Get Started</button>
                </div>
            </nav>

            <div className='main-content'>
                <div className='header-section'>
                    <h1 className='main-title'>Discover All Vendors</h1>
                    <p className='subtitle'>Browse through a comprehensive list of all registered vendors on our platform.</p>
                </div>

                <div className="search-container">
                    <div className="search-wrapper">
                        <input
                            type="text"
                            placeholder="Search by Name, Category......"
                            className="search-input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <button className="search-icon-btn" onClick={handleSearch}>
                            <FaSearch />
                        </button>
                    </div>
                </div>

                {error && <p className="error-text">{error}</p>}
                
                {isLoading ? (
                    <p className="loading-copy">Loading vendors...</p>
                ) : vendors.length === 0 ? (
                    <p className="empty-copy">No vendors found. Try a different search.</p>
                ) : (
                    <div className="vendor-grid">
                        {vendors.map((vendor) => {
                            const displayName = vendor.businessName || vendor.name || 'Vendor';
                            const category = vendor.category || 'General';
                            const location = vendor.city ? `${vendor.city}${vendor.address ? `, ${vendor.address}` : ''}` : vendor.address || 'Location not specified';
                            const image = vendor.photos?.[0] || logo_icon;
                            const description = vendor.description || 'No description available.';

                            return (
                                <div className="vendor-card" key={vendor._id || vendor.id}>
                                    <div className="vendor-profile-image">
                                        <img src={image} alt={displayName} />
                                    </div>
                                    <div className="vendor-info">
                                        <h3 className="vendor-name">{displayName}</h3>
                                        <span className="vendor-category">{category}</span>
                                        <p className="vendor-description">
                                            {description.length > 100 ? `${description.substring(0, 100)}...` : description}
                                        </p>
                                        <div className="vendor-location">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                            <span>{location}</span>
                                        </div>
                                        <button 
                                            className="visit-page-btn"
                                            onClick={() => handleVendorClick(vendor._id || vendor.id)}
                                        >
                                            Visit Page
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {!isLoading && vendors.length > 0 && renderPagination()}
            </div>
            <Footer />
        </div>
    )
}

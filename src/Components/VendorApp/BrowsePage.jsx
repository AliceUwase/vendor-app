import React, { useEffect, useMemo, useState } from 'react'
import './BrowsePage.css';
import { FaSearch, FaArrowRight } from "react-icons/fa";
import Footer from "./Footer";
import { Navbar } from './Navbar';
import { getAllVendors, getVendorsByCategory, searchVendors } from '../../services/vendorService';
import logo_icon from '../../Assets/logo.svg';

const STATIC_CATEGORIES = [
    { label: 'Restaurant', value: 'restaurant', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop' },
    { label: 'Bakery', value: 'bakery', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop' },
    { label: 'Catering', value: 'catering', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=200&fit=crop' },
]

const normalizeVendors = (payload) => {
    if (Array.isArray(payload)) return payload
    if (Array.isArray(payload?.data)) return payload.data
    if (Array.isArray(payload?.vendors)) return payload.vendors
    return []
}

export const BrowsePage = () => {
    const [, setIsSelectionOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('')
    const [vendors, setVendors] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const [activeCategory, setActiveCategory] = useState('')

    useEffect(() => {
        loadVendors(() => getAllVendors())
    }, [])

    const loadVendors = async (fetcher) => {
        setError('')
        setIsLoading(true)
        try {
            const data = await fetcher()
            setVendors(normalizeVendors(data))
        } catch (fetchError) {
            setError(fetchError?.message || 'Unable to load vendors right now.')
            setVendors([])
        } finally {
            setIsLoading(false)
        }
    }

    const handleSearch = () => {
        if (!searchTerm.trim()) {
            setActiveCategory('')
            loadVendors(() => getAllVendors())
            return
        }
        setActiveCategory('')
        loadVendors(() => searchVendors(searchTerm.trim()))
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            handleSearch()
        }
    }

    const handleCategorySelect = (category) => {
        setActiveCategory(category)
        setSearchTerm('')
        loadVendors(() => getVendorsByCategory(category))
    }

    const displayedCategories = useMemo(() => {
        if (!vendors.length) return STATIC_CATEGORIES

        const dynamic = vendors.reduce((acc, vendor) => {
            const category = vendor.category || vendor.vendorCategory
            if (category && !acc.some((item) => item.value === category.toLowerCase())) {
                acc.push({
                    label: category,
                    value: category.toLowerCase(),
                    image: vendor.coverImage || vendor.image || STATIC_CATEGORIES[0].image,
                })
            }
            return acc
        }, [])

        return dynamic.length ? dynamic.slice(0, 3) : STATIC_CATEGORIES
    }, [vendors])

    return (
        <div className='Browse-Page'>
            {/* Navbar */}
           <Navbar/>

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
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <button className="search-btn" onClick={handleSearch} disabled={isLoading}>
                            <FaSearch color="white" size={20} />
                        </button>
                    </div>
                </div>

                {/* Category search Section */}
                <div className="category-section">
                    <h2 className="section-title">Search by Category</h2>
                    <div className="category-cards">
                        {displayedCategories.map((categoryCard) => (
                            <button
                                type="button"
                                className={`category-card ${activeCategory === categoryCard.value ? 'active' : ''}`}
                                key={categoryCard.value}
                                onClick={() => handleCategorySelect(categoryCard.value)}
                            >
                                <img src={categoryCard.image} alt={categoryCard.label} />
                                <div className="category-overlay">
                                    <span className="category-name">{categoryCard.label}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                    <button className="all-categories-btn" onClick={() => window.location.assign('/allCategories')}>
                        All Categories
                            <FaArrowRight color="#0891b2" size={16} />
                    </button>
                </div>

                {/* Popular Venture  Section */}
                <div className="vendors-section">
                    <h2 className="section-title">Popular Vendors</h2>
                    {error && <p className="error-text">{error}</p>}
                    {isLoading ? (
                        <p className="loading-copy">Loading vendors...</p>
                    ) : vendors.length === 0 ? (
                        <p className="empty-copy">No vendors found. Try a different search.</p>
                    ) : (
                        <div className="vendors-grid">
                            {vendors.slice(0, 4).map((vendor) => {
                                const displayName = vendor.businessName || vendor.name || vendor.title || 'Vendor'
                                const category = vendor.category || vendor.vendorCategory || 'General'
                                const location = vendor.location || vendor.address || vendor.city
                                const image = vendor.logo || vendor.image || vendor.coverImage || logo_icon

                                return (
                                    <div className="vendor-card" key={vendor._id || vendor.id || displayName}>
                                        <img src={image} alt={displayName} className="vendor-image" />
                                        <div className="vendor-info">
                                            <div className="vendor-name-type">
                                                <h3 className="vendor-name">{displayName}</h3>
                                                <span className="vendor-type">{category}</span>
                                            </div>
                                            {location && (
                                                <div className="vendor-location">
                                                    <img src="https://img.icons8.com/ios-filled/50/000000/marker.png" alt="Location" width="12" height="12" style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                                                    <span>{location}</span>
                                                </div>
                                            )}
                                        </div>
                                        <button className="contact-btn">Contact</button>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                    <button className="view-all-btn" onClick={() => window.location.assign('/allVendors')}>
                        View All Vendors
                        <FaArrowRight color="#0891b2" size={16} />
                    </button>
                </div>

                {/* AD Section */}
                <div className="grow-business-section">
                    <div className="grow-business-content">
                        <div className="grow-business-illustration">
                            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=400&fit=crop" alt="Business growth illustration" />
                            
                        </div>
                        <div className="grow-business-text">
                            <h2 className="grow-business-title">Grow Your Business With Us</h2>
                            <p className="grow-business-description">
                                Join our platform to reach thousands of potential customers. It's time to elevate your local presence.
                            </p>
                            <ul className="grow-business-features">
                                <li className="feature-item">
                                    <span className="checkmark">✓</span>
                                    Easy setup and management
                                </li>
                                <li className="feature-item">
                                    <span className="checkmark">✓</span>
                                    Expand your customer reach
                                </li>
                                <li className="feature-item">
                                    <span className="checkmark">✓</span>
                                    Boost your online visibility
                                </li>
                            </ul>
                            <button className="get-started-btn" onClick={() => setIsSelectionOpen(true)}>Get Started Now</button>
                        </div>
                    </div>
                </div>
            </div>
                <Footer />
                </div>
                
    
)
}

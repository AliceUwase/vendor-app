import React, { useEffect, useState } from 'react'
import './AllCategories.css';
import Footer from "./Footer";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Navbar } from './Navbar';
import { getAllCategories } from '../../services/categoryService';
import { useNavigate } from 'react-router-dom';

const CATEGORY_IMAGES = {
  'Catering': 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop',
  'Food Truck': 'https://images.unsplash.com/photo-1620589125156-fd5028c5e05b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2087',
  'Coffee Shop': 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
  'Pastry Shop': 'https://plus.unsplash.com/premium_photo-1665669263531-cdcbe18e7fe4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBhc3RyeSUyMHNob3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
  'Restaurant': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
  'Pizzeria': 'https://plus.unsplash.com/premium_photo-1675884330914-4f91255343a6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emVyaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
  'Burger Joint': 'https://plus.unsplash.com/premium_photo-1674670904769-544b31893a15?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyJTIwam9pbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
  'Cake Shop': 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
  'Cantine': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600'
};

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600';

export const AllCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    setIsLoading(true);
    setError('');
    try {
      const response = await getAllCategories();
      if (response.success && Array.isArray(response.data)) {
        setCategories(response.data);
      } else {
        setError('Failed to load categories');
      }
    } catch (err) {
      setError(err.message || 'Failed to load categories');
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewVendors = (categoryName) => {
    navigate(`/browsePage?category=${encodeURIComponent(categoryName)}`);
  };

  const getCategoryImage = (categoryName) => {
    return CATEGORY_IMAGES[categoryName] || DEFAULT_IMAGE;
  };

  return (
    <div className='AllCategories'>
        <Navbar/>

        <main className="main-content">
            <div className="content-container">
                <div className="header-section">
                    <h1 className="main-title">Explore All Vendor Categories</h1>
                    <p className="subtitle">Discover the perfect vendors for any occasion or need, organized for your convenience.</p>
                </div>

                {error && <p className="error-text">{error}</p>}
                
                {isLoading ? (
                    <p className="loading-copy">Loading categories...</p>
                ) : (
                    <div className="categories-grid">
                        {categories.map((category) => (
                            <div className="category-card" key={category._id}>
                                <div className="category-image">
                                    <img 
                                        src={category.icon || getCategoryImage(category.categoryName)}
                                        alt={category.categoryName}
                                    />
                                </div>
                                <div className="category-info">
                                    <div>
                                        <h3 className="categoryGrid-name">{category.categoryName}</h3>
                                        <p className="vendor-count">{category.vendorCount || 0} {category.vendorCount === 1 ? 'Vendor' : 'Vendors'}</p>
                                    </div>
                                    <button 
                                        className="view-btn" 
                                        onClick={() => handleViewVendors(category.categoryName)}
                                    >
                                        View Vendors
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {!isLoading && categories.length === 0 && !error && (
                    <p className="empty-copy">No categories found.</p>
                )}
            </div>
        </main>

        <Footer />
    </div>
  )
}

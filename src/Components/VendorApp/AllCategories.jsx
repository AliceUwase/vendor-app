import React, { useState } from 'react'
import Logo_icon from '../../Assets/logo.svg';
import { SelectionCard } from "./SelectionCard";
import { Link } from 'react-router-dom';
import './AllCategories.css';
import Footer from "./Footer";
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";
import { Navbar } from './Navbar';


export const AllCategories = () => {
  const [isSelectionOpen, setIsSelectionOpen] = useState(false);

  return (
    <div className='AllCategories'>
        {/* Navbar */}
        <Navbar/>

        {/* Main Content */}
        <main className="main-content">
            <div className="content-container">
                {/* Header Section */}
                <div className="header-section">
                    <h1 className="main-title">Explore All Vendor Categories</h1>
                    <p className="subtitle">Discover the perfect vendors for any occasion or need, organized for your convenience.</p>
                </div>

                {/* Categories Grid */}
                <div className="categories-grid">
                    <div className="category-card" >
                        <div className="category-image">
                            <img 
                                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop"
                                alt="Catering Services"
                            />
                        </div>
                        <div className="category-info" >
                            <div >
                                <h3 className="categoryGrid-name">Catering Services</h3>
                                <p className="vendor-count">20 Vendors</p>
                            </div>
                            <button className="view-btn">View Vendors</button>
                        </div>
                    </div>

                    <div className="category-card" >
                        <div className="category-image">
                            <img 
                                src="https://images.unsplash.com/photo-1620589125156-fd5028c5e05b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2087"
                                alt="Catering Services"
                            />
                        </div>
                        <div className="category-info" >
                            <div >
                                <h3 className="categoryGrid-name">Food Truck</h3>
                                <p className="vendor-count">5 Vendors</p>
                            </div>
                            <button className="view-btn">View Vendors</button>
                        </div>
                    </div>

                    <div className="category-card" >
                        <div className="category-image">
                            <img 
                                src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
                                alt="Catering Services"
                            />
                        </div>
                        <div className="category-info" >
                            <div >
                                <h3 className="categoryGrid-name">Coffee SHop</h3>
                                <p className="vendor-count">10 Vendors</p>
                            </div>
                            <button className="view-btn">View Vendors</button>
                        </div>
                    </div>

                    <div className="category-card" >
                        <div className="category-image">
                            <img 
                                src="https://plus.unsplash.com/premium_photo-1665669263531-cdcbe18e7fe4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBhc3RyeSUyMHNob3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
                                alt="Catering Services"
                            />
                        </div>
                        <div className="category-info" >
                            <div >
                                <h3 className="categoryGrid-name">Pastry Shop</h3>
                                <p className="vendor-count">8 Vendors</p>
                            </div>
                            <button className="view-btn">View Vendors</button>
                        </div>
                    </div>

                    <div className="category-card" >
                        <div className="category-image">
                            <img 
                                src="https://media.istockphoto.com/id/1892103156/photo/a-young-man-and-his-pup-at-the-pet-shop.webp?a=1&b=1&s=612x612&w=0&k=20&c=qwvqpzHvG6LZWcwaCsuadxkudZUTjHH_zKf4qYcCDNM="
                                alt="Catering Services"
                            />
                        </div>
                        <div className="category-info" >
                            <div >
                                <h3 className="categoryGrid-name">Pet Foods</h3>
                                <p className="vendor-count">10 Vendors</p>
                            </div>
                            <button className="view-btn">View Vendors</button>
                        </div>
                    </div>

                    <div className="category-card" >
                        <div className="category-image">
                            <img 
                                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
                                alt="Catering Services"
                            />
                        </div>
                        <div className="category-info" >
                            <div >
                                <h3 className="categoryGrid-name">Restaurant</h3>
                                <p className="vendor-count">9 Vendors</p>
                            </div>
                            <button className="view-btn">View Vendors</button>
                        </div>
                    </div>

                    <div className="category-card" >
                        <div className="category-image">
                            <img 
                                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
                                alt="Catering Services"
                            />
                        </div>
                        <div className="category-info" >
                            <div >
                                <h3 className="categoryGrid-name">Bar</h3>
                                <p className="vendor-count">10 Vendors</p>
                            </div>
                            <button className="view-btn">View Vendors</button>
                        </div>
                    </div>

                    <div className="category-card" >
                        <div className="category-image">
                            <img 
                                src="https://plus.unsplash.com/premium_photo-1675884330914-4f91255343a6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emVyaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
                                alt="Catering Services"
                            />
                        </div>
                        <div className="category-info" >
                            <div >
                                <h3 className="categoryGrid-name">Pizzeria</h3>
                                <p className="vendor-count">5 Vendors</p>
                            </div>
                            <button className="view-btn">View Vendors</button>
                        </div>
                    </div>

                    <div className="category-card" >
                        <div className="category-image">
                            <img 
                                src="https://plus.unsplash.com/premium_photo-1674670904769-544b31893a15?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyJTIwam9pbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
                                alt="Catering Services"
                            />
                        </div>
                        <div className="category-info" >
                            <div >
                                <h3 className="categoryGrid-name">Burger Joint</h3>
                                <p className="vendor-count">5 Vendors</p>
                            </div>
                            <button className="view-btn">View Vendors</button>
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
        </main>

        <Footer />
    </div>
  )
}

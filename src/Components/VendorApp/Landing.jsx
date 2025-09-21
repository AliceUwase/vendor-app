import React, { useRef } from "react";
import "./Landing.css";
import Logo_icon from '../../Assets/logo.svg';

export const Landing= () => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        }
    };

    return (
    <div className="Landing-page">
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
                <button className="nav-btn">Get Started</button>
            </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
            <div className="hero-content">
                <h1>Discover amazing Fresh Flavors Today</h1>
                <p>Enjoy up to 30% of your first visit</p>
                <button className="hero-btn">Buy Now</button>
            </div>
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" alt="Food" className="hero-img" />
        </section>

        {/* Popular Vendors Section */}
        <section className="popular-vendors">
            <h2>Popular Vendors</h2>
            <div className="vendor-carousel-container">
                <button className="carousel-nav carousel-nav-left" onClick={scrollLeft}>‹</button>
                <div className="vendor-carousel" ref={carouselRef}>
                    <div className="vendor-card">
                        <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a" alt="Lamane Bakery" className="vendor-image"/>
                        <div className="vendor-info">
                            <h3 className="vendor-name">Lamane Bakery</h3>
                            <div className="vendor-rating">
                                <span className="stars">★★★★☆</span>
                                <span className="rating-number">(4.5)</span>
                            </div>
                            <div className="vendor-details">
                                <span className="distance">0.5 km away</span>
                                <span className="status status-open">Open</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="vendor-card">
                        <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136" alt="Divine Catering" className="vendor-image"/>
                        <div className="vendor-info">
                            <h3 className="vendor-name">Divine Catering</h3>
                            <div className="vendor-rating">
                                <span className="stars">★★★★☆</span>
                                <span className="rating-number">(4.5)</span>
                            </div>
                            <div className="vendor-details">
                                <span className="distance">0.5 km away</span>
                                <span className="status status-closed">Closed</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="vendor-card">
                        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" alt="Delizia Italiana" className="vendor-image"/>
                        <div className="vendor-info">
                            <h3 className="vendor-name">Delizia Italiana</h3>
                            <div className="vendor-rating">
                                <span className="stars">★★★★☆</span>
                                <span className="rating-number">(4.5)</span>
                            </div>
                            <div className="vendor-details">
                                <span className="distance">0.5 km away</span>
                                <span className="status status-open">Open</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-nav carousel-nav-right" onClick={scrollRight}>›</button>
            </div>
        </section>

        {/* Promotions */}
        <section className="promo-container">
            <div className="promo-card">
                <div className="promo-content">
                    <div className="promo-text">
                        <h3>Grow Your Local</h3>
                        <h3>Business Online</h3>
                        <h3>Faster Today</h3>
                    </div>
                    <button className="promo-btn">Register Now</button>
                </div>
                <div className="promo-image">
                    <img src="https://images.unsplash.com/photo-1724668639673-35461076a746?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Local Business" />
                </div>
            </div>
            <div className="community-card">
                <div className="promo-content">
                    <div className="promo-text">
                        <h3>Connect With Your</h3>
                        <h3>Community Now</h3>
                    </div>
                    <button className="promo-btn">Register Now</button>
                </div>
                <div className="promo-image">
                    <img src="https://media.istockphoto.com/id/1488770469/photo/positive-man-chef-preparing-pizza-in-pizzeria.webp?a=1&b=1&s=612x612&w=0&k=20&c=iw1CW1YsddODwJACf-6wPtfuo8qaSu_-D6V_LVQ8iBE=" alt="Community" />
                </div>
            </div>
        </section>

        {/* Order Online */}
        <section className="order-online">
            <div className="order-content">
                <div className="order-text-section">
                    <h3>Stay home & Order</h3>
                    <h3>Delicious Meals Online</h3>
                    <button className="order-btn">Order Now</button>
                </div>
                <div className="order-image-section">
                    <img src="https://images.unsplash.com/photo-1652862730506-9f7310faabbd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Delicious Food" />
                </div>
            </div>
        </section>

        {/* Specials */}
        <section className="specials">
            <div className="specials-card">
                <h3>Today's </h3>
                <h3>Specials</h3>
                <p>50% OFF</p>
            </div>
            <div className="specials-list">
                <div className="special-item">Mama Pizzalo</div>
                <div className="special-item">Isa fOODtruck</div>
                <div className="special-item">Lamane Bakery</div>
            </div>
        </section>

        {/* Parterns */}
        <section className="partners">
            <h3>Our Partners</h3>
            <div className="partner-logos">
                <span className="partner-logo">Logo1</span>
                <span className="partner-logo">Logo1</span>
                <span className="partner-logo">Logo1</span>
            </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
            <blockquote>
                The service I got was absolutely fantastic. Such an easy way to shop and connect with local vendors.
            </blockquote>
            <div className="testimo-author">Jane Doe</div>
        </section>

        {/* FAQs */}
        <section className="faq">
            <h3>Frequently Asked Questions</h3>
            <p>Find quick answers to the most common questions about Vendor App</p>
            <div className="faq-list">
                <div className="faq-item">
                    <strong> How do I sign up as a vendor?</strong>
                    <p>Click the sign Up button at the top right.</p>
                </div>
                <div className="faq-item">
                    <strong> How do I sign up as a vendor?</strong>
                    <p>Click the sign Up button at the top right.</p>
                </div>
                <div className="faq-item">
                    <strong> How do I sign up as a vendor?</strong>
                    <p>Click the sign Up button at the top right.</p>
                </div>
                <div className="faq-item">
                    <strong> How do I sign up as a vendor?</strong>
                    <p>Click the sign Up button at the top right.</p>
                </div>
                <div className="faq-item">
                    <strong> How do I sign up as a vendor?</strong>
                    <p>Click the sign Up button at the top right.</p>
                </div>
                <div className="faq-item">
                    <strong> How do I sign up as a vendor?</strong>
                    <p>Click the sign Up button at the top right.</p>
                </div>
                
            </div>

        </section>
    </div>
    );
};

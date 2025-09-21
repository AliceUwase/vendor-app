import React from "react";
import "./Landing.css";
import Logo_icon from '../../Assets/logo.svg';

export const Landing= () => (
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
            <div className="vendor-carousel">
                {/* carousel component */}
            <div className="vendor-card">Lamane Bakery</div>    
            <div className="vendor-card">Divine Catering</div>
            <div className="vendor-card">Delizia Italiana</div>
            </div>
        </section>

        {/* Promotions */}
        <section className="promo-container">
            <div className="promo-card">
                <h3>Grow Your Local Business Faster Today</h3>
                <button>Get Started</button>
            </div>
            <div className="community-card">
                <h3>Connect with your Communty Now</h3>
                <button>Get Started</button>
            </div>
        </section>

        {/* Order Online */}
        <section className="order-online">
            <h3>Stay home & Order Delicious Meals Online</h3> 
            <button>Order Now</button>
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" alt=" order food" />
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
)

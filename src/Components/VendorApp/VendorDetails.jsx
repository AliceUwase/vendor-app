import React, { useState } from 'react';
import './VendorDetails.css';
import { Link } from 'react-router-dom';
import { SelectionCard } from "./SelectionCard";
import Logo_icon from '../../Assets/logo.svg';
import Logo from '../../Assets/Chick-fil-A-Logo.svg';
import BakeryPhoto from '../../Assets/food1.png';
import Footer from './Footer';

export const VendorDetails = () => {
  const [isSelectionOpen, setIsSelectionOpen] = useState(false);
    return (
      <div className="vendor-details-page">
        {/* Navbar */}
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
                      {/* <li><a href="#specials">Best Deals</a></li> */}
                      {/* <li><a href="#footer">About</a></li> */}
                  </ul>
          
                  <button className="nav-btn" onClick={() => setIsSelectionOpen(true)}>Get Started</button>
              </div>
          </nav>
          <div className='vendor-details-container'>
            {/* Header Section */}
            <header className="vd-header-mod">
              <div className="vd-header-row-1">
                <img src={Logo} alt="Lamane Bakery logo" className="vd-logo" />
                <span className="vd-bakery-name">Lamane Bakery</span>
                <div className="vd-header-rating-bookmark">
                  <span className="vd-header-rating">
                    <span className="vd-star">★</span>
                    <span className="vd-rating-value">4.7</span>
                    <span className="vd-header-reviews">(12 Reviews)</span>
                  </span>
                  <button className="vd-bookmark" aria-label="Bookmark vendor">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-3-7 3V4a1 1 0 0 1 1-1z" stroke="#111827" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="vd-header-tags">
                <span className="vd-tag">Local Bakery</span>
                <span className="vd-tag">Artisan Breads</span>
                <span className="vd-tag">Pastries</span>
                <span className="vd-tag">Coffee Shop</span>
              </div>
            </header>

            {/* Main Two-column Body */}
            <main className="vd-body-mod">
              <div className="vd-body-left">
                <h2 className="vd-section-title">Vendor Details</h2>
                <p className="vd-body-description">
                  Lamane Bakery is a beloved artisanal bakery renowned for its exquisite handcrafted breads, delicate pastries, and comforting coffee. Established in 2010, we pride ourselves on using locally sourced, organic ingredients to create fresh, wholesome, and delicious baked goods. Our philosophy is simple: combine traditional baking techniques with modern culinary innovation to deliver a truly unique experience. From our signature sourdough loaves to our flaky croissants and decadent cakes, every item is baked with passion and precision. We also offer a cozy café atmosphere perfect for a morning coffee or an afternoon treat, making Lamane Bakery a cherished community hub.
                </p>
              </div>
              <div className="vd-body-right">
                <div className="vd-photo-wrap">
                  <img src={BakeryPhoto} alt="Bakery interior" className="vd-photo" />
                  <button className="vd-review-btn" onClick={() => window.location.assign('/ReviewForm')}>Write a review</button>
                </div>
              </div>
            </main>

            {/* Contact Info Section */}
            <section className="vd-section contact-info-section">
              <h2>Contact Info</h2>
              <div className="vd-contact-info-grid">
                <div><span className="vd-contact-icon" role="img" aria-label="Location">📍</span> Kicukiro Centre, Kigali, Rwanda</div>
                <div><span className="vd-contact-icon" role="img" aria-label="Website">🌐</span> www.lamane.rw</div>
                <div><span className="vd-contact-icon" role="img" aria-label="Email">📧</span> support@lamane.com</div>
                <div><span className="vd-contact-icon" role="img" aria-label="Phone">📞</span> +250 78987654</div>
              </div>
            </section>

            {/* Customer Reviews Section */}
            <section className="vd-section vd-reviews-section">
              <h2>Customer Reviews</h2>
              <div className="vd-reviews-list">
                {[
                  {
                    id: 1,
                    name: "Alice Uwase",
                    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
                    role: "Regular Customer",
                    rating: 5,
                    date: "April 23, 2024",
                    text: "This bakery is a hidden gem! Their sourdough bread is absolutely incredible, perfectly crusty on the outside and soft on the inside. I also highly recommend their chocolate croissants – they melt in your mouth. The staff are always friendly and the coffee is excellent. A must-visit if you're in the area!",
                  },
                  {
                    id: 2,
                    name: "Michael Kigeli",
                    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
                    role: "Food Blogger",
                    rating: 4,
                    date: "April 18, 2024",
                    text: "Lamane Bakery offers a fantastic range of baked goods. Their baguettes are particularly noteworthy, and the almond croissants are a delightful treat. The space is a bit small, which can get crowded during peak hours, but the quality of the products makes it worth the visit. Great spot for a quick bite!",
                  },
                  {
                    id: 3,
                    name: "Sophia Z",
                    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
                    role: "Local Resident",
                    rating: 5,
                    date: "April 10, 2024",
                    text: "I adore Lamane Bakery! Their coffee is my daily go-to, and their lemon tarts are simply divine. The atmosphere is cozy and inviting, and the smell of fresh bread baking is just heavenly. It's the perfect place to unwind and enjoy a delicious treat.",
                  },
                  {
                    id: 4,
                    name: "David Ngoga",
                    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
                    role: "New Visitor",
                    rating: 3,
                    date: "March 29, 2024",
                    text: "Visited Lamane Bakery based on recommendations. The pastries were fresh and tasty, but I found the prices a little on the higher side compared to other local options. Good quality overall, but might not be my everyday bakery.",
                  },
                ].map((review) => (
                  <div className="vd-review-card" key={review.id}>
                    <div className="vd-review-meta">
                      <img src={review.avatar} alt={review.name + ' avatar'} className="vd-review-avatar" />
                      <div>
                        <div className="vd-review-name">{review.name}</div>
                        <div className="vd-review-role">{review.role}</div>
                        <div className="vd-review-rating">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < review.rating ? 'star-filled' : 'star-empty'}>★</span>
                          ))}
                        </div>
                      </div>
                      <div className="vd-review-date">{review.date}</div>
                    </div>
                    <div className="vd-review-text">{review.text}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
            

        <Footer />

      </div>
    )
  }






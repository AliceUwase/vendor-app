import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from './Footer';
import './VendorDetails.css';



const VENDORS = {
    'lamane-bakery': {
        name: 'Lamane Bakery',
        categories: ['Local Bakery', 'Artisan Breads', 'Pastries', 'Coffee Shop'],
        rating: 4.7,
        reviewsCount: 326,
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a',
        description:
            'Lamane Bakery is a beloved artisanal bakery renowned for its exquisite handcrafted breads, delicate pastries, and comforting coffee-based specials. Established in 2010, we pride ourselves on using locally sourced organic ingredients to create fresh, wholesome, and delicious baked goods.',
        details:
            'Our philosophy is simple: combine traditional baking techniques with a modern culinary vision to deliver truly exceptional flavors.',
        contact: {
            address: 'Kicukiro Centre, Kigali, Rwanda',
            website: 'www.lamane.rw',
            email: 'support@lamane.rw',
            phone: '+250 789786154'
        }
    }
};

export const VendorDetails = () => {
    const { slug } = useParams();
    const vendor = VENDORS[slug] || VENDORS['lamane-bakery'];

    return (
        <div className="vendor-details-page">
            <header className="vendor-header">
                <div className="vendor-header-info">
                    <h1 className="vendor-title">{vendor.name}</h1>
                    <div className="vendor-meta">
                        <div className="chips">
                            {vendor.categories.map((c) => (
                                <span key={c} className="chip">{c}</span>
                            ))}
                        </div>
                        <div className="rating">
                            <span className="stars">★★★★☆</span>
                            <span className="rating-number">{vendor.rating.toFixed(2)} ({vendor.reviewsCount} reviews)</span>
                        </div>
                    </div>
                    <div className="cta-row">
                        <Link to="/ReviewForm" className="primary-btn">Write a review</Link>
                        <Link to="/" className="secondary-btn">Back to Home</Link>
                    </div>
                </div>
                <div className="vendor-hero">
                    <img className="vendor-hero-img" src={vendor.image} alt={vendor.name} />
                    
                </div>
                
            </header>

            <main className="vendor-main">
                <section className="vendor-section">
                    <h2>Vendor Details</h2>
                    <p>{vendor.description}</p>
                    <p>{vendor.details}</p>
                </section>

                <section className="vendor-section">
                    <h2>Contact Info</h2>
                    <ul className="contact-list">
                        <li>📍 {vendor.contact.address}</li>
                        <li>🌐 {vendor.contact.website}</li>
                        <li>✉️ {vendor.contact.email}</li>
                        <li>📞 {vendor.contact.phone}</li>
                    </ul>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default VendorDetails;



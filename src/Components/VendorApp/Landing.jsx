import React, { useRef, useState } from "react";
import "./Landing.css";
import Logo_icon from '../../Assets/logo.svg';

export const Landing= () => {
    const carouselRef = useRef(null);
    const vendorCarouselRef = useRef(null);
    const [openIndex, setOpenIndex] = useState(0);
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            text:
                "The pepperoni pizza was a delightful surprise, featuring a perfectly crispy crust that held up well under a generous layer of flavorful cheese and a zesty, tangy sauce.",
            rating: 5.0,
            avatar:
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
        },
        {
            id: 2,
            text:
                "Absolutely loved the fresh ingredients and quick service. My go-to spot for lunch!",
            rating: 4.8,
            avatar:
                "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop",
        },
        {
            id: 3,
            text:
                "Great value and friendly staff. Highly recommend trying their specials!",
            rating: 4.9,
            avatar:
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop",
        },
    ];

    const showPrevTestimonial = () => {
        setTestimonialIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const showNextTestimonial = () => {
        setTestimonialIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const faqs = [
        {
            id: 1,
            question: "How do I find businesses near me?",
            answer:
                "Simply use the search bar on our homepage or click Browse to explore by category. You can filter results by distance, ratings, and whether businesses are currently open. Our platform automatically shows the closest businesses first, and you can get directions with just one click.",
        },
        {
            id: 2,
            question: "Is it free for businesses to list their profiles?",
            answer:
                "Yes! Creating a basic business profile is completely free. You can add your business information, photos, hours, and contact details at no cost. We believe in supporting local businesses by making it easy and affordable to get discovered by customers in your community.",
        },
        {
            id: 3,
            question:
                "How do I know if business information is accurate and up-to-date?",
            answer:
                "Business owners can update their information anytime through their dashboard. Customers can also report outdated information or leave reviews about their experiences. We encourage businesses to keep their profiles current and respond to customer feedback to maintain trust in our community.",
        },
        {
            id: 4,
            question: "Can I save my favorite businesses or leave reviews?",
            answer:
                " Absolutely! Create a free account to save your favorite businesses, leave star ratings and written reviews, and get notified about special offers from businesses you follow. Your reviews help other community members make informed decisions and support quality local businesses.",
        },
        {
            id: 5,
            question:
                "How do I contact a business directly through the platform?",
            answer:
                "Each business profile includes multiple contact options for your convenience. You can click to call their phone number directly, get directions to their location, visit their website, or send them a message through our platform. All contact information is provided by the business owners and updated regularly.",
        },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex((prev) => (prev === index ? -1 : index));
    };

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

    const scrollVendorLeft = () => {
        if (vendorCarouselRef.current) {
            const cardWidth = vendorCarouselRef.current.scrollWidth / 5; // Total cards divided by total width
            vendorCarouselRef.current.scrollBy({
                left: -cardWidth,
                behavior: 'smooth'
            });
        }
    };

    const scrollVendorRight = () => {
        if (vendorCarouselRef.current) {
            const cardWidth = vendorCarouselRef.current.scrollWidth / 5; // Total cards divided by total width
            vendorCarouselRef.current.scrollBy({
                left: cardWidth,
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
                        <img src="https://images.unsplash.com/photo-1555244162-803834f70033?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0ZXJpbmd8ZW58MHx8MHx8fDA%3D" alt="Divine Catering" className="vendor-image"/>
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
                        <img src="https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGljZSUyMGNyZWFtJTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D" alt="Delizia Italiana" className="vendor-image"/>
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
            <div className="specials-promo">
                <div className="specials-header">
                    <h3 className="specials-title-cursive">Today's</h3>
                    <h3 className="specials-title-bold">Specials</h3>
                </div>
                <div className="countdown-timer">
                    <span>11 days : 10 hr : 20 min</span>
                </div>
                <div className="sale-section">
                  <img src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNhbGV8ZW58MHx8MHx8fDA%3D" alt="Delicious Food" className="sale-image" />
                </div>
            </div>
            <div className="specials-vendors-container">
                <button className="vendor-carousel-nav vendor-carousel-left" onClick={scrollVendorLeft}>‹</button>
                <div className="specials-vendors" ref={vendorCarouselRef}>
                    <div className="vendor-special-card">
                        <img src="https://plus.unsplash.com/premium_photo-1726837215946-9a40e63a0e34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWZyaWNhbiUyMHBpenplcmlhfGVufDB8fDB8fHww" alt="Mama Pizzalo" className="vendor-special-image"/>
                        <div className="vendor-special-info">
                            <span className="vendor-category">Restaurant</span>
                            <h4 className="vendor-special-name">Mama Pizzalo</h4>
                            <span className="vendor-detail">Buy 1 get 2 free</span>
                            <div className="vendor-pricing">
                                <span className="original-price">RF15,000</span>
                                <span className="current-price">RF7,000</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="vendor-special-card">
                        <img src="https://images.unsplash.com/photo-1641638148267-6b157a285fd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bG9jYWwlMjBncmlsbHxlbnwwfHwwfHx8MA%3D%3D" alt="Issa's Food Truck" className="vendor-special-image"/>
                        <div className="vendor-special-info">
                            <span className="vendor-category">Food Truck</span>
                            <h4 className="vendor-special-name">Issa grill</h4>
                            <span className="vendor-detail">Whole Chicken</span>
                            <div className="vendor-pricing">
                                <span className="original-price">RF12,000</span>
                                <span className="current-price">RF10,000</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="vendor-special-card">
                        <img src="https://images.unsplash.com/photo-1587241321921-91a834d6d191?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJha2VyeXxlbnwwfHwwfHx8MA%3D%3D" alt="Lamane Bakery" className="vendor-special-image"/>
                        <div className="vendor-special-info">
                            <span className="vendor-category">Bakery</span>
                            <h4 className="vendor-special-name">Lamane Bakery</h4>
                            <span className="vendor-detail">Brown Bread</span>
                            <div className="vendor-pricing">
                                <span className="original-price">RF3,000</span>
                                <span className="current-price">RF1,500</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="vendor-special-card">
                        <img src="https://images.unsplash.com/photo-1514481538271-cf9f99627ab4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29mZmVlJTIwJTI2JTIwcGFzdHJpZXN8ZW58MHx8MHx8fDA%3D" alt="Delicious Delights" className="vendor-special-image"/>
                        <div className="vendor-special-info">
                            <span className="vendor-category">Cafe</span>
                            <h4 className="vendor-special-name">Delicious Delights</h4>
                            <span className="vendor-detail">Coffee & Pastries</span>
                            <div className="vendor-pricing">
                                <span className="original-price">RF12,000</span>
                                <span className="current-price">RF7,000</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="vendor-special-card">
                        <img src="https://images.unsplash.com/photo-1630960411440-10f7b59717ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlc2glMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D" alt="Fresh Market" className="vendor-special-image"/>
                        <div className="vendor-special-info">
                            <span className="vendor-category">Market</span>
                            <h4 className="vendor-special-name">Fresh Market</h4>
                            <span className="vendor-detail">Organic Produce</span>
                            <div className="vendor-pricing">
                                <span className="original-price">RF8,000</span>
                                <span className="current-price">RF3,800</span>
                            </div>
                        </div>
                    </div>
            </div>
                <button className="vendor-carousel-nav vendor-carousel-right" onClick={scrollVendorRight}>›</button>
            </div>
        </section>

        {/* Partners */}
        <section className="partners">
            <h3>Our Partners</h3>
            <div className="partner-logos">
                <img src={require("../../Assets/Bakers_Delight-Logo.svg").default} alt="Amy's Kitchen" className="partner-logo"/>
                <img src={require("../../Assets/Chick-fil-A-Logo.svg").default} alt="Amy's Kitchen" className="partner-logo"/>
                <img src={require("../../Assets/Jamba_Juice-Logo.svg").default} alt="Amy's Kitchen" className="partner-logo"/>
                <img src={require("../../Assets/Mountain_Dew-Logo.svg").default} alt="Amy's Kitchen" className="partner-logo"/>
                <img src={require("../../Assets/ThaiBev-Logo.svg").default} alt="Amy's Kitchen" className="partner-logo"/>
                <img src={require("../../Assets/Amy's_Kitchen-Logo.svg").default} alt="Amy's Kitchen" className="partner-logo"/>
            </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
            <button className="testimonial-nav left" onClick={showPrevTestimonial}>‹</button>
            <div className="testimonial-content">
                <img
                    className="testimonial-avatar"
                    src={testimonials[testimonialIndex].avatar}
                    alt="Customer avatar"
                />
                <p className="testimonial-text">{testimonials[testimonialIndex].text}</p>
                <div className="testimonial-stars">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="rating-number">({testimonials[testimonialIndex].rating.toFixed(1)})</span>
                </div>
            </div>
            <button className="testimonial-nav right" onClick={showNextTestimonial}>›</button>
        </section>

        {/* FAQs */}
        <section className="faq" aria-labelledby="faq-heading">
            <h3 id="faq-heading">Frequently Asked Questions</h3>
            <p>Find quick answers to the most common questions about Vendor App</p>
            <div className="accordion" role="list">
                {faqs.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div className={`accordion-item ${isOpen ? "open" : ""}`} key={item.id} role="listitem">
                            <button
                                className="accordion-header"
                                aria-expanded={isOpen}
                                aria-controls={`faq-panel-${item.id}`}
                                id={`faq-control-${item.id}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="accordion-title">{item.question}</span>
                                <span className={`accordion-icon ${isOpen ? "rotate" : ""}`}>⌄</span>
                            </button>
                            <div
                                id={`faq-panel-${item.id}`}
                                role="region"
                                aria-labelledby={`faq-control-${item.id}`}
                                className="accordion-panel"
                                style={{ maxHeight: isOpen ? "200px" : 0 }}
                            >
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    </div>
    );
};

import React, { useState, useEffect, useCallback } from 'react';
import './VendorDetails.css';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Logo_icon from '../../Assets/logo.svg';
import logo_icon from '../../Assets/logo.svg';
import BakeryPhoto from '../../Assets/food1.png';
import Footer from './Footer';
import { getVendorById } from '../../services/vendorService';
import { getReviewsByVendor } from '../../services/reviewService';
import { isAuthenticated } from '../../services/authService';

export const VendorDetails = () => {
  const [searchParams] = useSearchParams();
  const vendorId = searchParams.get('id');
  const navigate = useNavigate();
  const [vendor, setVendor] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const loadVendorData = useCallback(async () => {
    setIsLoading(true);
    setError('');
    try {
      const [vendorResponse, reviewsResponse] = await Promise.all([
        getVendorById(vendorId),
        getReviewsByVendor(vendorId)
      ]);

      if (vendorResponse.success) {
        setVendor(vendorResponse.data);
      } else {
        setError('Vendor not found');
      }

      if (reviewsResponse.success) {
        setReviews(reviewsResponse.data || []);
      }
    } catch (err) {
      setError(err.message || 'Failed to load vendor details');
    } finally {
      setIsLoading(false);
    }
  }, [vendorId]);

  useEffect(() => {
    if (vendorId) {
      loadVendorData();
    } else {
      setError('Vendor ID not provided');
      setIsLoading(false);
    }
  }, [vendorId, loadVendorData]);

  const handleWriteReview = () => {
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }
    navigate(`/ReviewForm?vendorId=${vendorId}`);
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (isLoading) {
    return (
      <div className="vendor-details-page">
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
          </div>
        </nav>
        <div className='vendor-details-container'>
          <p className="loading-copy">Loading vendor details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !vendor) {
    return (
      <div className="vendor-details-page">
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
          </div>
        </nav>
        <div className='vendor-details-container'>
          <p className="error-text">{error || 'Vendor not found'}</p>
        </div>
        <Footer />
      </div>
    );
  }

  const vendorImage = vendor.photos?.[0] || BakeryPhoto;
  const location = vendor.city ? `${vendor.address || ''}, ${vendor.city}` : vendor.address || 'Location not specified';
  const rating = vendor.averageRating || 0;
  const reviewCount = vendor.reviewCount || reviews.length || 0;

  return (
    <div className="vendor-details-page">
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
      <div className='vendor-details-container'>
        <header className="vd-header-mod">
          <div className="vd-header-row-1">
            <img src={logo_icon} alt={`${vendor.businessName} logo`} className="vd-logo" />
            <span className="vd-bakery-name">{vendor.businessName}</span>
            <div className="vd-header-rating-bookmark">
              <span className="vd-header-rating">
                <span className="vd-star">★</span>
                <span className="vd-rating-value">{rating.toFixed(1)}</span>
                <span className="vd-header-reviews">({reviewCount} {reviewCount === 1 ? 'Review' : 'Reviews'})</span>
              </span>
            </div>
          </div>
          <div className="vd-header-tags">
            <span className="vd-tag">{vendor.category}</span>
          </div>
        </header>

        <main className="vd-body-mod">
          <div className="vd-body-left">
            <h2 className="vd-section-title">Vendor Details</h2>
            <p className="vd-body-description">
              {vendor.description || 'No description available.'}
            </p>
          </div>
          <div className="vd-body-right">
            <div className="vd-photo-wrap">
              <img src={vendorImage} alt={vendor.businessName} className="vd-photo" />
              <button className="vd-review-btn" onClick={handleWriteReview}>Write a review</button>
            </div>
          </div>
        </main>

        <section className="vd-section contact-info-section">
          <h2>Contact Info</h2>
          <div className="vd-contact-info-grid">
            <div><span className="vd-contact-icon" role="img" aria-label="Location">📍</span> {location}</div>
            {vendor.email && <div><span className="vd-contact-icon" role="img" aria-label="Email">📧</span> {vendor.email}</div>}
            {vendor.phone && <div><span className="vd-contact-icon" role="img" aria-label="Phone">📞</span> {vendor.phone}</div>}
          </div>
        </section>

        <section className="vd-section vd-reviews-section">
          <h2>Customer Reviews</h2>
          {reviews.length === 0 ? (
            <p className="empty-copy">No reviews yet. Be the first to review!</p>
          ) : (
            <div className="vd-reviews-list">
              {reviews.map((review) => {
                const userName = review.userId?.name || 'Anonymous';
                const userEmail = review.userId?.email || '';
                const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=random`;
                
                return (
                  <div className="vd-review-card" key={review._id || review.id}>
                    <div className="vd-review-meta">
                      <img src={avatarUrl} alt={userName + ' avatar'} className="vd-review-avatar" />
                      <div>
                        <div className="vd-review-name">{userName}</div>
                        <div className="vd-review-role">{userEmail}</div>
                        <div className="vd-review-rating">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < review.rating ? 'star-filled' : 'star-empty'}>★</span>
                          ))}
                        </div>
                      </div>
                      <div className="vd-review-date">{formatDate(review.createdAt)}</div>
                    </div>
                    <div className="vd-review-text">{review.comment}</div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
};

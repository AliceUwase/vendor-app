import React, { useState, useEffect } from 'react'
import './ReviewForm.css'
import Footer from './Footer.jsx';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { createReview } from '../../services/reviewService';
import { isAuthenticated } from '../../services/authService';
import { useToast } from '../../contexts/ToastContext';

export const ReviewForm = () => {
    const [searchParams] = useSearchParams();
    const vendorId = searchParams.get('vendorId');
    const navigate = useNavigate();
    const toast = useToast();
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (!isAuthenticated()) {
            navigate('/login');
            return;
        }
        if (!vendorId) {
            setError('Vendor ID is required');
        }
    }, [vendorId, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        if (rating === 0) {
            const errorMsg = 'Please select a rating';
            setError(errorMsg);
            toast.warning(errorMsg);
            return;
        }
        if (!comment.trim()) {
            const errorMsg = 'Please provide your feedback';
            setError(errorMsg);
            toast.warning(errorMsg);
            return;
        }
        if (!vendorId) {
            const errorMsg = 'Vendor ID is missing';
            setError(errorMsg);
            toast.error(errorMsg);
            return;
        }

        setIsSubmitting(true);
        try {
            const reviewData = {
                vendorId,
                rating,
                comment: comment.trim()
            };
            
            const response = await createReview(reviewData);
            
            if (response.success) {
                setSuccess(true);
                toast.success('Review submitted successfully! Thank you for your feedback.');
                setTimeout(() => {
                    navigate(`/vendorDetails?id=${vendorId}`);
                }, 2000);
            } else {
                const errorMsg = response.message || 'Failed to submit review';
                setError(errorMsg);
                toast.error(errorMsg);
            }
        } catch (err) {
            const errorMsg = err.message || 'Failed to submit review. Please try again.';
            setError(errorMsg);
            toast.error(errorMsg);
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderStars = () => {
        return [1, 2, 3, 4, 5].map((star) => (
            <button
                key={star}
                type='button'
                className={star <= rating ? 'star active' : 'star'}
                onClick={() => setRating(star)}
                disabled={isSubmitting}
            >
                ★
            </button>
        ));
    };

    if (!vendorId) {
        return (
            <>
                <div className="review-form-container">
                    <div className='review-form-card'>
                        <p className="error-text">Vendor ID is required</p>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <div className="review-form-container">
                <div className='review-form-card'>
                    <h1 className='form-title'>Share your Experience</h1>
                    <p className='form-subtitle'>We appreciate your valuable feedback! Please let us know how we're doing.</p>

                    {success && (
                        <div className="success-message">
                            Thank you for your feedback! Redirecting...
                        </div>
                    )}

                    {error && <p className="error-text">{error}</p>}

                    <form className='form-content' onSubmit={handleSubmit}>
                        <div className='form-section'>
                            <label className='form-label center'>Your Rating</label>
                            <div className='star-rating'>
                                {renderStars()}
                            </div>
                        </div>

                        <div className='form-section'>
                            <label className='form-label'>Feedback</label>
                            <textarea
                                className='form-input'
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="Share your experience..."
                                required
                                disabled={isSubmitting}
                                rows={6}
                            />
                        </div>

                        <button 
                            className='submit-btn' 
                            type='submit'
                            disabled={isSubmitting || success}
                        >
                            {isSubmitting ? 'Submitting...' : success ? 'Submitted!' : 'Submit Review'}
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

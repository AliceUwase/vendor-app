import React, { useState } from 'react'
import './ReviewForm.css'
import Footer from './Footer.jsx';

export const ReviewForm = () => {
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if  (rating === 0) {
            alert('Please select a rating');
            return;
        }
        if (!feedback.trim()) {
            alert('Please provide your feedback');
            return;
        }
        if (!name.trim() || !email.trim()) {
            alert('Please fill in your name and email');
            return;
        }
        const reviewData = {
            rating,
            feedback,
            name,
            email,
            timestamp: new Date().toISOString()
        };
        console.log('Review Submitted:', reviewData);
        alert('Thank you for your feedback!');

        setRating(0);
        setFeedback('');
        setName('');
        setEmail('');
    };

    const renderStars = () => {
        return [1, 2, 3, 4, 5].map((star) => (
            <button
                key={star}
                type='button'
                className={star <= rating ? 'star active' : 'star'}
                onClick={() => setRating(star)}
            >
                ★
            </button>
        ));
    };

    return (
        <>
            <div className="review-form-container">
                <div className='review-form-card'>
                    <h1 className='form-title'>Share your Experience</h1>
                    <p className='form-subtitle'>We appreciate your valuable feedback! Please let us know how we're doing.</p>

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
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                            />
                        </div>

                        <div className='form-row'>
                            <div className='form-section'>
                                <label className='form-label'>Name</label>
                                <input
                                    className='form-input'
                                    type='text'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className='form-section'>
                                <label className='form-label'>Email</label>
                                <input
                                    className='form-input'
                                    type='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <button className='submit-btn' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};
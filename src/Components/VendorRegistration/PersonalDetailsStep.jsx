import React from 'react';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'

export const PersonalDetailsStep = ({ data, updateData, onNext, onBack }) => {
    const handleInputChange = (field, value) => {
        updateData(field, value);
    };

    const handleTinOptionChange = (option) => {
        updateData('tinOption', option);
        if (option === 'later') {
            updateData('tinNumber', '');
        } else {
            updateData('tinNumber', '2345123');
        }
    };

    const handleNext = () => {
        if (data.firstName && data.lastName && data.email && data.phone) {
            if (data.tinOption === 'now' && !data.tinNumber) {
                return; 
            }
            onNext();
        }
    };

    return (
        <div className="step-container">
            <div className="step-header">
                <h1>Personal Details</h1>
                <p>Provide your personal and card identification information.</p>
                <a href="/#" className="help-link">Having trouble? Get Help</a>
            </div>

            <div className="step-content">
                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-input"
                            value={data.firstName || ''}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            placeholder="Enter first name"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Last Name</label>
                        <input
                            type="text"
                            className="form-input"
                            value={data.lastName || ''}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            placeholder="Enter last name"
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-input"
                            value={data.email || ''}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="example@gmail.com"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input
                            type="tel"
                            className="form-input"
                            value={data.phone || ''}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="Enter phone number"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label">Tax Identification Number (TIN)</label>
                    <div className="radio-group">
                        <div className="radio-option">
                            <input
                                type="radio"
                                id="tin-now"
                                name="tinOption"
                                className="radio-input"
                                checked={data.tinOption === 'now'}
                                onChange={() => handleTinOptionChange('now')}
                            />
                            <label htmlFor="tin-now" className="radio-label">
                                Provide now
                            </label>
                        </div>
                        <div className="radio-option">
                            <input
                                type="radio"
                                id="tin-later"
                                name="tinOption"
                                className="radio-input"
                                checked={data.tinOption === 'later'}
                                onChange={() => handleTinOptionChange('later')}
                            />
                            <label htmlFor="tin-later" className="radio-label">
                                Provide later (you can add this later in your profile)
                            </label>
                        </div>
                    </div>
                    
                    {data.tinOption === 'now' && (
                        <input
                            type="text"
                            className="form-input"
                            value={data.tinNumber || ''}
                            onChange={(e) => handleInputChange('tinNumber', e.target.value)}
                            placeholder="Enter TIN number"
                        />
                    )}
                </div>
            </div>

            <div className="step-footer">
                <button className="back-button" onClick={onBack}>
                    <FaArrowLeft style={{ marginRight: '0.5rem' }} Previous Step />
                </button>
                <button 
                    className="next-button"
                    onClick={handleNext}
                    disabled={!data.firstName || !data.lastName || !data.email || !data.phone || (data.tinOption === 'now' && !data.tinNumber)}
                >
                    Next Step <FaArrowRight style={{ marginRight: '0.5rem' }}  /> 
                </button>
            </div>
        </div>
    );
};

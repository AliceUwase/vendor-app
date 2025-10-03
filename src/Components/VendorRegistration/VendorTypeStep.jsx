import React from 'react';
import { FaUsers, FaArrowRight } from 'react-icons/fa';

export const VendorTypeStep = ({ data, updateData, onNext }) => {
    const handleVendorTypeSelect = (type) => {
        updateData('vendorType', type);
    };

    const handleNext = () => {
        if (data.vendorType) {
            onNext();
        }
    };

    return (
        <div className="step-container">
            <div className="step-header">
                <h1>Select the type of business Entity</h1>
                <p>Establish you vendor in just a few steps</p>
                <a href="#" className="help-link">Having trouble? Get Help</a>
            </div>

            <div className="step-content">
                <div className="vendor-type-selection">
                    <div 
                        className={`vendor-type-card ${data.vendorType === 'cooperative' ? 'selected' : ''}`}
                        onClick={() => handleVendorTypeSelect('cooperative')}
                    >
                        <div className="vendor-type-icon">
                            
                            <FaUsers size={40}  />
                        </div>
                        <h3>Cooperative</h3>
                    </div>

                    <div 
                        className={`vendor-type-card ${data.vendorType === 'individual' ? 'selected' : ''}`}
                        onClick={() => handleVendorTypeSelect('individual')}
                    >
                        <div className="vendor-type-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
                            </svg>
                        </div>
                        <h3>Individual</h3>
                    </div>
                </div>
            </div>

            <div className="step-footer">
                <button 
                    className="next-button"
                    onClick={handleNext}
                    disabled={!data.vendorType}
                >
                    Next Step <FaArrowRight style={{ marginRight: '0.5rem' }}  />
                </button>
            </div>
        </div>
    );
};

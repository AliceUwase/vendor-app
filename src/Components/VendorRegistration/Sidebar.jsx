import React from 'react';
import logo_icon from '../../Assets/logo.svg';

export const Sidebar = ({ currentStep }) => {
    const steps = [
        { id: 1, title: 'Vendor type', completed: currentStep > 1 },
        { id: 2, title: 'Location', completed: currentStep > 2 },
        { id: 3, title: 'Vendor details', completed: currentStep > 3 },
        { id: 4, title: 'Personal details', completed: currentStep > 4 }
    ];

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="app-logo">
                    <img src={logo_icon} alt="VendorApp Logo" />
                </div>
            </div>
            
            <div className="steps-list">
                {steps.map((step) => (
                    <div 
                        key={step.id} 
                        className={`step-item ${currentStep === step.id ? 'active' : ''} ${step.completed ? 'completed' : ''}`}
                    >
                        <div className="step-indicator">
                            {step.completed ? (
                                <div className="checkmark">
                                   
                                    <span style={{ display: 'flex', alignItems: 'center' }}>
                                        {React.createElement(require('react-icons/fa').FaCheck)}
                                    </span>
                                </div>
                            ) : (
                                <div className="step-number">{step.id}</div>
                            )}
                        </div>
                        <span className="step-title">{step.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

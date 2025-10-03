import React from 'react';

export const RegistrationSuccess = ({ data }) => {
    const handleDashboardClick = () => {
        // Navigate to dashboard or main app
        console.log('Navigate to dashboard');
    };

    const handleProfileClick = () => {
        // Navigate to profile page
        console.log('Navigate to profile');
    };

    return (
        <div className="step-container">
            <div className="success-container">
                <div className="success-icon">
                    ✓
                </div>
                
                <h1 className="success-title">Registration Successful!</h1>
                
                <p className="success-message">
                    Congratulations! Your vendor registration has been completed successfully. 
                    You can now start using the Vendor App to manage your business operations.
                </p>

                <div className="success-actions">
                    <button className="btn-primary" onClick={handleDashboardClick}>
                        Go to Dashboard
                    </button>
                    <button className="btn-secondary" onClick={handleProfileClick}>
                        View Profile
                    </button>
                </div>

                {/* Display summary of registered data */}
                <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px', textAlign: 'left' }}>
                    <h3 style={{ marginBottom: '1rem', color: '#212529' }}>Registration Summary:</h3>
                    <div style={{ display: 'grid', gap: '0.5rem', fontSize: '0.9rem', color: '#6c757d' }}>
                        <div><strong>Vendor Type:</strong> {data.vendorType}</div>
                        <div><strong>Location:</strong> {data.location}</div>
                        <div><strong>Business Name:</strong> {data.vendorName}</div>
                        <div><strong>Contact:</strong> {data.firstName} {data.lastName}</div>
                        <div><strong>Email:</strong> {data.email}</div>
                        <div><strong>Phone:</strong> {data.phone}</div>
                        {data.tinNumber && <div><strong>TIN:</strong> {data.tinNumber}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

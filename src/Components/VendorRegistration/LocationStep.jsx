import React from 'react';
import { FaBuilding, FaMapMarkerAlt, FaHome, FaUniversity, FaIndustry, FaArrowLeft, FaArrowRight } from 'react-icons/fa';


export const LocationStep = ({ data, updateData, onNext, onBack }) => {
    const locations = [
        { id: 'kiyovu1', name: 'Kiyovu', icon: <FaBuilding /> },
        { id: 'kimisagara', name: 'Kimisagara', icon: <FaMapMarkerAlt /> },
        { id: 'gatsinga', name: 'Gatsinga', icon: <FaBuilding /> },
        { id: 'kacyiru', name: 'Kacyiru', icon: <FaIndustry /> },
        { id: 'remera', name: 'Remera', icon: <FaMapMarkerAlt /> },
        { id: 'kiyovu2', name: 'Kiyovu', icon: <FaHome /> },
        { id: 'kasamaba', name: 'Kasamaba', icon: <FaUniversity /> },
        { id: 'kiyovu3', name: 'Kiyovu', icon: <FaBuilding /> },
        { id: 'kagugu', name: 'Kagugu', icon: <FaBuilding /> }
    ];

    const handleLocationSelect = (locationId) => {
        updateData('location', locationId);
    };

    const handleNext = () => {
        if (data.location) {
            onNext();
        }
    };

    return (
        <div className="step-container">
            <div className="step-header">
                <h1>Choose Location</h1>
                <p>Choose the location where plan to register your Vendor</p>
                <a href="/#" className="help-link">Having trouble? Get Help</a>
            </div>

            <div className="step-content">
                <div className="location-grid">
                    {locations.map((location) => (
                        <div
                            key={location.id}
                            className={`location-card ${data.location === location.id ? 'selected' : ''}`}
                            onClick={() => handleLocationSelect(location.id)}
                        >
                            <div className="location-icon">{location.icon}</div>
                            <div className="location-name">{location.name}</div>
                        </div>
                    ))}
                </div>
                
            </div>

            <div className="step-footer">
                <button className="back-button" onClick={onBack}>
                    <FaArrowLeft style={{ marginRight: '0.5rem' }} Previous Step /> 
                </button>
                <button 
                    className="next-button"
                    onClick={handleNext}
                    disabled={!data.location}
                >
                    Next Step <FaArrowRight style={{ marginRight: '0.5rem' }}  />
                </button>
            </div>
        </div>
    );
};

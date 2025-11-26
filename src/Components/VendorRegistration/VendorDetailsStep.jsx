import React, { useState } from 'react';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'

export const VendorDetailsStep = ({ data, updateData, onNext, onBack }) => {
    const [teamMembers, setTeamMembers] = useState([
        { firstName: '', lastName: '' }
    ]);

    const handleInputChange = (field, value) => {
        updateData(field, value);
    };

    const handleTeamMemberChange = (index, field, value) => {
        const updatedMembers = [...teamMembers];
        updatedMembers[index][field] = value;
        setTeamMembers(updatedMembers);
    };

    const addTeamMember = () => {
        setTeamMembers([...teamMembers, { firstName: '', lastName: '' }]);
    };

    const handleNext = () => {
        if (data.vendorName && teamMembers[0].firstName && teamMembers[0].lastName) {
            // Store team members data
            updateData('teamMembers', teamMembers);
            onNext();
        }
    };

    return (
        <div className="step-container">
            <div className="step-header">
                <h1>Vendor Details</h1>
                <p>Enter the details for your Vendor & Team members's Name</p>
                <a href="/#" className="help-link">Having trouble? Get Help</a>
            </div>

            <div className="step-content">
                <div className="form-group">
                    <label className="form-label">Business Name</label>
                    <input
                        type="text"
                        className="form-input"
                        value={data.vendorName || ''}
                        onChange={(e) => handleInputChange('vendorName', e.target.value)}
                        placeholder="Enter business name"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Team Members</label>
                    {teamMembers.map((member, index) => (
                        <div key={index} className="form-row">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-input"
                                    value={member.firstName}
                                    onChange={(e) => handleTeamMemberChange(index, 'firstName', e.target.value)}
                                    placeholder="Enter first name"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-input"
                                    value={member.lastName}
                                    onChange={(e) => handleTeamMemberChange(index, 'lastName', e.target.value)}
                                    placeholder="Enter last name"
                                />
                            </div>
                        </div>
                    ))}
                    <button 
                        type="button" 
                        className="add-more-button"
                        onClick={addTeamMember}
                    >
                        Add More Members
                    </button>
                </div>
            </div>

            <div className="step-footer">
                <button className="back-button" onClick={onBack}>
                    <FaArrowLeft style={{ marginRight: '0.5rem' }} Previous Step /> 
                </button>
                <button 
                    className="next-button"
                    onClick={handleNext}
                    disabled={!data.vendorName || !teamMembers[0].firstName || !teamMembers[0].lastName}
                >
                    {/* "&gt;" is the HTML entity for the ">" (greater than) character */}
                    Next Step <FaArrowRight style={{ marginRight: '0.5rem' }}  />
                </button>
            </div>
        </div>
    );
};

import React, {useState} from 'react'
import './VendorReg.css'
import { VendorTypeStep } from './VendorTypeStep';
import { LocationStep } from './LocationStep';
import { VendorDetailsStep } from './VendorDetailsStep';
import { PersonalDetailsStep } from './PersonalDetailsStep';
import { RegistrationSuccess } from './RegistrationSuccess';
import { Sidebar } from './Sidebar';

const VendorRegistration = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const [VendorData, setVendorData] = useState({
        vendorType: '',
        location: '',
        vendorName: '',
        firstName: '',
        lastName: '',
        email: '',
        phone:'',
        tinOption: 'now',
        tinNumber:'',

    });

    const updateVendorData = (field, value) => {
        setVendorData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const nextStep = () => setCurrentStep(prev => prev + 1);
    const prevStep = () => setCurrentStep(prev => prev - 1);

    
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <VendorTypeStep
                        data={VendorData}
                        updateData={updateVendorData}
                        onNext={nextStep}
                        />;
            
            case 2:
                return <LocationStep
                        data={VendorData}
                        updateData={updateVendorData}
                        onNext={nextStep}
                        onBack={prevStep}
                        />;
            
            case 3:
                return <VendorDetailsStep
                        data={VendorData}
                        updateData={updateVendorData}
                        onNext={nextStep}
                        onBack={prevStep}
                        />;

            case 4:
                return <PersonalDetailsStep
                        data={VendorData}
                        updateData={updateVendorData}
                        onNext={nextStep}
                        onBack={prevStep}
                        />;

            case 5:
                return <RegistrationSuccess data={VendorData}/>;

            default:
                return <VendorTypeStep />;

        }
    };

    return (
        <div className="vendor-registration-container">
            <Sidebar currentStep={currentStep}/>
            <div className="main-content">
                {renderStep()}
            </div>
        </div>
    );
};

export default VendorRegistration;



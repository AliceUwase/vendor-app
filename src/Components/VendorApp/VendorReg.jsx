import React from 'react'

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
                return <RegistrationSuccessStep/>;

            default:
                return <VendorTypeStep />;

        }
    };

    return (
        <div className="vendor-registration-container">
            {currentStep <= 4 &&(
                <ProgressBar currentStep={currentStep} totalSteps={4}/>
            )}

            <Sidebar currentStep={currentStep}/>
            {renderStep()}
        </div>
    )
};
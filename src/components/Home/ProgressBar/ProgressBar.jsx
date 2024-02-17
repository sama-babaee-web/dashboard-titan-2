import React, { useState } from 'react';
import './ProgressBar.css'; 
const steps = [
  {
    label: 'درخواست مشتری',
    step:  1,
  },
  {
    label: 'بررسی',
    step:  2,
  },
  {
    label: 'تایید',
    step:  3,
  },
  {
    label: 'لغو',
    step:  4,
  },
];

const ProgressBar = () => {
  const [activeStep, setActiveStep] = useState(1);

  const nextStep = () => {
    setActiveStep(activeStep +  1);
  };

  const prevStep = () => {
    setActiveStep(activeStep -  1);
  };

  const totalSteps = steps.length;
  const width = `${(100 / (totalSteps -  1)) * (activeStep -  1)}%`;

  return (
    <div className="main-container">
      <div className="step-container" style={{ '--width': width }}>
        {steps.map(({ step, label }) => (
          <div className="step-wrapper" key={step}>
            <div
              className={`step-style ${activeStep >= step ? 'completed' : ''} `}
            >
              {activeStep > step ? (
                <div className="check-mark">L</div>
              ) : (
                <span className="step-count">{step}</span>
              )}
            </div>
            <div className="steps-label-container">
              <span className="step-label  fs11">{label}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons-container">
        <button
          className="button-style"
          onClick={prevStep}
          disabled={activeStep ===  1}
        >
         قبلی
        </button>
        <button
          className="button-style"
          onClick={nextStep}
          disabled={activeStep === totalSteps}
        >
          بعدی
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;


import './Progress.css'
import { FaCheckCircle, FaTimesCircle, FaClock } from 'react-icons/fa';



import React from 'react'

function Progress({ currentStep, totalSteps }) {
    const progressPercentage = (currentStep / totalSteps) * 100;

    const stages = [
        { label: 'درخواست ارسال شد', icon: <FaClock className='h5 pe-1 pt-1' /> },
        { label: 'تحت بررسی', icon: <FaClock className='h5 pe-1 pt-1' /> },
        { label: 'تایید شده', icon: <FaCheckCircle className='h5 pe-1 pt-1' /> },
        { label: 'درخواست مورد تایید نیست', icon: <FaTimesCircle className='h5 pe-1 pt-1' /> },
    ];
    return (

        <div className="d-flex col-12 row justify-content-around p-0 m-0 px-2">
            {stages.map((stage, index) => (
                <div
                    key={index}
                    className={`progress-step ${index < currentStep ? 'completed' : ''} mx-1 col-md-4 col-xl-2 my-2 py-3`}
                >
                    <span className="stage-icon">{stage.icon}</span>
                    <span className="stage-label fs11">{stage.label}</span>
                </div>
            ))}
            {/* <div
                className="progress-bar"
                style={{ width: `${progressPercentage}%` }}
            >
            </div> */}

        </div>


    )
}

export default Progress 
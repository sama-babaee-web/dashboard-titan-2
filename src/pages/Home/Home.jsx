import React from 'react'
import './Home.css'
import Progress from '../../components/Home/Progress/Progress'
import CustomerRequests from '../../components/Home/CustomerRequests/CustomerRequests'
import ProgressBar from '../../components/Home/ProgressBar/ProgressBar'

function Home() {
    const completed = 50;
    return (
        <>
            <div className="row my-3">
                <div className="col-12">
                    <div className="card rounded-10 p-2 py-4  ">
                        <h2 className='h6 pb-4 ps-4'> مراحل تایید گارانتی </h2>
                        <Progress currentStep={1} totalSteps={4} />
                    </div>

                </div>
            </div>
            <div className="row my-3">
                <div className="col-12">
                    <div className="card rounded-10 p-2 py-4  ">
                        <h2 className='h6 pb-4 ps-4'> مراحل تایید گارانتی </h2>
                        <ProgressBar completed={completed} />
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <div className="col-12 row p-0 m-0">
                    <CustomerRequests />
                    <CustomerRequests />
                    <CustomerRequests />
                    <CustomerRequests />

                </div>
            </div>

        </>
    )
}
export default Home

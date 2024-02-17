import React from 'react'
import './Home.css'
import Progress from '../../components/Home/Progress/Progress'
import CustomerRequests from '../../components/Home/CustomerRequests/CustomerRequests'

function Home() {
    return (
        <>
            <div className="row my-3">
                <div className="col-12">
                    <div className="card rounded-10 p-2 py-4 mb-3 ">
                        <h2 className='h6 pb-4 ps-4'> مراحل تایید گارانتی </h2>
                        <Progress currentStep={1} totalSteps={4} />
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

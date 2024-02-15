import React from 'react'
import './Home.css'

function Home() {
    return (
        <>
            <div className="row my-3">
                <div className="col-12">
                    <div className="card rounded-10 p-2 mb-3 ">
                        <div className="card-body d-flex justify-content-center">
                            <progress value={0.5} className='col-8' />
                            {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque illum dolorum dignissimos tenetur atque inventore necessitatibus voluptatibus quos iste ipsa iure ullam nisi quasi impedit porro sed doloribus, amet perspiciatis.</p> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-12 row p-0 m-0">
                    <div className="col-lg-6">
                        <div className="card rounded-10 p-2 mb-3 ">
                            <div className="card-body">

                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque illum dolorum dignissimos tenetur atque inventore necessitatibus voluptatibus quos iste ipsa iure ullam nisi quasi impedit porro sed doloribus, amet perspiciatis.</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque illum dolorum dignissimos tenetur atque inventore necessitatibus voluptatibus quos iste ipsa iure ullam nisi quasi impedit porro sed doloribus, amet perspiciatis.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card rounded-10 p-2 ">
                            <div className="card-body">

                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque illum dolorum dignissimos tenetur atque inventore necessitatibus voluptatibus quos iste ipsa iure ullam nisi quasi impedit porro sed doloribus, amet perspiciatis.</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque illum dolorum dignissimos tenetur atque inventore necessitatibus voluptatibus quos iste ipsa iure ullam nisi quasi impedit porro sed doloribus, amet perspiciatis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home

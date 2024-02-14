import React, { useContext, useEffect, useState } from 'react'
import "./Sidebar.css"
import logo from '../../assets/images/titan.png';

function Sidebar({ className }) {
  return (
    <aside className={`${className} h-100 position-fixed start-0 top-0`}>
      <div className="card sidebar-contents">
        <div className="p-1">

          {/* sidebar-header */}
          <div className="card-header h-auto border-0 bg-transparent">
            <div className="d-flex align-items-center justify-content-start">
              <span>
                <img className='w-60px' src={logo} alt="" />
              </span>
              <div className="d-flex justify-content-center align-items-center">
                <h1 className='h5 fw-bold pt-3'> تایتان تکنولوژی</h1>
              </div>
            </div>
          </div>
          {/* sidebar-body */}

          <div className="card-body  p-3 accordion">
              <ul className='p-0 mb-0'>
                <li className='mb-3 item'>
                  <div className="border rounded py-1 ps-3">
                    <a href="" className='d-flex align-items-center'>
                      <span> <i class="bi bi-person h5 d-flex justify-content-center pt-2"></i></span>
                      <span className="ms-2">بررسی</span>
                    </a>
                  </div>
                </li>
                <li className='mb-3 item'>
                  <div className="border rounded py-1 ps-3">
                    <a href="" className='d-flex align-items-center'>
                      <span> <i class="bi bi-person h5 d-flex justify-content-center pt-2"></i></span>
                      <span className="ms-2">بررسی</span>
                    </a>
                  </div>
                </li>
                <li className='mb-3 item'>
                  <div className="border rounded py-1 ps-3">
                    <a href="" className='d-flex align-items-center'>
                      <span> <i class="bi bi-person h5 d-flex justify-content-center pt-2"></i></span>
                      <span className="ms-2">بررسی</span>
                    </a>
                  </div>
                </li>            

              </ul>
          </div>

        </div>
      </div>
    </aside>
  )
}

export default Sidebar
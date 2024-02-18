import React from 'react'
import "./Sidebar.css"
import logo from '../../assets/images/titan.png';

function Sidebar({ className }) {

  return (
    <aside className={`${className} h-100 position-fixed start-0 top-0`}>
      <div className="card sidebar-contents">

          {/* sidebar-header */}
          <div className="card-header h-auto border-0 bg-transparent">
            <div className="d-flex align-items-center justify-content-start">
              <span>
                <img className='w-60px' src={logo} alt="" />
              </span>
              <div className="d-flex justify-content-center align-items-center">
                <h1 className='h6 fw-bold pt-3'> تایتان تکنولوژی</h1>
              </div>
            </div>
          </div>

          {/* sidebar-body */}
          <div className="card-body p-3">
            <ul className='p-0 mb-0'>
              <li className='mb-2 item'>
                <div className=" py-1 ps-3">
                  <a href="" className='d-flex align-items-center'>
                    <span> <i className="bi bi-house h5 d-flex justify-content-center pt-2"></i></span>
                    <span className="ms-2"> صفحه اصلی </span>
                  </a>
                </div>
              </li>
              <li className='mb-2 item'>
                <div className="py-1 ps-3">
                  <a href="" className='d-flex align-items-center'>
                    <span> <i className="bi bi-wrench-adjustable-circle-fill h5 d-flex justify-content-center pt-2"></i></span>
                    <span className="ms-2"> گارانتی </span>
                  </a>
                </div>
              </li>
              <li className='mb-2 item'>
                <div className="py-1 ps-3">
                  <a href="" className='d-flex align-items-center'>
                    <span> <i className="bi bi-people h5 d-flex justify-content-center pt-2"></i></span>
                    <span className="ms-2">  مشتریان </span>
                  </a>
                </div>
              </li>
              <li className='mb-2 item'>
                <div className="py-1 ps-3">
                  <a href="" className='d-flex align-items-center'>
                    <span> <i className="bi bi-device-hdd-fill h5 d-flex justify-content-center pt-2"></i></span>
                    <span className="ms-2">  محصولات </span>
                  </a>
                </div>
              </li>
              <li className='mb-2 item'>
                <div className="py-1 ps-3">
                  <a href="" className='d-flex align-items-center'>
                    <span> <i className="bi bi-gear-wide-connected h5 d-flex justify-content-center pt-2"></i></span>
                    <span className="ms-2">  خدمات </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* sidebar-footer */}
          <div className="card-footer position-absolute bottom-0 col-12 py-4 bg-white">
            <div className="d-flex justify-content-center align-items-center ">
              <button className='rounded d-flex align-items-center w-36px h-36px p-2 me-2 btn-light-cyan'><i className="bi bi-gear h5 d-flex justify-content-center pt-2"></i></button>
              <button className='rounded d-flex align-items-center w-36px h-36px p-2 me-2 btn-light-red'><i className="bi bi-box-arrow-right  h5 d-flex justify-content-center pt-2"></i></button>
              <button className='rounded d-flex align-items-center w-36px h-36px p-2 me-2 btn-light-orange'><i className="bi bi-moon  h5 d-flex justify-content-center pt-2"></i></button>
            </div>
          </div>
      </div>
    </aside>
  )
}

export default Sidebar
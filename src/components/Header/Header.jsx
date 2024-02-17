import React, { useContext } from 'react'
import "./Header.css"

function Header({ onToggleSidebar, className, isSidebarOpen }) {
    return (
        <header className={`${className}  header position-fixed top-0 end-0`}>
            <div className="card ">
                <div className="carde-body px-0 py-2">
                    <nav className='navbar navbar-light p-0 bg-transparent'>
                        <div className="container-fluid">
                            <div className="d-flex align-items-center order-1 order-lg-0">
                                <div className="sidebar-toggle cursor-pointer d-flex align-items-center justify-content-center bg-transparent border-0 p-0 opened">
                                    <button className=' w-36px h-36px' onClick={onToggleSidebar} >
                                        {isSidebarOpen ? (
                                            <i className="bi bi-x h1 d-flex justify-content-center "></i>
                                        ) : (
                                        <i className="bi bi-list h1 d-flex justify-content-center "></i>
                                        
                                        )}
                                    </button>
                                </div>
                                <div className="title-breadcrumb d-lg-flex flex-column ms-3 d-none ">
                                    <h5 className="title text-gray-dark-important mt-1 mb-3 h6">داشبورد</h5>
                                    <ul className="breadcrumb mb-1">
                                        <li className="breadcrumb-item ">
                                            <a href="" className='hover-text-gray-dark-2'>خانه</a>
                                        </li>
                                        <li className="breadcrumb-item active">
                                            <a href="" className='hover-text-gray-dark-2'>داشبورد</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="toolbar d-flex align-items-center order-0 order-lg-1">
                                <div className="toggleable-toolbar d-flex align-items-center">
                                    <button className='open-tour box w-36px h-36px p-2 me-2'><i className="bi bi-search  h5 d-flex justify-content-center pt-2"></i></button>
                                    <button className='open-tour box w-36px h-36px p-2 me-2'><i className="bi bi-chat  h5 d-flex justify-content-center pt-2"></i></button>
                                    <button className='open-tour box w-36px h-36px p-2 me-2'><i className="bi bi-bell  h5 d-flex justify-content-center pt-2"></i></button>
                                    <button className='open-tour box w-36px h-36px p-2 me-2'><i className="bi bi-person  h5 d-flex justify-content-center pt-2"></i></button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'


function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // Set sidebar to open if window width is greater than  997
      setIsSidebarOpen(window.innerWidth >  997);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const mainContentClass = isSidebarOpen ? 'main-content' : 'main-content-full';
  const headerClass = isSidebarOpen ? 'layout-header' : 'layout-header-full';

  return (
    <>

      <Header onToggleSidebar={toggleSidebar} className={headerClass}  isSidebarOpen={isSidebarOpen}/>
      <Sidebar className={isSidebarOpen ? 'sidebar' : 'sidebar-closed'} />

      <div className={mainContentClass}>
        <main className='main mt-5 p-3'>
          <Outlet />
        </main>
      </div>

    </>
  )
}

export default Layout
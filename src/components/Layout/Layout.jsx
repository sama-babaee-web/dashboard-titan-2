import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'


function Layout() {
  return (
    <>
      <Header />
      <Sidebar />

      <div className="main-content p-3 float-end mt-5">
        <main className='main mt-5'>
          <Outlet />
        </main>
      </div>

    </>
  )
}

export default Layout
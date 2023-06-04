import React from 'react'
import SideBar from '../sidebar/SideBar'
import Header from '../Header/Header'

import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <>
    <Header />
    <div className='md:flex md:gap-6'>
      <SideBar/>
      <Outlet />
     
    </div>
    </>
  )
}

export default Body

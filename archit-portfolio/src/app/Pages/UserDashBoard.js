"use client";

import SideNavMenu from '../Components/SideNavMenu'
import Footer from '../Components/Footer'

import IntroDuction from './IntroDuction'

// Import from libraries 
import { useState, React } from 'react'

const UserDashBoard = () => {

  const [page, setPage] = useState('HomePage')

  return (
    <div>

      <SideNavMenu />

      <div className='clearLeft'>
        <IntroDuction />

      </div>

      <Footer />

    </div>
  )
}

export default UserDashBoard
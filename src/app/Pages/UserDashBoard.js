"use client";

import SideNavMenu from '../Components/SideNavMenu'
import Footer from '../Components/Footer'

import IntroDuction from './IntroDuction'
import Layout from '../Components/Layout'

// Import from libraries 
import { useState, React } from 'react'

const UserDashBoard = () => {

  const [page, setPage] = useState('HomePage')

  return (
    <div>


     <IntroDuction/>
     


      <Footer />

    </div>
  )
}

export default UserDashBoard
import React from 'react'
import SideNavMenu from './SideNavMenu'

const Layout = (props) => {
  return (
    <div>
    <SideNavMenu/>
    <div className='clearLeft'>
         {props.children}
    </div>
   
    </div>
  )
}

export default Layout
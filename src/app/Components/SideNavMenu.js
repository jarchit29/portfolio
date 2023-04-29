"use client";

import {React, useState } from 'react'

const SideNavMenu = () => {

    const [mouseOver, setMouseOver] = useState(false)

    const navItems = [{ label: "Work" }, { label: "My Skills " }, { label: "Contact" }, { label: "Blogs  " }]

    return (
        <div>

            <div className='sidenav'>
                <div>
                    {mouseOver?<img id = 'sideImg' src='b.png' onMouseOver={()=>{setMouseOver(!mouseOver)}} />:<img id = 'sideImg' src='3.png' onMouseOver={()=>{setMouseOver(!mouseOver)}} />}
                </div>
                <div className='mt-2 info-cont'>

                    <p className='text-center text-main'> ARCHIT JAIN </p>
                    <p className='text-center'> Software Enginner </p>
                </div>

                <div className='mt-5'>

                    {
                        navItems.map((item,index) => {
                            return (
                                <div className='sidenavItem' key={index}>
                                    <a> {item.label} </a>

                                </div>
                            )
                        })
                    }

                </div>


            </div>




        </div>
    )
}

export default SideNavMenu
import React from 'react'
import { useState, useEffect } from 'react'

const IntroDuction = () => {

    const [section, setSection] = useState(1);

    useEffect(() => {

        window.addEventListener('scroll', () => {
            behaviour: 'smooth'
        });
    }, []);


    return (
        <div>

            <div className='bottomRight'>

                <aside>
                    <ul>
                        <li>
                            <a class={`indicator ${section == 1 ? 'active ' : ''}`} href="#first" onClick={() => { setSection(1) }}></a>
                        </li>
                        <li>
                            <a class={`indicator ${section == 2 ? 'active ' : ''}`} href="#second" onClick={() => { setSection(2) }}></a>
                        </li>
                        <li>
                            <a class={`indicator ${section == 3 ? 'active ' : ''}`} href="#third" onClick={() => { setSection(3) }}></a>
                        </li>
                        <li>
                            <a class={`indicator ${section == 4 ? 'active ' : ''}`} href="#fourth" onClick={() => { setSection(4) }}></a>
                        </li>


                    </ul>
                </aside>

            </div>


            <>
                <section id="first" className='topCont'>

                    <div>
                        <img src='w.png' className='imgCont' />
                    </div>

                    <div>
                        <h1>
                            Hi ,
                        </h1>
                        <div className='mt-3 flexDisplay'>
                            <h1 style={{ color: '#08FDD8' }}>A</h1> <h1>RCHIT THIS SIDE , </h1>
                        </div>
                        <h1 className='mt-3'>
                            Software engineer
                        </h1>
                    </div>

                </section>

                <section id="second" className='topCont'>
                    <div>
                        <img src='feather.svg.png' className='imgCont' />
                    </div>

                    <div>
                        <h1>
                            Passionate about , 
                        </h1>
                        <div className='mt-3 flexDisplay'>
                            <h1> filling voids of life with  </h1>
                        </div>
                        <h1 className='mt-3'>
                            mesmerizing words 
                        </h1>
                    </div>
                </section>

                <section id="third">
                    <h1>Goodbye!</h1>
                </section>

                <section id="fourth">
                    hi
                </section>
            </>



            {/* {
               
                section == 'first' ? (<section>
                    <h1>Hello</h1>
                </section>) : section == 'second' ? <section>
                    <h1>Hiii</h1>
                </section> : section == 'third' ? <section >
                    <h1>bye </h1>
                </section> : section == 'fourth' ? <section>
                    <h1>Ho</h1>
                </section> : <></>
               

            } */}

        </div>
    )
}

export default IntroDuction
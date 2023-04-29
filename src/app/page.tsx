import Image from 'next/image'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import UserDashBoard from '../app/Pages/UserDashBoard'
import '../app/Styles/Style.css'


export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
     <UserDashBoard/>
      
      
    
    </>
  )
}

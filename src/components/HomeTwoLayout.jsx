import React from 'react'
import Header from './Header'
import { Outlet } from "react-router";
import Footer from './Footer'

const HomeTwoLayout = () => {
  return (
    <>
      <Header />
        <main>
               <Outlet />
        </main>
      <Footer /> 
    </>
  )
}

export default HomeTwoLayout

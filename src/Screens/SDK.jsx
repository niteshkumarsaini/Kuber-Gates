import React from 'react'
import Navbar from '../Components/Navbar'
import SDKsComponent from '../Components/SDKsComponent'
import SecurityTransparency from '../Components/SecurityTransparency'
import CryptoCTA from '../Components/CryptoCTA'
import Footer from '../Components/Footer'

const SDK = () => {
  return (
    <div>
        <Navbar/>
        <SDKsComponent/>
        <SecurityTransparency/>
        <CryptoCTA/>
        <Footer/>
      
    </div>
  )
}

export default SDK

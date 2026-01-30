import React from 'react'
import Navbar from '../Components/Navbar'
import CompanyProfile from '../Components/CompanyProfile'
import SecurityTransparency from '../Components/SecurityTransparency'
import CryptoCTA from '../Components/CryptoCTA'
import Footer from '../Components/Footer'

const Company = () => {
  return (
    <div>
      <Navbar/>
      <CompanyProfile/>
      <SecurityTransparency/>
      <CryptoCTA/>
      <Footer/>
    </div>
  )
}

export default Company

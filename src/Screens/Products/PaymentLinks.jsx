import React from 'react'
import Navbar from '../../Components/Navbar'
import PaymentLinksComponent from '../../Components/PaymentLinksComponent'
import PaymentLinkSupport from '../../Components/PaymentLinkSupport'
import CryptoCTA from '../../Components/CryptoCTA'
import SecurityTransparency from '../../Components/SecurityTransparency'
import Footer from '../../Components/Footer'

const PaymentLinks = () => {
  return (
    <div>
        <Navbar/>
        <PaymentLinksComponent/>
        <PaymentLinkSupport/>
        <SecurityTransparency/>
        <CryptoCTA/>
        <Footer/>
      
    </div>
  )
}

export default PaymentLinks

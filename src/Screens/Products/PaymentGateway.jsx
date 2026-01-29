import React from 'react'
import Navbar from '../../Components/Navbar'
import PaymentGatewayComponent from '../../Components/PaymentGatewayComponent'
import SecurityTransparency from '../../Components/SecurityTransparency'
import CryptoCTA from '../../Components/CryptoCTA'
import Footer from '../../Components/Footer'

const PaymentGateway = () => {
  return (
    <div>
      <Navbar/>
      <PaymentGatewayComponent/>
      <SecurityTransparency/>
      <CryptoCTA/>
      <Footer/>



    </div>
  )
}

export default PaymentGateway

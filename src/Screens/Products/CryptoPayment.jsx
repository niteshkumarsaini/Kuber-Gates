import React from 'react'
import Navbar from '../../Components/Navbar'
import AcceptPaymentsHero from '../../Components/AcceptPaymentsHero'
import AcceptPaymentsFeatures from '../../Components/AcceptPaymentsFeatures'
import CheckoutScaleSection from '../../Components/CheckoutScaleSection'
import ReportingSection from '../../Components/ReportingSection'
import CryptoAssets from '../../Components/CryptoAssets'
import Footer from '../../Components/Footer'
import CryptoCTA from '../../Components/CryptoCTA'
import SecurityTransparency from '../../Components/SecurityTransparency'

const CryptoPayment = () => {
  return (
    <div>
      <Navbar/>
      <AcceptPaymentsHero/>
      <AcceptPaymentsFeatures/>
      <CheckoutScaleSection/>
      <ReportingSection/>
      <CryptoAssets/>
      <SecurityTransparency/>
      <CryptoCTA/>
      <Footer/>
    </div>
  )
}

export default CryptoPayment

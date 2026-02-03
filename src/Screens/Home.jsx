import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import AttractiveGraph from '../Components/AttractiveGraph'
import StatsSection from '../Components/StatsSection'
import FeaturesSection from '../Components/FeaturesSection'
import TrustedBy from '../Components/TrustedBy'
import SecuritySection from '../Components/SecuritySection'
import PaymentGatewaySection from '../Components/PaymentGatewaySection'
import PaymentDemo from '../Components/PaymentDemo'
import PaymentFlowSection from '../Components/PaymentFlowSection'
import SupportedCoinsSection from '../Components/SupportedCoinsSection'
import HeroGateway from '../Components/GatewayFeatures'
import GatewayFeatures from '../Components/GatewayFeatures'
import CryptoCTA from '../Components/CryptoCTA'
import PaymentFlow from '../Components/PaymentFlow'
import SecurityTransparency from '../Components/SecurityTransparency'
import Footer from '../Components/Footer'
import ComplianceSection from '../Components/ComplianceSection'



const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <FeaturesSection/>
    <PaymentFlowSection/>
    <SupportedCoinsSection/>
    <TrustedBy/>
    <PaymentFlow/>
    <ComplianceSection/>
    <HeroGateway/>
    <GatewayFeatures/>
  <SecurityTransparency/>
    <CryptoCTA/>
    <Footer/>
  


    </div>
  )
}

export default Home

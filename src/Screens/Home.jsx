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



const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      {/* <TrustedBy/> */}
      <FeaturesSection/>
    <PaymentFlowSection/>
    <SupportedCoinsSection/>
    {/* <HeroGateway/> */}
    <GatewayFeatures/>

    </div>
  )
}

export default Home

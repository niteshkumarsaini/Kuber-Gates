import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import CryptoPayment from './Screens/Products/CryptoPayment'
import FiatPayment from './Screens/Products/FiatPayment'
import PaymentGateway from './Screens/Products/PaymentGateway'
import { GetStart } from './Screens/GetStart'
import { Price } from './Screens/Price'

import { Subscription } from './Screens/Subscription'
import { Donation } from './Screens/Donation'
import { Whitelabel } from './Screens/Whitelabel'



import PaymentLinks from './Screens/Products/PaymentLinks'
import Invoices from './Screens/Products/Invoices'
import Company from './Screens/Company'
import APIDocs from './Screens/APIDocs'
import SDK from './Screens/SDK'
import Login from './Screens/Login'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import MultiCurrency from './Screens/MultiCurrency'
import RefundPartialRefund from './Screens/RefundPartialRefund' 
import ContactUs from './Screens/ContactUs'
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' }) // change 'instant' to 'smooth' for animation
  }, [pathname])

  return null
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/get-started' element={<GetStart />} />
          <Route path='/pricing' element={<Price />} />
          <Route path='/products/subscriptions' element={<Subscription />} />
          <Route path='/products/donations' element={<Donation />} />
          <Route path='/products/white-label' element={<Whitelabel />} />
          <Route path='/products/crypto-payments' element={<CryptoPayment />} />
          <Route path='/products/fiat-payments' element={<FiatPayment />} />
          <Route path='/products/payment-gateway' element={<PaymentGateway />} />
          <Route path='/products/payment-links' element={<PaymentLinks />} />
          <Route path='/products/invoices' element={<Invoices />} />
          <Route path='/company' element={<Company />} />
          <Route path='/developers/api-docs' element={<APIDocs />} />
          <Route path='/developers/sdks' element={<SDK />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products/multi-currency' element={<MultiCurrency />} />
          <Route path='/products/refunds' element={<RefundPartialRefund />} />
           <Route path='/contact-us' element={<ContactUs />} />
        </Routes>





      </BrowserRouter>




    </>
  )
}

export default App

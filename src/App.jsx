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
import {GetStart} from './Screens/GetStart'
import {Price} from './Screens/Price'
import PaymentLinks from './Screens/Products/PaymentLinks'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/get-started' element={<GetStart/>} />
          <Route path='/pricing' element={<Price/>} />
   <Route path='/products/crypto-payments' element={<CryptoPayment />} />
    <Route path='/products/fiat-payments' element={<FiatPayment />} />
<Route path='/products/payment-gateway' element={<PaymentGateway />} />
<Route path='/products/payment-links' element={<PaymentLinks />} />

        </Routes>





      </BrowserRouter>




    </>
  )
}

export default App

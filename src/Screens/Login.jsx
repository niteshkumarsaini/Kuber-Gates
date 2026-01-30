import React from 'react'
import Navbar from '../Components/Navbar'
import LoginComponent from '../Components/LoginComponent'
import SecurityTransparency from '../Components/SecurityTransparency'
import Footer from '../Components/Footer'

const Login = () => {
  return (
    <div>
      <Navbar/>
      <LoginComponent/>
      <SecurityTransparency/>
      <Footer/>
    </div>
  )
}

export default Login

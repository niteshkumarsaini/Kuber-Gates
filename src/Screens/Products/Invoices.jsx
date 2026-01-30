import React from 'react'
import Navbar from '../../Components/Navbar'
import InvoicesComponent from '../../Components/InvoicesComponent'
import InvoicesHero from '../../Components/InvoicesHero'
import InvoiceFeatures from '../../Components/InvoiceFeatures'
import InvoiceWorkflow from '../../Components/InvoiceWorkflow'
import Footer from '../../Components/Footer'
import InvoiceCTA from '../../Components/InvoiceCTA'    
import CryptoCTA from '../../Components/CryptoCTA'
import SecurityTransparency from '../../Components/SecurityTransparency'



const Invoices = () => {
  return (
    <div>
        <Navbar/>
       
        <InvoicesComponent/>
        <InvoiceFeatures/>
       <InvoiceWorkflow/>   
       <SecurityTransparency/>
       <CryptoCTA/>
        <Footer/>
      
    </div>
  )
}

export default Invoices

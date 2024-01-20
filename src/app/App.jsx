import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { ScrollProvider } from '@/context/ScrollContext'

const App = ({ children }) => {

  return (
    <>
      <ScrollProvider>
        <Navbar />
        {children}
        <Footer />
      </ScrollProvider>
    </>
  )
}

export default App
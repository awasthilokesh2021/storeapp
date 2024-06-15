import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../pages/Banner'
import Footer from '../Footer/Footer'
import Carddata from '../Card/Carddata'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner/>
        <Carddata/>
        <Footer />
    </div>
  )
}

export default Home
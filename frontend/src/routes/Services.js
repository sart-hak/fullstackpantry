import React from 'react'
import ServicesBox from '../components/services/ServicesBox'
import ServicesCover from '../components/services/ServicesCover'
import ServicesProduct from '../components/services/ServicesProduct'
import ServicesSolution from '../components/services/ServicesSolution'
import Footer from '../Footer'
import Navbar from '../Navbar'
import ScrollToTop from '../ScrollToTop'

const Services = () => {
    return (
        <div className='Services'>
            <ScrollToTop />
            <Navbar />
            <ServicesCover />
            <ServicesBox />
            <ServicesProduct />
            <ServicesSolution />
            <Footer />
        </div>
    )
}

export default Services
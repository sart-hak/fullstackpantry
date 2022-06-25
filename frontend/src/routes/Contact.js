import React from 'react'
import ContactContainer from '../components/contact/ContactContainer'
import Footer from '../Footer'
import Navbar from '../Navbar'
import ScrollToTop from '../ScrollToTop'
import '../styles/contact.css'

const Contact = () => {
    return (
        <div className='Contact'>
            <ScrollToTop />
            <Navbar />
            <ContactContainer />
            <Footer />
        </div>
    )
}

export default Contact
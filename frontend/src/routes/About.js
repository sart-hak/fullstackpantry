import React from 'react'
import AboutCover from '../components/about/AboutCover'
import Footer from '../Footer'
import Navbar from '../Navbar'
import '.././styles/about.css';
import AboutBox from '../components/about/AboutBox';
import AboutCarousel from '../components/about/AboutCarousel';
import AboutSuccess from '../components/about/AboutSuccess';
import ScrollToTop from '../ScrollToTop';

const About = () => {
    return (
        <div className='About'>
            <ScrollToTop />
            <Navbar />
            <AboutCover />
            <AboutBox />
            <AboutCarousel/>
            <AboutSuccess />
            <Footer />
        </div>
    )
}

export default About
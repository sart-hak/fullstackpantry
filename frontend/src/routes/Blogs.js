import React from 'react'
import BlogCover from '../components/blogs/BlogCover'
import BlogsContainer from '../components/blogs/BlogsContainer'
import Footer from '../Footer'
import Navbar from '../Navbar'
import ScrollToTop from '../ScrollToTop'

const Blogs = () => {
    return (
        <div className='Blogs'>
            <ScrollToTop />
            <Navbar />
            <BlogCover />
            <BlogsContainer />
            <Footer />
        </div>
    )
}

export default Blogs
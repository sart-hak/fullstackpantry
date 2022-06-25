import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BlogDetailContainer from '../components/blogDetail/BlogDetailContainer';
import Footer from '../Footer';
import Navbar from '../Navbar';
import ScrollToTop from '../ScrollToTop';
import "../styles/blogDetail.css"

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        Axios.get(`http://localhost:5000/blogs/${id}`).then((response) => {
            console.log(response);
            setBlog(response.data);
        }).catch(err => console.log(err));
    }, []);

    return (
    <>
        <ScrollToTop />
        <Navbar/>
        <BlogDetailContainer
        title = {blog.title}
        image = {blog.image}
        description = {blog.description}
        updatedAt = {blog.updatedAt}
        />
        
        <Footer />
    </>
    )
}

export default BlogDetail
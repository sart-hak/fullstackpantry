import { Box, Button } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../../styles/blogs.css";
import AdminBlogs from './AdminBlogs';
import AdminContacts from './AdminContacts';
import AdminTestimonials from './AdminTestimonials';

const AdminPage = () => {
    const [showBlogs, setShowBlogs] = useState(true);
    const [showContact, setshowContact] = useState(false);
    const [showTestimonials, setShowTestimonials] = useState(false);

    const displayBlogs = () => {
        setShowBlogs(true);
        setshowContact(false);
        setShowTestimonials(false);
    }

    const displayContacts = () => {
        console.log("clicked")
        setshowContact(true);
        setShowBlogs(false);
        setShowTestimonials(false);
    }

    const displayTestimonials = () => {
        setShowTestimonials(true);
        setshowContact(false);
        setShowBlogs(false);
    }

    const logOut = () => {
        window.location.reload();
    }

    return (
        <Box width="100%">
            <Box>
                <Button onClick={displayContacts}>Contacts</Button>
                <Button onClick={displayBlogs}>Blogs</Button>
                <Button onClick={displayTestimonials}>Testimonials</Button>
                <Button onClick={logOut}>Log Out</Button>
            </Box>

            <Box width="100%" pos="relative">
                {showBlogs && !showContact && !showTestimonials ? <AdminBlogs /> : ""}
                {showContact && !showBlogs && !showTestimonials ? <AdminContacts /> : ""}
                {!showContact && !showBlogs && showTestimonials ? <AdminTestimonials /> : ""}
            </Box>
        </Box>
    )
}

export default AdminPage
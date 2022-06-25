import React, { useEffect, useState } from "react";
import Axios from "axios";
import Blog from "./Blog";
import "../../styles/blogs.css";

const BlogsContainer = () => {
    const [blogs, setBlogs] = useState([]);
    const [count, setCount] = useState(9);

    const loadMore = () => {
        setCount(count + 9);
    };

    const cut = blogs.slice(0, count);
    
    const handleScroll = () => {
        let userScrollHeight = window.innerHeight + window.scrollY + 300;
        let windowBottomHeight = document.documentElement.offsetHeight;
        if (userScrollHeight >= windowBottomHeight) {
            console.log("loadMore");
            loadMore();
        }
    };

    window.addEventListener('scroll', handleScroll);
    
    useEffect(() => {
        Axios.get("http://localhost:5000/blogs").then((response) =>
        setBlogs(response.data)
        );
    }, [blogs]);

    return (
        <div className="BlogContainer">
            <main className="BlogGrid">
                {cut.map((blog) => {
                    return (
                        <Blog
                            key={blog._id}
                            id={blog._id}
                            title={blog.title}
                            description={blog.description}
                            image={blog.image}
                            updatedAt={blog.updatedAt}
                        />
                    );
                })}
            </main>
        </div>
    );
};

export default BlogsContainer;

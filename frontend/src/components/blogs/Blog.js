import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Blog = (props) => {
    const handleClick = (id) => {
        console.log(id);
    };

    return (
        <article>
            <div className="BlogImageContainer">
                <img src={props.image} alt="Sample photo" />
            </div>
            <div className="BlogText">
                <h4>{props.title}</h4>
                <p>{props.description.substr(0, 118) + "..."}</p>
                <div className="BlogBox">
                    <div className="timeStamp">
                        <h4>{moment(props.updatedAt).format("MMMM Do YYYY")}</h4>
                        <p>{moment(props.updatedAt).format("LT")}</p>
                    </div>
                    <Link
                        to={`/blogs/${props.id}`}
                        className="ReadBlogBtn contactbtn"
                        onClick={() => handleClick(props.id)}
                    >
                        Read Blog
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default Blog;

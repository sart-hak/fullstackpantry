import React from "react";
import { Link } from "react-router-dom";

const HomePhotoContainer = () => {
    return (
            <div className="HomePhotoContainer">
                <div className="HomeContent">
                    <h1>We are Digitalizing the Industries and</h1>
                    <h1>building a reliable future</h1>
                    <p>Contact us to learn more about our software development services.</p><br />
                    <Link to='/contact' className="contactbtn homebtn">Contact us</Link>
                </div>
            </div>
        );
};

export default HomePhotoContainer;

import React from "react";

const HomeCard = (props) => {
    return (
        <div className="HomeCard">
            <img className="HomeCardImg1" src={props.image1} alt="" />
            <img className="HomeCardImg2" src={props.image2} alt="" />
            <p>{props.content}</p>
            <div className="overlay"></div>
        </div>
    );
};

export default HomeCard;

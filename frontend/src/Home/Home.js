import React from "react";
import HomeCards from "./HomeCards";
import HomeVision from "./HomeVision";
import HomePhotoContainer from "./HomePhotoContainer";
import Intro from "./Intro";
import HomeTechnologies from "./HomeTechnologies";
import HomeSolution from "./HomeSolution";
import HomeCarousel from "./HomeCarousel";
import '../styles/HomePhotoContainer.css';

const Home = () => {
    return (
    <div className="Home">
        <HomePhotoContainer/>
        <Intro/>
        <HomeCards/>
        <HomeVision/>
        <HomeTechnologies/>
        <HomeSolution/>
        <HomeCarousel/>
    </div>
    );
};

export default Home;

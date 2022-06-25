import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Intro.css';
import about from '../images/about.png'
import blob from '../images/blob.png'

const Intro = () => {
  return (
    <div className='IntroContainer'>
      <div className="Intro">
      <div className="IntroLeft">
        <img src={about} alt="" />
      </div>
      <div className="IntroRight">
        <p>WHO WE ARE?</p>
        <h1>We Are a Team of Industry Experts</h1>
        <p>The teams at FullStackPantry have decades of industry expertise in software development, execution, and design. Our proficient managers and developers will assist you in achieving the goals in your business. Our firm is tailored to meet your specific needs and requirements.</p>
        <Link to="/about" className="contactbtn introbtn">About us</Link>
      </div>
      </div>
      <img className='introBlob' src={blob} alt="" />
    </div>
  )
}

export default Intro
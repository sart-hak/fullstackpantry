import React from 'react';
import '../styles/HomeVision.css';
import iconBulb from '../images/icon-bulb.png'

const HomeVision = () => {
  return (
    <div className="HomeVisionContainer">
      <div className='HomeVision'>
        <img src={iconBulb} alt="" />
        <p>VISION</p>
        <h1>Our Vision</h1>
        <p>FullStackPantry is committed to providing entrepreneurs with the best possible technical assistance to help them attain tangible business benefits.</p>
      </div>
    </div>
  )
}

export default HomeVision
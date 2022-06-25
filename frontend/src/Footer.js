import React from 'react'
import './styles/Footer.css'
import { Link } from "react-router-dom"
import logo from './images/fullstacklogo8d.png'
import twitter from './images/icons8-twitter-50.png'
import linkedin from './images/icons8-linkedin-circled-50.png'
import instagram from './images/icons8-instagram-50.png'
import facebook from './images/icons8-facebook-50.png'
import location from './images/icons8-location-100.png'
import mail from './images/icons8-mail-100.png'
import call from './images/icons8-call-50.png'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterUp">

        <div className="FooterBoxes">
          <div className="FooterLogo"><img src={logo} alt="" /></div>
          <p className="FooterLeftContent">FullStackPantry is a Software Engineering and Consulting firm. We offer custom software development and designs and we intend to become a technology powerhouse by serving many customers and aim at a better world.</p>
        </div>
        <div className="FooterBoxes">
          <ul className="FooterCenter">
            <li>FullStackpantry</li>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/services'>Services & Products</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/contact'>Contact us</Link>
          </ul>
        </div>
        <div className="FooterBoxes">
          <ul className="FooterRight">
            <li>Contact</li>
            <li><span><img src={location} alt="" /></span>Jaya Nagar, Bengaluru</li>
            <li><span><img src={mail} alt="" /></span>contact@fullstackpantry.com</li>
            <li><span><img src={call} alt="" /></span>+1 (987) 8876722</li>
          <li className='FooterRightSocial'>
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
          </li>
          </ul>
        </div>
      </div>
      <div className='FooterLine'></div>
      <div className="FooterDown">© FullStackPantry – 2022. All rights reserved.</div>
    </div>
  )
}

export default Footer
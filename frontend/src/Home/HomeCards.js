import React from 'react'
import HomeCard from './HomeCard'
import '../styles/HomeCards.css'
import cardBulb from '../images/card-bulb.png'
import f1 from '../images/f1.png'
import f2 from '../images/f2.png'
import f3 from '../images/f3.png'
import f4 from '../images/f4.png'
import f5 from '../images/f5.png'
import f6 from '../images/f6.png'

const HomeCards = () => {
  return (
    <div className="HomeCardsContainer">
      <div className="HomeCards">
        <p>WHY CHOOSE US?</p>
        <h1>Here is why you should engage FullStackPantry for your work</h1>
        <div className="HomeCardsFlex">
          <HomeCard 
          image1={f2}
          image2={f6}
          content = "We understand your brand and we become you and deliver precision"/>
          <HomeCard 
          image1={f3}
          image2={f4}
          content = "We understand your brand and we become you and deliver precision"/>
          <HomeCard 
          image1={f1}
          image2={f5}
          content = "We understand your brand and we become you and deliver precision"/>
        </div>
      </div>
    </div>
  )
}

export default HomeCards
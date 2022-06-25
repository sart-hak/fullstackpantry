import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/HomeSolution.css'

const HomeSolution = () => {
  return (
    <div className="HomeSolutionContainer">
      <div className='HomeSolution'>
        <p>FIND SOLUTION</p>
        <h1>Need To Find Solutions?</h1>
        <p>Speak with us about your needs.</p><br />
        <Link to='/contact' className="contactbtn HomeSolutionbtn">Contact us</Link>
      </div>
    </div>
  )
}

export default HomeSolution
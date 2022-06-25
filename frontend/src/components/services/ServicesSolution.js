import React from 'react'
import { Link } from "react-router-dom";
import blob from '../../images/blob.png';

const ServicesSolution = () => {
    return (
        <div className='ServicesSolutionContainer'>
            <div className="ServicesSolution">
                <p>FIND SOLUTION</p>
                <h1>Need To Find Solutions?</h1>
                <p>Speak with us about your needs</p>
                <Link to="/contact" className="contactbtn">Contact us</Link>
            </div>
            <img className='ServiceSolutionBlobRight' src={blob} alt="" />
            <img className='ServiceSolutionBlobLeft' src={blob} alt="" />
        </div>
    )
}

export default ServicesSolution
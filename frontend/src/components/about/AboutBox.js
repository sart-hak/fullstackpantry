import React from 'react'
import about from '../../images/about.png'
import blob from '../../images/blob.png'

const AboutBox = () => {
    return (
        <div className="AboutBoxContainer">
            <div className="AboutBox">
                <div className="AboutBoxLeft">
                <h1>About FullStackPantry</h1>
                <p>FullStackPantry is a software development company that helps organizations become more efficient and future-proof. We provide custom software development and testing services for our clients. We offer a comprehensive range of customized IT consulting, with the help of our expert project and delivery managers. We assist in designing IT strategies, roadmap planning, implementation, and support.</p>
                </div>
                <div className="AboutBoxRight">
                    <img src={about} alt="" />
                </div>
            </div>
            <img className='AboutBoxBlob' src={blob} alt="" />
        </div>
    )
}

export default AboutBox
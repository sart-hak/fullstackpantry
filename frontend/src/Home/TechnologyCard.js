import React from 'react'


const TechnologyCard = (props) => {
    return (
        <div className="TechnologyCard">
            <img src={props.image} alt="" />
            <div className="TechnologyOverlay"><p>{props.technology}</p></div>
        </div>
    )
}

export default TechnologyCard
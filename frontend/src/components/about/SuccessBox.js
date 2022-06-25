import React from 'react'

const SuccessBox = (props) => {
    return (
        <div className="SuccessBox">
            <div>
                <img src={props.icon} alt="" />
            </div>
            <div>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default SuccessBox
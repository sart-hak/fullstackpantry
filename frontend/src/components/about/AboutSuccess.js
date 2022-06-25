import React from 'react'
import iconEarth from '../../images/icon-earth.png'
import graph from '../../images/graph.png'
import monitor from '../../images/monitor.png'
import pie from '../../images/pie-chart.png'
import jobs from '../../images/jobs.png'
import avatar from '../../images/avatar.png'
import SuccessBox from './SuccessBox'

const AboutSuccess = () => {
    return (
        <div className='SuccessMain'>
            <div className="SuccessTitle">
                <p>OUR SUCCESS</p>
                <h1>The secrets to our success</h1>
            </div>
        <div className='AboutSuccessContainer'>
            <div className="AboutSuccess">
                <div className="SuccessLeft">
                    <SuccessBox
                        icon = {iconEarth}
                        title = {"Seasoned experts at your service"}
                        content = {"Each of our clients work with a dedicated team of experts. We hand-pick teams to meet our client needs. They work as an extension of the client’s team."}
                    />
                    <SuccessBox
                        icon = {avatar}
                        title = {"Committed to Generating the Best Value"}
                        content = {"We work relentlessly with laser-sharp focus to ensure that each of our clients generate extraordinary value and measurable impact."}
                    />
                    <SuccessBox
                        icon = {pie}
                        title = {"Turning Ideas into A Breathing Reality"}
                        content = {"We truly believe that ideas are powerful. With the right inputs and processes, all imaginable ideas can be transformed into reality"}
                    />
                </div>
                <div className="SuccessRight">
                <SuccessBox
                        icon = {graph}
                        title = {"Committed to Generating the Best Value"}
                        content = {"Our team of experts have well-rounded expertise in a range of industries. Each of them bring in a different perspective and worldview."}
                    />
                    <SuccessBox
                        icon = {monitor}
                        title = {"Seasoned experts at your service"}
                        content = {"Each of our clients work with a dedicated team of experts. We hand-pick teams to meet our client needs. They work as an extension of the client’s team."}
                    />
                    <SuccessBox
                        icon = {jobs}
                        title = {"Seasoned experts at your service"}
                        content = {"Each of our clients work with a dedicated team of experts. We hand-pick teams to meet our client needs. They work as an extension of the client’s team."}
                    />
                </div>
            </div>
        </div>
        </div>
    )
}

export default AboutSuccess
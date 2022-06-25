import React from 'react'
import TechnologyCard from './TechnologyCard'
import '../styles/HomeTechnologies.css'
import reactIcon from '../images/React-icon.png'
import node from '../images/node.png'
import angular from '../images/angular.png'
import java from '../images/java.png'
import python from '../images/python.png'
import net from '../images/Net.png'
import sap from '../images/sap.png'
import power from '../images/power.png'
import sql from '../images/microsoft-sql-server.png'
import aws from '../images/aws.png'
import azure from '../images/azure.png'
import swift from '../images/swift.png'
import flutter from '../images/flutter.png'
import blob from '../images/blob.png'

const HomeTechnologies = () => {
  return (
    <div className="HomeTechnologiesContainer">
    <div className='HomeTechnologies'>
      <p>HOW WE BUILD YOUR PRODUCT</p>
      <h1>Technologies we Use</h1>
      <div className="TechnologiesContainer">
        <TechnologyCard image={reactIcon} technology="Reactjs"/>        
        <TechnologyCard image={node} technology="Nodejs"/>        
        <TechnologyCard image={angular} technology="Angular"/>        
        <TechnologyCard image={java} technology="Java"/>        
      </div>
      <div className="TechnologiesContainer">
        <TechnologyCard image={python} technology="Python"/>        
        <TechnologyCard image={net} technology=".Net"/>        
        <TechnologyCard image={sap} technology="sap"/>
        <TechnologyCard image={power} technology="powerbi"/>
        <TechnologyCard image={sql} technology="mysql server"/>
      </div>
      <div className="TechnologiesContainer">
        <TechnologyCard image={azure} technology="azure"/>        
        <TechnologyCard image={aws} technology="aws"/>        
        <TechnologyCard image={swift} technology="swift"/>      
        <TechnologyCard image={flutter} technology="flutter"/>      
        </div>
    </div>
    <img className='technologyLeftBlob' src={blob} alt="" />
    <img className='technologyRightBlob' src={blob} alt="" />
    </div>
  )
}

export default HomeTechnologies
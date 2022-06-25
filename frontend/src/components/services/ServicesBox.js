import React from 'react'
import service1 from '../../images/service-1.png';
import service2 from '../../images/service-2.png';
import service3 from '../../images/service-3.png';
import service4 from '../../images/service-4.png';
import service5 from '../../images/service-5.png';
import service6 from '../../images/service-6.png';
import service7 from '../../images/service-7.png';

const ServicesBox = () => {
    return (
        <>
            <div className="ServicesHeading">
                <p>WHAT WE PROVIDE</p>
                <h1>Our Services</h1>
            </div>
            <div className="ServicesBoxContainer smallBox box1">
                <div className="ServicesBox small">
                    <div className="ServicesBoxLeft">
                        <h2>Dynamic Full-stack Development and Testing Solution for Your Business</h2>
                        <p>We offer professional software development and design services tailor-made to our client's specifications. Whether you're looking to streamline your IT operations or develop a new software application, we can help.</p>
                    </div>
                    <div className="ServicesBoxRight">
                        <img src={service1} alt="" />
                    </div>
                </div>
            </div>
            <div className="ServicesBoxContainer box2">
                <div className="ServicesBox">
                    <div className="ServicesBoxLeft">
                        <h2>DevOps</h2>
                        <p>Our DevOps engineers are highly trained to assist you in all IT fields. Collaborate with us to automate your business.</p>
                        <p>We have a team of highly trained Develop Engineers who can help you in following areas:</p>
                        <ul>
                            <li>AWS (Cloud native app like EKS, RDS, Route53)</li>
                            <li>Jenkins/BitBucket (CI/CD Pipelines)</li>
                            <li>Kubernetes</li>
                            <li>Ansible/Puppet</li>
                            <li>System operation support and System automation/IaaC</li>
                        </ul>
                    </div>
                    <div className="ServicesBoxRight">
                        <img src={service2} alt="" />
                    </div>
                </div>
            </div>
            <div className="ServicesBoxContainer smallBox box3">
                <div className="ServicesBox reverse small">
                    <div className="ServicesBoxLeft">
                        <h2>Web and mobile application designing & development</h2>
                        <p>We provide web and mobile application development and for various domains using the latest technologies, providing end-to-end solutions to our clients.</p>
                    </div>
                    <div className="ServicesBoxRight">
                        <img src={service3} alt="" />
                    </div>
                </div>
            </div>
            <div className="ServicesBoxContainer smallBox box4">
                <div className="ServicesBox reverse small">
                    <div className="ServicesBoxLeft">
                        <h2>Cloud development and cloud maintenance</h2>
                        <p>At FullStackPantry, we offer cloud development and maintenanceservices to keep your cloud infrastructure running smoothly. We aid in Amazon and Azure cloud applications development and migrations to cloud.</p>
                    </div>
                    <div className="ServicesBoxRight">
                        <img src={service4} alt="" />
                    </div>
                </div>
            </div>
            <div className="ServicesBoxContainer box5">
                <div className="ServicesBox">
                    <div className="ServicesBoxLeft">
                        <h2>VLSI Engineering compute</h2>
                        <p>At VLSI Engineering Computing, we have reliable IT specialists who can assist you with your computing needs for VLSI engineering.</p>
                        <p>Our certified and highly trained IT specialists can assist you with your computing needs for VLSI teams. We offer services in following areas:</p>
                        <ul>
                            <li>Load Sharing Facility (LSF)</li>
                            <li>FlexLM Licensing tools</li>
                            <li>Interactive computing- Exceed on Demand/ VNC</li>
                            <li>SAN/NAS – Storage </li>
                            <li>Standard tool installation and management</li>
                            <li>Version control tools (Clearcase)</li>
                        </ul>
                    </div>
                    <div className="ServicesBoxRight">
                        <img src={service5} alt="" />
                    </div>
                </div>
            </div>
            <div className="ServicesBoxContainer databaseBox box6">
                <div className="ServicesBox database">
                    <div className="ServicesBoxLeft">
                        <h2>Database consulting</h2>
                        <p>We offer highly professional database consulting services.</p>
                        <p>We offer highly professional database consulting services.</p>
                        <ul>
                            <li>Project-based Database Consulting</li>
                            <li>Temporary Database Consulting</li>
                            <li>Retainer Model</li>
                            <li>Database Virtualization</li>
                            <li>Upgrade Assessment</li>
                        </ul>
                    </div>
                    <div className="ServicesBoxRight">
                        <img src={service6} alt="" />
                    </div>
                </div>
            </div>
            <div className="ServicesBoxContainer box7">
                <div className="ServicesBox">
                    <div className="ServicesBoxLeft">
                        <h2>Business intelligence</h2>
                        <p>Get Business Intelligence solutions to help your organization grow! Work Smarter – Not Harder.</p>
                        <p>Business intelligence is one of the most important aspects of a company's success. Our team of highly professional Business intelligence experts can help you stay ahead of the game by providing you with the latest Business intelligence tools and techniques. Services offered include:</p>
                        <ul>
                            <li>Advanced Predictive Analysis</li>
                            <li> Data Warehousing</li>
                            <li>Data Visualization</li>
                            <li>Customized BI Solutions using Power BI, Tableau, etc</li>
                        </ul>
                    </div>
                    <div className="ServicesBoxRight">
                        <img src={service7} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesBox
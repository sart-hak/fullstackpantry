import React from 'react'
import product1 from "../../images/product-1.png";
import product1Overlay from "../../images/product1-overlay.png";
import product2Overlay from "../../images/product2-overlay.png";
import product2 from "../../images/product-2.png";
import people from "../../images/people.png";

const ServicesProduct = () => {
    return (
        <div className='ServiceProductContainer'>
            <div className="ServicesProduct PeopleProduct">
            <div className="ServicesBoxContainer ProductBoxContainer PeopleBoxContainer">
                <div className="ServicesBox ProductBox PeopleBox">
                    <div className="ServicesBoxLeft">
                        <p>OUR PRODUCTS</p>
                        <h2>Products</h2>
                        <p>Our team of experienced IT consultants has a deep understanding of the latest technologies and trends, and we work with our clients to help them choose the right solutions for their needs.</p>
                    </div>
                    <div className="ServicesBoxRight">
                        <img src={people} alt="" />
                    </div>
                </div>
            </div>
            <div className="ServicesBoxContainer ProductBoxContainer SecondContainer">
                <div className="ServicesBox ProductBox">
                    <div className="ServicesBoxLeft">
                        <h3>Innovative telephony products</h3>
                        <p>We deal in Android and IOS intelligent telephony products designed to make your life easier. Our products are packed with features that allow you to stay connected and manage your calls effortlessly.</p>
                    </div>
                    <div className="ServicesBoxRight">
                        <img src={product1} alt="" />
                        <div className="ServicesBoxRightOverlay">
                            <img src={product1Overlay} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="ServicesBoxContainer ProductBoxContainer">
                <div className="ServicesBox ProductBox">
                    <div className="ServicesBoxLeft ThirdContainer">
                        <h3>Trading and quantitative modeling</h3>
                        <p>Our edge in Algo trading begins with you Our Algo trading and qualitative modeling services help you make the most from markets. We provide you with the tools and resources you need to back test and automate your strategies.</p>
                    </div>
                    <div className="ServicesBoxRight">
                        <img src={product2} alt="" />
                        <div className="ServicesBoxRightOverlay">
                            <img src={product2Overlay} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ServicesProduct
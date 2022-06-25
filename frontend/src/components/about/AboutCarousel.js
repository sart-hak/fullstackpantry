import React, { useEffect, useState } from 'react'
import carousal1 from '../../images/carousal1.png';
import carousal2 from '../../images/carousal2.png';
import carousal3 from '../../images/carousal3.png';
import ItemsCarousel from 'react-items-carousel';

const AboutCarousel = () => {

    //Screen Size
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
    });
    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', setDimension);

        return (() => {
            window.removeEventListener('resize', setDimension);
        })
    }, [screenSize])

    console.log(screenSize);



    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;

    return (
        <div className="AboutCarouselContainer">
            <div className="AboutCarousel">
                <p>OUR CULTURE</p>
                <div className='carouselBox' style={{ padding: `0 ${chevronWidth}px` }}>
                    <h1>Experience our Life</h1>
                    <ItemsCarousel className='Carousal'
                        requestToChangeActive={setActiveItemIndex}
                        activeItemIndex={activeItemIndex}
                        numberOfCards={screenSize.dynamicWidth > 650 ? 3 : 1}
                        gutter={30}
                        leftChevron={<button className='CarouselLeftBtn'><i class="fa-solid fa-arrow-left"></i></button>}
                        rightChevron={<button className='CarouselRightBtn'><i class="fa-solid fa-arrow-right"></i></button>}
                        outsideChevron
                        chevronWidth={chevronWidth}
                        infiniteLoop={true}
                    >
                        <div className='carousalImage' style={{ height: 200, background: '#EEE' }}>
                            <img src={carousal1} alt="" />
                        </div>
                        <div className='carousalImage' style={{ height: 200, background: '#EEE' }}>
                            <img src={carousal2} alt="" />
                        </div>
                        <div className='carousalImage' style={{ height: 200, background: '#EEE' }}>
                            <img src={carousal3} alt="" />
                        </div>
                        <div className='carousalImage' style={{ height: 200, background: '#EEE' }}>
                            <img src={carousal1} alt="" />
                        </div>
                        <div className='carousalImage' style={{ height: 200, background: '#EEE' }}>
                            <img src={carousal2} alt="" />
                        </div>
                        <div className='carousalImage' style={{ height: 200, background: '#EEE' }}>
                            <img src={carousal3} alt="" />
                        </div>
                    </ItemsCarousel>
                </div>
            </div>
        </div>
    )
}

export default AboutCarousel
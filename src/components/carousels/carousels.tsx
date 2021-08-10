import React from 'react'
import './carousels.scss'
import '../../styles/shared.scss'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import slide1 from '../../assets/slide_1.jpg'
import slide2 from '../../assets/slide_2.jpg'
import slide3 from '../../assets/slide_3.jpg'

const Carousels: React.FC<{}> = () => (
    <div className="carousels-container">
        <Carousel
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={2000}
        >
            <div>
                <img src={slide1} alt="slide 1" />
            </div>
            <div>
                <img src={slide2} alt="slide 2" />
            </div>
            <div>
                <img src={slide3} alt="slide 3" />
            </div>
        </Carousel>
    </div>
)

export default Carousels

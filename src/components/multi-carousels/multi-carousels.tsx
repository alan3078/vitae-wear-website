import React from 'react'
import './multi-carousels.scss'
import '../../styles/shared.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import ProductCard from '../product-card/product-card'

import slide2 from '../../assets/slide_2.jpg'

const responsive = [
    {
        breakpoint: 1520,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
        }
    },
    {
        breakpoint: 1260,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
        }
    },
    {
        breakpoint: 770,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
        }
    }
]
const CardArr = Array.from(Array(10).keys())

const MultiCarousels: React.FC<{}> = () => (
    <div className="multi-carousels-container">
        <Slider
            dots={false}
            infinite
            speed={500}
            slidesToShow={4}
            slidesToScroll={4}
            initialSlide={0}
            responsive={responsive}
            adaptiveHeight
        >
            {CardArr.map((num: number) => (
                <ProductCard
                    key={num}
                    img={slide2}
                    name="Product 1"
                    colours="5 colours"
                    price="HK $199"
                />
            ))}
        </Slider>
    </div>
)

export default MultiCarousels

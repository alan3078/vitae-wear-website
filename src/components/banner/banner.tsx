import React from 'react'
import { Image } from 'react-bootstrap'
import './banner.scss'
import '../../styles/shared.scss'

const Banner: React.FC<{
    img: string
    header: string
    innerText: string
}> = props => {
    const { img, header, innerText } = props

    return (
        <div className="banner-container">
            <Image src={img} className="banner-img" />
            <div className="banner-img-text">
                <span className="header">{header}</span>
                <br />
                <span className="inner-text">{innerText}</span>
            </div>
        </div>
    )
}

export default Banner

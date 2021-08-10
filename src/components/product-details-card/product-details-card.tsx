import React from 'react'
import './product-details-card.scss'
import { Container } from 'react-bootstrap'

const ProductDetailsCard: React.FC<{
    img: string
    name: string
    colours: string
    size: string
    price: number
    callback?: Function
}> = props => {
    const { img, name, colours, size, price } = props

    return (
        <Container className="img-container">
            <img src={img} alt="slide 1" className="resize-img" />
            <div style={{ textAlign: 'left' }}>
                <span className="card-normal-font">{name}</span>
                <br />
                <br />
                <span className="card-special-font">HK$ {price}</span>
                <span className="card-normal-font">Size: {size}</span>
                <br />
                <span className="card-normal-font">Colors: {colours}</span>
            </div>
        </Container>
    )
}

export default ProductDetailsCard

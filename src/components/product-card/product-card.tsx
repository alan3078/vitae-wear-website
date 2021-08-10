import React from 'react'
import './product-card.scss'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const ProductCard: React.FC<{
    productId?: number
    img: string
    name: string
    colours: string
    price: string
    oldPrice?: string
    isInStock?: boolean
    callback?: Function
}> = props => {
    const history = useHistory()
    const { url } = useRouteMatch()
    const { productId, img, name, colours, price, oldPrice, isInStock } = props

    const navigateToItem = () => {
        history.push(`${url}/${productId}`)
    }

    return (
        <Container className="img-container" onClick={navigateToItem}>
            <img src={img} alt="slide 1" className="resize-img" />
            <div style={{ textAlign: 'left' }}>
                <span className="card-normal-font">
                    {isInStock ? `現貨 ｜ ${name}` : name}
                </span>
                <br />
                <span className="card-normal-font">{colours}</span>
                <br />
                {!oldPrice || (
                    <span
                        className="card-special-font"
                        style={{ textDecoration: 'line-through' }}
                    >
                        {oldPrice}
                    </span>
                )}
                <span className="card-special-font"> {price}</span>
            </div>
        </Container>
    )
}

export default ProductCard

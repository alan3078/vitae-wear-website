import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './main-footer.scss'
import '../../styles/shared.scss'
import fbIcon from '../../assets/ic_facebook.png'
import jgIcon from '../../assets/ic_instagram.png'

const MainFooter: React.FC<{}> = () => {
    const year = new Date().getFullYear()

    const redirectUrl = (url: string): void => {
        window.open(url, '_blank')
    }

    return (
        <Container fluid className="footer-container">
            <Row className="footer-text link-title">
                <Col sm>品牌故事</Col>
                <Col sm>產品</Col>
                <Col sm>客戶服務</Col>
                <Col sm>聯絡我們</Col>
            </Row>
            <Row>
                <Col
                    sm
                    className="link-col footer-text"
                    as={Link}
                    to="/about-us"
                >
                    關於我們
                </Col>
                <Col
                    sm
                    className="link-col footer-text"
                    as={Link}
                    to="/in-stock-products"
                >
                    現貨區
                </Col>
                <Col
                    sm
                    className="link-col footer-text"
                    as={Link}
                    to="/customer-service"
                >
                    運送方式
                </Col>
                <Col
                    sm
                    className="link-col footer-text"
                    as={Link}
                    to="/contact-us"
                >
                    聯絡我們
                </Col>
            </Row>
            <Row>
                <Col />
                <Col
                    sm
                    className="link-col footer-text"
                    as={Link}
                    to="/products"
                >
                    所有貨品
                </Col>
                <Col
                    sm
                    className="link-col footer-text"
                    as={Link}
                    to="/customer-service"
                >
                    退款換貨
                </Col>
                <Col />
            </Row>
            <div className="icon-container">
                <Image
                    src={fbIcon}
                    className="icon"
                    onClick={() => {
                        redirectUrl('https://www.facebook.com/vitaewearstore/')
                    }}
                />
                <Image
                    src={jgIcon}
                    className="icon"
                    onClick={() => {
                        redirectUrl('https://www.instagram.com/vitae.wear/')
                    }}
                />
            </div>
            <div className="terms-container">
                <span className="terms">@{year} by Vitae Wear</span>
                <div className="vertical-line" />
                <Link to="/terms" className="terms">
                    Terms and conditions
                </Link>
                {/* <span>Terms and conditions</span> */}
            </div>
        </Container>
    )
}

export default MainFooter

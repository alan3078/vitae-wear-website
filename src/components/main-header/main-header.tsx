import React from 'react'
import { Container, Nav, Navbar, Image } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import LoginModal from '../login-modal/login-modal'
import './main-header.scss'
import '../../styles/shared.scss'
import logo from '../../assets/logo.png'
import cartIcon from '../../assets/ic_shopping_cart.png'
import accountIcon from '../../assets/ic_account_circle.png'
import { useAuth } from '../../auth/auth-provider'

const MainHeader: React.FC<{}> = () => {
    const [showLoginModal, setShowLoginModal] = React.useState(false)

    const history = useHistory()

    const { user } = useAuth()

    return (
        <div className="header-container">
            <Container fluid className="nav-bar-container">
                <Navbar expand="lg">
                    <Container fluid className="nav-container">
                        <Navbar.Brand
                            as={Link}
                            to="/"
                            className="order-lg-0 mx-auto order-1"
                        >
                            <Image src={logo} className="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse
                            id="basic-navbar-nav"
                            className="order-lg-1 order-0"
                        >
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link
                                        as={Link}
                                        to="/"
                                        className="nav-text"
                                    >
                                        首頁
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        as={Link}
                                        to="/about-us"
                                        className="nav-text"
                                    >
                                        品牌故事
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        as={Link}
                                        to="/in-stock-products"
                                        className="nav-text"
                                    >
                                        現貨區
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        as={Link}
                                        to="/products"
                                        className="nav-text"
                                    >
                                        貨品
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        as={Link}
                                        to="/customer-service"
                                        className="nav-text"
                                    >
                                        客戶服務
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        as={Link}
                                        to="/contact-us"
                                        className="nav-text"
                                    >
                                        聯絡我們
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                        <Nav
                            className="order-lg-2 order-2"
                            style={{ flexDirection: 'row' }}
                        >
                            <Nav.Item
                                onClick={() => {
                                    if (!user) {
                                        setShowLoginModal(true)
                                    } else {
                                        history.push('/personal-center')
                                    }
                                }}
                            >
                                <Image
                                    src={accountIcon}
                                    className="account-icon"
                                />
                            </Nav.Item>
                            <Nav.Item
                                onClick={() => {
                                    history.push('/shopping-cart')
                                }}
                            >
                                <Image src={cartIcon} className="cart-icon" />
                            </Nav.Item>
                        </Nav>
                    </Container>
                </Navbar>
                <LoginModal
                    show={showLoginModal}
                    onHide={() => setShowLoginModal(false)}
                />
            </Container>
        </div>
    )
}

export default MainHeader

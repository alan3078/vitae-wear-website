import React from 'react'
import {
    Button,
    ButtonGroup,
    Container,
    Form,
    Row,
    Col,
    Dropdown,
    Image
} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faTimes } from '@fortawesome/free-solid-svg-icons'
import Banner from '../../components/banner/banner'
import ProductDetailsCard from '../../components/product-details-card/product-details-card'

import './shopping-cart.scss'
import '../../styles/shared.scss'

import ShoppingCartImg from '../../assets/personal_center.jpg'
import ProductImg from '../../assets/invoice_product.jpg'

const CartProductCard: React.FC<{}> = () => {
    const [count, setCount] = React.useState(1)

    return (
        <div>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Form.Check
                        type="checkbox"
                        id="default-checkbox"
                        label=""
                    />
                </Col>
                <ProductDetailsCard
                    img={ProductImg}
                    name="Product name"
                    price={199.0}
                    size="M"
                    colours="Green"
                />
                <Col md="auto">
                    <ButtonGroup>
                        <Button
                            variant="outline-dark"
                            onClick={() => {
                                if (count > 1) {
                                    setCount(count - 1)
                                }
                            }}
                        >
                            -
                        </Button>
                        <Button variant="outline-dark">{count}</Button>
                        <Button
                            variant="outline-dark"
                            onClick={() => setCount(count + 1)}
                        >
                            +
                        </Button>
                    </ButtonGroup>
                </Col>
                <Col md="auto">HK$ {2 * count}</Col>
                <Col md="auto">
                    <Container
                        onClick={() => setCount(count + 1)}
                        className="continue-btn-container"
                    >
                        <span className="continue-btn-text " />
                        <FontAwesomeIcon icon={faTimes} />
                    </Container>
                </Col>
            </Row>
            <hr className="line" />
        </div>
    )
}

const ShoppingCart: React.FC<{}> = () => {
    const history = useHistory()

    return (
        <div>
            <Banner
                img={ShoppingCartImg}
                header="???????????????"
                innerText="??????$800???????????????????????????"
            />
            <div>
                <Container
                    onClick={() => history.push('/in-stock-products')}
                    className="continue-btn-container"
                >
                    <span className="continue-btn-text ">???????????? </span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </Container>
            </div>
            <br />
            <div>
                <Container>
                    <Form>
                        <Row className="justify-content-md-center">
                            <Col sm={8}>
                                <Form.Check
                                    type="checkbox"
                                    id="default-checkbox"
                                    label="??????"
                                />
                                <hr className="line" />
                                <CartProductCard />
                            </Col>
                            <Col sm={4} className="cart-summary">
                                <Row>
                                    <Col>????????????</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr className="line" />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col>??????: HK $888.00</Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col>??????: ??????</Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        <Dropdown>
                                            <Dropdown.Toggle
                                                variant="secondary"
                                                id="dropdown-basic"
                                            >
                                                ??????????????????????????? - HK$0.00
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">
                                                    ??????????????????????????? - HK$0.00
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">
                                                    ??????2
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">
                                                    ??????3
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        <hr className="line" />
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col>??????: HK $888.00</Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        <Button
                                            type="submit"
                                            className="cart-submit-btn"
                                        >
                                            <span className="cart-submit-text">
                                                ??????
                                            </span>
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        </div>
    )
}

export default ShoppingCart

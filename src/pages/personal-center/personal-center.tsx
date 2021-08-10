import React from 'react'
import { useHistory } from 'react-router-dom'
import {
    Button,
    Container,
    Form,
    Row,
    Col,
    Collapse,
    Image
} from 'react-bootstrap'
import { useAuth } from '../../auth/auth-provider'
import Banner from '../../components/banner/banner'
import './personal-center.scss'
import '../../styles/shared.scss'

import PersonalCenterImg from '../../assets/personal_center.jpg'
import InvoiceProductImg from '../../assets/invoice_product.jpg'

const MyProfile: React.FC<{}> = () => (
    <div>
        <Form>
            <Row className="justify-content-md-center">
                <Col md="auto" xs lg="4">
                    <Form.Group className="mb-3" controlId="formGridName">
                        <Form.Label>
                            <span className="personal-header">姓名</span>
                        </Form.Label>
                        <Form.Control
                            className="field"
                            type="text"
                            defaultValue="Jimmy Li"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto" xs lg="4">
                    <Form.Group className="mb-3" controlId="formGridEmail">
                        <Form.Label>
                            <span className="personal-header">註冊電郵</span>
                        </Form.Label>
                        <Form.Control
                            className="field"
                            type="email"
                            defaultValue="lijimmywestlife1@gmail.com"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto" xs lg="4">
                    <Form.Group>
                        <Form.Label>
                            <span className="personal-header">預設收貨</span>
                        </Form.Label>
                        <Form.Control
                            className="field-textarea"
                            as="textarea"
                            rows={6}
                            defaultValue="Room 1111,
                Lee Lee Lee House,
                Ma On Shan, Statin,
                Hong Kong"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <br />
            <Row className="justify-content-md-center">
                <Col xs lg="2" md="auto">
                    <Form.Group as={Col} controlId="formGridBDay">
                        <Form.Label>
                            <span className="personal-header">生日</span>
                        </Form.Label>
                        <Form.Control
                            className="field"
                            required
                            type="text"
                            defaultValue="21/11/1990"
                        />
                        <Form.Control.Feedback type="invalid">
                            輸入生日
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col xs lg="2" md="auto">
                    <Form.Group as={Col} controlId="formGridSex">
                        <Form.Label>
                            <span className="personal-header">性別</span>
                        </Form.Label>
                        <Form.Control
                            className="field"
                            type="text"
                            defaultValue="Male"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <br />
            <Row className="justify-content-md-center">
                <Col md="auto" className="profile-save-button">
                    <Button variant="secondary">保存</Button>
                </Col>
            </Row>
        </Form>
    </div>
)

const MyInvoice: React.FC<{}> = () => {
    const [open, setOpen] = React.useState(false)

    return (
        <div className="my-invoice">
            <Container className="invoice-container">
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        檢查訂單狀態，或者瀏覽您過去的購買紀錄。
                    </Col>
                </Row>
                <br />
                <Row className="justify-content-md-center">
                    <Col xs={3} md={2}>
                        日期
                    </Col>
                    <Col xs={3} md={2}>
                        訂單
                    </Col>
                    <Col xs={3} md={2}>
                        狀態
                    </Col>
                    <Col xs={3} md={2}>
                        總計
                    </Col>
                </Row>
                <hr className="line" />
                <Row className="justify-content-md-center">
                    <Col xs={3} md={2}>
                        2021年11月11日
                    </Col>
                    <Col xs={3} md={2}>
                        #111111
                    </Col>
                    <Col xs={3} md={2}>
                        未付款
                    </Col>
                    <Col xs={3} md={2}>
                        HK$ 199.00{' '}
                        <Button
                            onClick={() => setOpen(!open)}
                            aria-expanded={open}
                            className="arrow down"
                            variant="outline-light"
                        />
                    </Col>
                </Row>
                <br />
                <Collapse in={open}>
                    <Container>
                        <Row>
                            <Col md={{ span: 4, offset: 9 }}>
                                <Button variant="outline-dark">
                                    上傳付款證明
                                </Button>
                            </Col>
                        </Row>
                        <br />
                        <Row className="justify-content-md-center">
                            <Col md="auto">
                                <Row>
                                    <Col>
                                        <Image
                                            src={InvoiceProductImg}
                                            className="invoice-product-img"
                                        />
                                    </Col>
                                    <Col>
                                        <Row>Product name</Row>
                                        <Row>價格: HK$199.00</Row>
                                        <Row>呎碼: M</Row>
                                        <Row>顏色: Green</Row>
                                        <Row>狀態: 等待出貨</Row>
                                    </Col>
                                </Row>
                            </Col>

                            <Col xs={3} md={2}>
                                數量:1
                            </Col>
                            <Col xs={3} md={2}>
                                HK$109
                            </Col>
                        </Row>
                        <br />
                        <Row className="justify-content-md-center">
                            <Col md="auto">
                                <Row>
                                    <Col>
                                        <Image
                                            src={InvoiceProductImg}
                                            className="invoice-product-img"
                                        />
                                    </Col>
                                    <Col>
                                        <Row>Product name</Row>
                                        <Row>價格: HK$199.00</Row>
                                        <Row>呎碼: M</Row>
                                        <Row>顏色: Green</Row>
                                        <Row>狀態: 等待出貨</Row>
                                    </Col>
                                </Row>
                            </Col>

                            <Col xs={3} md={2}>
                                數量:1
                            </Col>
                            <Col xs={3} md={2}>
                                HK$90
                            </Col>
                        </Row>
                        <hr className="line" />
                        <div className="invoice-count">
                            <Row>
                                <Col md={{ span: 4, offset: 8 }}>
                                    小計: HK$888.00
                                </Col>
                                <Col md={{ span: 4, offset: 8 }}>
                                    運費: 免費
                                </Col>
                                <Col md={{ span: 4, offset: 8 }}>
                                    <hr className="line" />
                                </Col>
                                <Col md={{ span: 4, offset: 8 }}>
                                    總計: HK$888.00
                                </Col>
                            </Row>
                            <hr className="line" />
                            <Row>
                                <Col md={{ span: 4, offset: 8 }}>出貨資料:</Col>
                                <Col md={{ span: 4, offset: 8 }}>
                                    順豐速遞（到付）
                                </Col>
                                <Col md={{ span: 4, offset: 8 }}>
                                    Kam Fung Li 9685 0493 Room 501 Lee Wing
                                    House Lee On Estate, Ma On Shan Hong Kong
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </Collapse>
            </Container>
        </div>
    )
}

const PersonalCenter: React.FC<{}> = () => {
    const history = useHistory()
    const { signOut } = useAuth()

    const [profileStatus, setprofileStatus] = React.useState(false)

    const userSignOut = () => {
        signOut()
        history.replace('')
    }

    return (
        <div>
            <Banner
                img={PersonalCenterImg}
                header="個人中心"
                innerText="設定你的個人資料和查閱訂單"
            />
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={6} md="auto">
                        <Button
                            className="profile-button"
                            onClick={() => setprofileStatus(!profileStatus)}
                            variant="outline-dark"
                        >
                            我的資料
                        </Button>
                        <p>
                            <i className="arrow down" />
                        </p>
                    </Col>
                    <Col xs={6} md="auto">
                        <Button
                            onClick={() => setprofileStatus(!profileStatus)}
                            variant="outline-dark"
                        >
                            我的訂單
                        </Button>
                        <p>
                            <i className="arrow down" />
                        </p>
                    </Col>
                </Row>
            </Container>
            {profileStatus ? <MyInvoice /> : <MyProfile />}
        </div>
    )
}

export default PersonalCenter

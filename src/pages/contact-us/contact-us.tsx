import React from 'react'
import { Form, Row, Col, Button, Image } from 'react-bootstrap'

import './contact-us.scss'
import '../../styles/shared.scss'

import ContactUsImg from '../../assets/contact_us.jpg'

const ContactUs: React.FC<{}> = () => {
    const [validated, setValidated] = React.useState(false)

    const handleSubmit = event => {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }

        setValidated(true)
    }

    return (
        <div className="desc-container">
            <div className="contact-us-form">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <span className="contact-us-header">
                        <strong>聯絡我們 CONTACT US</strong>
                    </span>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Control
                                className="field"
                                required
                                type="text"
                                placeholder="姓名"
                            />
                            <Form.Control.Feedback type="invalid">
                                輸入姓名
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Control
                                className="field"
                                required
                                type="email"
                                placeholder="電郵"
                            />
                            <Form.Control.Feedback type="invalid">
                                電子郵件不正確
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridTitle">
                        <Form.Control
                            className="field"
                            required
                            type="text"
                            placeholder="主旨"
                        />
                        <Form.Control.Feedback type="invalid">
                            輸入主旨
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridMessage">
                        <Form.Control
                            required
                            className="field"
                            as="textarea"
                            rows={10}
                            placeholder="在這輸入你的訊息"
                        />
                        <Form.Control.Feedback type="invalid">
                            輸入你的訊息
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button className="submit-button" type="submit">
                        提交
                    </Button>
                </Form>
            </div>
            <Image src={ContactUsImg} className="contact-us-img" />
        </div>
    )
}

export default ContactUs

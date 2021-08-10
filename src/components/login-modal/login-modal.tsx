import React, { useEffect } from 'react'
import { Modal, Button, Image, Form } from 'react-bootstrap'
import './login-modal.scss'
import '../../styles/shared.scss'
import joinUs from '../../assets/join_us.png'
import { useAuth } from '../../auth/auth-provider'
import AlertModal from '../alert-modal/alert-modal'
import { AlertContent } from '../../general/types'
import { AlertTypes } from '../../general/enums'

const LoginModal: React.FC<{ show: boolean; onHide: () => void }> = props => {
    const { show, onHide } = props

    const [isAlert, setIsAlert] = React.useState(false)
    const [alert, setAlert] = React.useState<AlertContent>({
        alertType: AlertTypes.Success,
        title: '',
        message: ''
    })

    const [validated, setValidated] = React.useState(false)

    const { signInWithEmail, googleSignIn } = useAuth()

    const handleSubmit = event => {
        const form = event.currentTarget
        console.log('form validity: ', form.checkValidity())
        if (form.checkValidity() === false) {
            event.stopPropagation()
            setValidated(true)
        } else {
            signInWithEmail(form.email.value)
                .then(() => {
                    setAlert({
                        alertType: AlertTypes.Success,
                        title: '',
                        message: '登入連結巳發送到你的電子郵件'
                    } as AlertContent)
                    setIsAlert(true)
                    onHide()
                })
                .catch(error => {
                    setAlert({
                        alertType: AlertTypes.Error,
                        title: '',
                        message: '電郵地址無效，請再次嘗試'
                    } as AlertContent)
                    setIsAlert(true)
                    setValidated(true)
                    console.error('send email link login error: ', error)
                })
        }
        event.preventDefault()
    }

    const signInWithGoogle = () => {
        googleSignIn()
            .then(() => {
                setAlert({
                    alertType: AlertTypes.Success,
                    title: '',
                    message: '登入成功'
                } as AlertContent)
                setIsAlert(true)
                onHide()
            })
            .catch(error => {
                setAlert({
                    alertType: AlertTypes.Error,
                    title: '',
                    message: '登入失敗，請再次嘗試'
                } as AlertContent)
                setIsAlert(true)
                setValidated(true)
                console.error('send email link login error: ', error)
            })
    }

    useEffect(() => {
        if (validated) setValidated(false)
    }, [show])

    return (
        <>
            <Modal
                show={show}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={onHide}
            >
                <Modal.Body className="modal-body">
                    <div className="join-us-img-container">
                        <Image src={joinUs} className="join-us-img" />
                    </div>
                    <div className="login-content">
                        <Form
                            noValidate
                            validated={validated}
                            onSubmit={handleSubmit}
                        >
                            <Form.Group controlId="email">
                                <Form.Control
                                    className="email-field"
                                    required
                                    type="email"
                                    placeholder="用電子郵件登入"
                                />
                                <Form.Control.Feedback type="invalid">
                                    電子郵件不正確
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button className="submit-button" type="submit">
                                登入
                            </Button>
                        </Form>
                    </div>
                    <span className="text-with-line">或</span>

                    <div className="google-btn-container">
                        <button
                            type="button"
                            className="login-with-google-btn"
                            onClick={signInWithGoogle}
                        >
                            Sign in with Google
                        </button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div
                        className="modal-footer-text"
                        dangerouslySetInnerHTML={{
                            __html: '<b>Sign up to be our member!</b><br/><br/>Accumulating spending in our store over HKD888</br>BE OUR VIP! To enjoy..</br>♡ 5% repay</br>♡ Get a $50 coupon in birthday month</br>♡ random special promotion'
                        }}
                    />
                </Modal.Footer>
            </Modal>
            <AlertModal
                show={isAlert}
                content={alert}
                onHide={() => setIsAlert(false)}
            />
        </>
    )
}

export default LoginModal

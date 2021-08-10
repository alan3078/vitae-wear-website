import React from 'react'
import { Modal, Alert } from 'react-bootstrap'
import './alert-modal.scss'
import '../../styles/shared.scss'
import { AlertContent } from '../../general/types'

const AlertModal: React.FC<{
    show: boolean
    content: AlertContent
    onHide: () => void
}> = props => {
    const { show, content, onHide } = props

    return (
        <Modal show={show} onHide={onHide}>
            <Alert variant={content.alertType} className="alert">
                <Alert.Heading>{content.title}</Alert.Heading>
                <p>{content.message}</p>
            </Alert>
        </Modal>
    )
}

export default AlertModal

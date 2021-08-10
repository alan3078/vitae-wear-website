import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import './collapsible-list.scss'
import '../../styles/shared.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { CollapsibleItem } from '../../general/types'

const CollapsibleList: React.FC<{
    items: CollapsibleItem[]
}> = props => {
    const { items } = props

    return (
        <Accordion defaultActiveKey="0">
            {items.map((item, i) => (
                <Card key={item.header}>
                    <Accordion.Toggle
                        as={Card.Header}
                        eventKey={i.toString()}
                        className="desc-toggle"
                    >
                        <div className="desc-header">
                            <span>{item.header}</span>
                            <FontAwesomeIcon
                                icon={faPlus}
                                className="desc-icon"
                            />
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={i.toString()}>
                        <Card.Body>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: item.content
                                }}
                            />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            ))}
        </Accordion>
    )
}

export default CollapsibleList

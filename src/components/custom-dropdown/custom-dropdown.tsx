import React, { useState } from 'react'
import './custom-dropdown.scss'
import '../../styles/shared.scss'
import { Dropdown } from 'react-bootstrap'

const CustomDropdown: React.FC<{ values: {} }> = props => {
    const { values } = props
    const [selectedVal, setSelectedVal] = useState(Object.keys(values)[0])

    const onSelectedVal = (eventKey: any) => {
        setSelectedVal(eventKey)
        // TODO: send value out for sorting
    }

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="Secondary" className="dd">
                    {values[selectedVal]}
                </Dropdown.Toggle>

                <Dropdown.Menu className="menu">
                    {Object.keys(values).map((type: string) => (
                        <Dropdown.Item
                            eventKey={type}
                            key={type}
                            onSelect={onSelectedVal}
                        >
                            {values[type]}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default CustomDropdown

import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import './color-picker.scss'
import '../../styles/shared.scss'
import { ProductColor } from '../../general/types'

const ColorPicker: React.FC<{
    ranges: ProductColor[]
    callback: Function
}> = props => {
    const { ranges, callback } = props
    const [selectedVal, setSelectedVal] = useState(ranges[0])

    const onSelectedVal = (color: ProductColor) => {
        setSelectedVal(color)
        callback(color)
    }

    return (
        <div>
            <div className="color-text">顏色：{selectedVal.name}</div>
            <div>
                {ranges.map((color: ProductColor) => (
                    <Container
                        className="color-circle"
                        key={color.name}
                        style={{
                            backgroundColor: color.hexCode,
                            borderWidth:
                                selectedVal.hexCode === color.hexCode
                                    ? '2px'
                                    : '1px'
                        }}
                        onClick={() => onSelectedVal(color)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ColorPicker

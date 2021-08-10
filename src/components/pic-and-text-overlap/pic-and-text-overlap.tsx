import React from 'react'
import { Image } from 'react-bootstrap'
import './pic-and-text-overlap.scss'
import '../../styles/shared.scss'
import useWindowSize from '../../general/hooks'

const PicAndTextOverlap: React.FC<{
    img: string
    header: string
    html: string
    isPicRight: boolean
}> = props => {
    const { img, header, html, isPicRight } = props
    const [width] = useWindowSize()

    return (
        <div className="desc-container">
            {width > 992 && !isPicRight ? (
                <>
                    <div className="desc-block">
                        <span className="desc-header">{header}</span>
                        <div
                            className="desc-text"
                            dangerouslySetInnerHTML={{
                                __html: html
                            }}
                        />
                    </div>
                    <Image src={img} className="desc-img" />
                </>
            ) : (
                <>
                    <Image src={img} className="desc-img" />
                    <div className="desc-block">
                        <span className="desc-header">{header}</span>
                        <div
                            className="desc-text"
                            dangerouslySetInnerHTML={{
                                __html: html
                            }}
                        />
                    </div>
                </>
            )}
        </div>
    )
}

export default PicAndTextOverlap

import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import './product-item.scss'
import '../../styles/shared.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Container, Button } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import slide1 from '../../assets/slide_1.jpg'
import slide2 from '../../assets/slide_2.jpg'
import slide3 from '../../assets/slide_3.jpg'
import productBanner from '../../assets/product-banner.jpg'
import { Size } from '../../general/enums'
import CustomDropdown from '../../components/custom-dropdown/custom-dropdown'
import ColorPicker from '../../components/color-picker/color-picker'
import { ProductColor } from '../../general/types'
import CollapsibleList from '../../components/collapsible-list/collapsible-list'

const ProductItem: React.FC<{}> = () => {
    const productId = useParams()
    const history = useHistory()

    return (
        <div className="item-container">
            <Container onClick={history.goBack} className="back-btn-container">
                <FontAwesomeIcon icon={faArrowLeft} />
                <span className="back-btn-text ">返回上一頁</span>
            </Container>
            <div className="containers">
                <Container>
                    <div className="product-gallery">
                        <Carousel showArrows showStatus={false}>
                            <div>
                                <img src={slide1} alt="slide 1" />
                            </div>
                            <div>
                                <img src={slide2} alt="slide 2" />
                            </div>
                            <div>
                                <img src={slide3} alt="slide 3" />
                            </div>
                            <div>
                                <img src={productBanner} alt="slide 4" />
                            </div>
                        </Carousel>
                    </div>
                    <div className="product-text">
                        <span>。預訂款 需時7-14工作天＊</span>
                        <br />
                        <span>
                            。本店出售之所有貨品均用人手量度，或會有正負1-5CＭ
                            誤差
                        </span>
                        <br />
                        <span>
                            。圖片顏色及實物顏色會根據顯示屏幕的顯色度有一定的色差
                        </span>
                        <br />
                    </div>
                </Container>
                <Container className="item-details-container">
                    <h4>Product Name</h4>
                    <div className="price-text">HK$ 123.00</div>
                    <div>
                        <div className="size-text">尺碼：</div>
                        <CustomDropdown values={Size} />
                    </div>
                    <ColorPicker
                        ranges={[
                            { name: 'blue', hexCode: '#0000FF' },
                            { name: 'green', hexCode: '#00FF00' },
                            { name: 'red', hexCode: '#FF0000' }
                        ]}
                        callback={(value: ProductColor) => {
                            console.log(
                                'selected value: ',
                                value.name,
                                value.hexCode
                            )
                        }}
                    />
                    <div>
                        <div className="size-text">數量：</div>
                        <CustomDropdown
                            values={{
                                one: 1,
                                two: 2,
                                three: 3,
                                four: 4,
                                five: 5
                            }}
                        />
                    </div>
                    <Button size="lg" className="add-cart-btn">
                        新增到購物車
                    </Button>
                    <CollapsibleList
                        items={[
                            {
                                header: 'Size Chart',
                                content:
                                    '<span>S: Length 79 Hip 70 Waist 56</span><br /><span>M: Length 80 Hip 74 Waist 60</span><br /><span>L: Length 81 Hip 78 Waist 64</span>'
                            },
                            {
                                header: 'Model Information',
                                content:
                                    '<span>S: Length 79 Hip 70 Waist 56</span><br /><span>M: Length 80 Hip 74 Waist 60</span><br /><span>L: Length 81 Hip 78 Waist 64</span>'
                            },
                            {
                                header: 'Return and refund policy',
                                content:
                                    '<span>S: Length 79 Hip 70 Waist 56</span><br /><span>M: Length 80 Hip 74 Waist 60</span><br /><span>L: Length 81 Hip 78 Waist 64</span>'
                            },
                            {
                                header: 'Wash and care',
                                content:
                                    '<span>S: Length 79 Hip 70 Waist 56</span><br /><span>M: Length 80 Hip 74 Waist 60</span><br /><span>L: Length 81 Hip 78 Waist 64</span>'
                            }
                        ]}
                    />
                </Container>
            </div>
        </div>
    )
}

export default ProductItem

import React from 'react'
import { Image } from 'react-bootstrap'
import PicAndTextOverlap from '../../components/pic-and-text-overlap/pic-and-text-overlap'
import Carousels from '../../components/carousels/carousels'
import MultiCarousels from '../../components/multi-carousels/multi-carousels'
import headline from '../../assets/headline.png'
import freeShippingImg from '../../assets/free_shipping.jpg'
import membershipImg from '../../assets/membership.jpg'
import './home.scss'
import '../../styles/shared.scss'

const Home: React.FC<{}> = () => (
    <div>
        <Carousels />
        <Image src={headline} className="headline" />
        <MultiCarousels />
        <PicAndTextOverlap
            img={freeShippingImg}
            header="Free Shipping"
            html="Free shipping on orders over HKD 600<br/>Paratroopers Express<br/><br/>Free shipping on orders over HKD 800<br/>SF Express"
            isPicRight
        />
        <PicAndTextOverlap
            img={membershipImg}
            header="Membership"
            html="<b>Sign up to be our member!</b><br/>Accumulating spending in our store over HKD888</br></br>
                BE OUR VIP! To enjoy..</br>
                ♡ 5% repay</br>
                ♡ Get a $50 coupon in birthday month</br>
                ♡ random special promotion"
            isPicRight={false}
        />
        <MultiCarousels />
    </div>
)

export default Home

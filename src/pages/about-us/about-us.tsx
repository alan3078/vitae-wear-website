import React from 'react'
import PicAndTextOverlap from '../../components/pic-and-text-overlap/pic-and-text-overlap'
import './about-us.scss'
import '../../styles/shared.scss'

import aboutUsImg from '../../assets/about_us.jpg'

const AboutUs: React.FC<{}> = () => (
    <div>
        <PicAndTextOverlap
            img={aboutUsImg}
            header="About Us"
            html="Each person has so much potential built up inside on them. At Vitae Wear, we believe in sincerity and helpfulness.<br/><br/>We have been growing and changing but one thing always remains consistent: our commitment to our customers.<br/><br/><b>Vitae</b> in Latin means <b>LIFE</b>.<br/><br/>For me, It is about energy, vitamins and power which I can feel after Yoga or Workout.<br/><br/>At Vitae Wear, we strive to provide the best and highest quality sports wear with reasonable price.<br/><br/><b>We aim to be your lifelong choice in purchasing sports wear.</b>"
            isPicRight={false}
        />
    </div>
)

export default AboutUs

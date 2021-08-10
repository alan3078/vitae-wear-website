import React from 'react'
import PicAndTextOverlap from '../../components/pic-and-text-overlap/pic-and-text-overlap'
import './customer-service.scss'
import '../../styles/shared.scss'

import customServiceImg from '../../assets/customer_service.jpg'

const CustomerService: React.FC<{}> = () => (
    <div>
        <div className="customer-service">
            <PicAndTextOverlap
                img={customServiceImg}
                header="貨運及物流"
                html="<p><span>本店設有現貨區，我們將於客人成功付款後</span>1-3<span>個工作天內寄出</span></p>
                <p><span>其他均為預訂款，由成功付款日期起計</span>7-12<span>工作天到貨</span></p>
                <p><span>本店選用</span> <strong><span>傘兵速遞</span>&nbsp; |&nbsp;</strong><strong><span>順豐速遞</span></strong></p>
                <p><span>面交：<strong>沙田圍</strong></span><strong>&nbsp;|&nbsp;</strong><strong><span>坑口</span> |&nbsp;</strong><strong><span>觀塘工作室</span></strong></p>
                <p>&nbsp;</p>
                <p><span>傘兵速遞</span></p>
                <p><span>購物滿</span> <strong>HKD600</strong> <span>可免運（只限自取點），未滿金額運費到付</span></p>
                <p><span>選用合作自提點貨運時間會比較快，如選用指定地點需預三至七個工作天</span></p>
                <p><span>有運單追蹤，會於出貨</span>Email<span>提供號碼，可於傘兵網頁追蹤</span></p>
                <p><span>請必須提供正確</span>Email<span>及電話</span></p>
                <p>&nbsp;</p>
                <p><span>【</span> <span>所有自取點首重</span>&nbsp;$20 <span>】完整自取點請參詳傘兵網頁</span></p>
                <p>&nbsp;</p>
                <p><strong><span>傘兵自取點：</span></strong><u>https://www.paratrooperex.page/selfpick-point</u></p>
                <p>&nbsp;</p>
                <p><strong><span>順豐速遞</span></strong></p>
                <p><span>購物滿</span> HKD800 <span>可免運，未滿金額運費到付</span></p>
                <p><span>接受順豐站，智能櫃，工商住宅地址必須填完整地址</span></p>
                <p><span>順豐站</span>/<span>智能櫃需填區號＋號碼（例：中環</span> 852M<span>／元朗</span> H852UA60P<span>）</span></p>
                <p><span>如選用順豐速遞（工商地址、智能櫃或順豐站），出貨電郵會附運單號碼方便追</span></p>
                <p><span>蹤如順豐運單</span>/<span>貨運問題，可聯絡本店或自行聯絡順豐更改</span> (852) 2730 0273</p>
                <p>&nbsp;</p>
                <p><strong><span>順豐自取點：</span></strong><u>https://htm.sf-express.com/hk/tc/dynamic_function/S.F.Network/EF-Locker/</u></p><p>&nbsp;</p><p class=desc-header><span><strong>貨物退換</strong></span></p>
                <p>&nbsp;</p><p><span>本店不設門市，有關尺寸可參考</span>size chart</p>
                <p>&nbsp;</p>
                <p><span>貨物出門所有尺寸不合問題，恕不退換</span></p>
                <p>&nbsp;</p>
                <p><span>如有疑問，請</span>Whatsapp<span>店主</span></p>"
                isPicRight={false}
            />
        </div>
    </div>
)

export default CustomerService

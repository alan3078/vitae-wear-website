import React from 'react'
import './products.scss'
import '../../styles/shared.scss'
import ProductCard from '../../components/product-card/product-card'
import productBanner from '../../assets/product-banner.jpg'
import Sidebar from '../../components/sidebar/sidebar'
import Banner from '../../components/banner/banner'

const Products: React.FC<{}> = () => (
    <div>
        <Banner
            img={productBanner}
            header="貨品區"
            innerText="買滿$800可享順豐免運費優惠"
        />
        <div className="sidebar-product-container">
            <Sidebar />
            <div className="products-container">
                {Array.from(Array(10).keys()).map((num: number) => (
                    <ProductCard
                        key={num}
                        productId={num}
                        img={productBanner}
                        name="Product 1"
                        colours="5 colours"
                        price="HK $199"
                    />
                ))}
            </div>
        </div>
    </div>
)

export default Products

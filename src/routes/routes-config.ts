import Home from '../pages/home/home'
import AboutUs from '../pages/about-us/about-us'
import CustomerService from '../pages/customer-service/customer-service'
import ContactUs from '../pages/contact-us/contact-us'
import Terms from '../pages/terms/terms'
import PersonalCenter from '../pages/personal-center/personal-center'
import Products from '../pages/products/products'
import ProductItem from '../pages/product-item/product-item'
import InStockProduct from '../pages/in-stock-products/in-stock-products'
import ShoppingCart from '../pages/shopping-cart/shopping-cart'

const mainRoute = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/about-us',
        component: AboutUs
    },
    {
        path: '/customer-service',
        component: CustomerService
    },
    {
        path: '/contact-us',
        component: ContactUs
    },
    {
        path: '/terms',
        component: Terms
    },
    {
        path: '/personal-center',
        component: PersonalCenter
    },
    {
        path: '/products',
        component: Products,
        exact: true
        // routes: [
        //     {
        //         path: '/products/:productId',
        //         component: ProductItem
        //     }
        // ]
    },
    {
        path: '/in-stock-products',
        component: InStockProduct,
        exact: true
        // routes: [
        //     {
        //         path: '/in-stock-products/:productId',
        //         component: ProductItem,
        //         exact: true
        //     }
        // ]
    },
    {
        path: '/in-stock-products/:productId',
        component: ProductItem
    },
    {
        path: '/products/:productId',
        component: ProductItem
    },
    {
        path: '/shopping-cart',
        component: ShoppingCart
    }
]

export default mainRoute

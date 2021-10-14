import image1 from '../assets/images/eitachei/eitachei-screenshot.png';
import home from '../assets/images/eitachei/home.png';
import cart from '../assets/images/eitachei/cart.jpeg';
import order from '../assets/images/eitachei/order.jpeg';
import orders from '../assets/images/eitachei/orders.jpeg';
import product from '../assets/images/eitachei/product.png';
import profile from '../assets/images/eitachei/profile.jpeg';
import method from '../assets/images/eitachei/method.png';
import confirm from '../assets/images/eitachei/confirm.jpeg';
import search from '../assets/images/eitachei/search.jpg';
import notification from '../assets/images/eitachei/notification.jpg';

import dashboardWeb from '../assets/images/eitachei/web/dashboard.png';
import productsWeb from '../assets/images/eitachei/web/products.png';
import productEditWeb from '../assets/images/eitachei/web/product-edit.png';
import productEdit2Web from '../assets/images/eitachei/web/product-edit-2.png';
import promotionsWeb from '../assets/images/eitachei/web/promotions.png';
import promotionsEditWeb from '../assets/images/eitachei/web/promotion-edit.png';
import ordersWeb from '../assets/images/eitachei/web/orders.png';
import orderInfoWeb from '../assets/images/eitachei/web/order-info.png';
import salesWeb from '../assets/images/eitachei/web/sales.png';
import commentsWeb from '../assets/images/eitachei/web/comments.png';
import balanceWeb from '../assets/images/eitachei/web/balance.png';

import { IData } from '../models/IData';

const images: string[] = [
    image1, 
    home, 
    cart, 
    profile, 
    search, 
    product, 
    method, 
    confirm, 
    order, 
    orders, 
    notification, 
    dashboardWeb, 
    productsWeb, 
    productEditWeb, 
    productEdit2Web,
    promotionsWeb,
    promotionsEditWeb,
    ordersWeb,
    orderInfoWeb,
    salesWeb,
    commentsWeb,
    balanceWeb
];

const data: IData = {
    title: 'Eitachei',
    // youtube: 'https://www.youtube.com/watch?v=aOqJbmwnyzI',
    playstore: 'https://play.google.com/store/apps/details?id=com.dmcode.eitacheidemo',
    tools: ['React Native', 'Laravel', 'ReactJS'],
    routerName: '/projects/eitachei',
    images: images
}

export default data;
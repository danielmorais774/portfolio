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
import { IData } from '../models/IData';

const images: string[] = [image1, home, cart, profile, search, product, method, confirm, order, orders, notification];

const data: IData = {
    title: 'Eitachei',
    youtube: 'https://www.youtube.com/watch?v=aOqJbmwnyzI',
    playstore: 'https://play.google.com/store/apps/details?id=com.dmcode.eitacheidemo',
    tools: ['React Native', 'Laravel', 'ReactJS'],
    images: images
}

export default data;
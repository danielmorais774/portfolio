import image1 from '../assets/images/appBakery/appbakery-screenshot.png';
import image2 from '../assets/images/appBakery/home.jpg';
import image3 from '../assets/images/appBakery/product.jpg';
import image4 from '../assets/images/appBakery/cart.jpg';
import image5 from '../assets/images/appBakery/edit.jpg';
import { IData } from '../models/IData';

const images: string[] = [image1, image2, image3, image4, image5];

const data: IData = {
    title: 'Aplicativo de Comércio',
    tools: ['Laravel', 'React Native'],
    images: images
}

export default data;
import image1 from '../assets/images/appBakeryWeb/appbakeryweb-screenshot.png';
import image2 from '../assets/images/appBakeryWeb/sales.png';
import image3 from '../assets/images/appBakeryWeb/product.png';
import image4 from '../assets/images/appBakeryWeb/estoque.png';
import { IData } from '../models/IData';

const images: string[] = [image1, image2, image3, image4];

const data: IData = {
    title: 'Sistema Comercial',
    tools: ['Laravel', 'VueJS'],
    images: images
}

export default data;
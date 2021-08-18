import image1 from '../assets/images/meAdote/meadote-screenshot.png';
import image2 from '../assets/images/meAdote/pet-view.jpg';
import image3 from '../assets/images/meAdote/contact.jpg';
import image4 from '../assets/images/meAdote/menu-options.jpg';
import image5 from '../assets/images/meAdote/login.jpg';
import { IData } from '../models/IData';

const images: string[] = [image1, image2, image3, image4, image5];

const data: IData = {
    title: 'MeAdote',
    tools: ['React Native', 'NodeJS'],
    github: 'https://github.com/danielmorais774/App-MeAdote.git',
    images: images
}

export default data;
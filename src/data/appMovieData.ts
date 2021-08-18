import image1 from '../assets/images/appMovie/appmovie-screenshot.png';
import image2 from '../assets/images/appMovie/home.jpeg';
import image3 from '../assets/images/appMovie/movie.jpeg';
import image4 from '../assets/images/appMovie/search.jpeg';
import { IData } from '../models/IData';

const images: string[] = [image1, image2, image3, image4];

const data: IData = {
    title: 'AppMovie',
    github: 'https://github.com/danielmorais774/appmovie',
    tools: ['React Native'],
    images: images
}

export default data;
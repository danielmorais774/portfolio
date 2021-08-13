import React from 'react';

import { Container } from './styles';

import {FaGithub} from 'react-icons/fa';
import {BiSlideshow} from 'react-icons/bi';

import meadoteScreenshot from '../../assets/images/meadote-screenshot.png';

const Card: React.FC = () => {
  return (
      <Container>
          <div className="image-container">
            <div className="content-overlay"></div>
            <img src={meadoteScreenshot} alt="" />
            <div className="content-details fadeIn-top">
              <button className="image-button">
                <BiSlideshow size={22} color="#fff"/>
              </button>
              <button className="image-button">
                <FaGithub size={22} color="#fff"/>
              </button>
            </div>
          </div>
          
          <p>Sistema Comercial</p>
          <div className="badge-container">
            <div className="item-badge">
              <p>Vuejs</p>
            </div>
            <div className="item-badge">
              <p>React Native</p>
            </div>
            <div className="item-badge">
              <p>VueJs</p>
            </div>
          </div>
      </Container>
  );
}

export default Card;
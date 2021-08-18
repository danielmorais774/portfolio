import React, { useState } from 'react';

import { Container } from './styles';

import {FaGithub, FaGooglePlay, FaYoutube} from 'react-icons/fa';
import {BiSlideshow} from 'react-icons/bi';
import Lightbox from 'react-image-lightbox';

import 'react-image-lightbox/style.css';

import { IData } from '../../models/IData';
interface ICardProps {
  data: IData;
}

const Card: React.FC<ICardProps> = ({data}) => {

  const [isOpenLightbox, setIsOpenLightbox] = useState<boolean>(false);
  const [photoIndex, setPhotoIndex] = useState<number>(0);

  return (
    <>
      {
        isOpenLightbox && 
        <Lightbox
          mainSrc={data.images[photoIndex]}
          nextSrc={data.images[(photoIndex + 1) % data.images.length]}
          prevSrc={data.images[(photoIndex + data.images.length - 1) % data.images.length]}
          onCloseRequest={() => setIsOpenLightbox(false)}
          onMovePrevRequest={() => 
            setPhotoIndex((photoIndex + data.images.length - 1) % data.images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % data.images.length)
          }
        />
      }
      <Container>
          <div className="image-container">
            <div className="content-overlay"></div>
            <img src={data.images[0]} alt="" />
            <div className="content-details fadeIn-top">
              <button className="image-button">
                <BiSlideshow onClick={() => setIsOpenLightbox(true)} size={22} color="#fff"/>
              </button>
              {data.youtube &&
                <button className="image-button" onClick={()=> window.open(data.youtube, "_blank")}>
                  <FaYoutube size={22} color="#fff"/>
                </button>
              }
              {data.github &&
                <button className="image-button" onClick={()=> window.open(data.github, "_blank")}>
                  <FaGithub size={22} color="#fff"/>
                </button>
              }
              {data.playstore &&
                <button className="image-button" onClick={()=> window.open(data.playstore, "_blank")}>
                  <FaGooglePlay size={22} color="#fff"/>
                </button>
              }
            </div>
          </div>
          
          <h3>{data.title}</h3>
          <div className="badge-container">
            {
              data.tools.map((tool, index) => (
                  <div key={index} className="item-badge">
                    <p>{tool}</p>
                  </div>
              ))
            }
          </div>
      </Container>
    </>
  );
}

export default Card;
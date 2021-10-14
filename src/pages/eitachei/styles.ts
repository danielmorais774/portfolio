import styled, { keyframes } from "styled-components";
import { fadeInRight, fadeInUp } from 'react-animations';

const fadeInRightAnimation = keyframes`${fadeInRight}`;
const fadeInUpAnimation = keyframes`${fadeInUp}`;

export const Container = styled.div``;

export const Header = styled.div`
  background: linear-gradient(
    89.8deg,
    #e0234e -0.51%,
    rgba(239, 75, 75, 0.97) 99.84%
  );

  .header-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 70px;

    h3 {
      font-family: "Oswald", sans-serif;
      text-align: center;
      font-size: 2rem;
      color: white;
      animation: 2s ${fadeInUpAnimation};
    }

    p {
      font-family: "Open Sans", sans-serif;
      color: white;
      font-size: 1.1rem;
      text-align: center;
      margin-top: 30px;
      max-width: 700px;
      animation: 2s ${fadeInUpAnimation};
    }

    img {
      -webkit-user-drag: none;
      -khtml-user-drag: none;
      -moz-user-drag: none;
      -o-user-drag: none;
      animation: 2s ${fadeInRightAnimation};
    }

    @media (min-width: 1400px) {
      img {
        height: 480px;
        margin-top: 40px;
      }
    }

    @media (min-width: 995px) and (max-width: 1400px) {
      img {
        height: 420px;
        margin-top: 40px;
      }
    }

    @media (max-width: 995px) {
      img {
        display: none;
      }
    }
  }
`;

export const IconScroll = styled.div`
  width: 30px;
  height: 52.5px;
  margin-left: -20px;
  top: 50%;
  margin-top: -35px;
  box-shadow: inset 0 0 0 1px #fff;
  border-radius: 25px;

  @media (max-width: 450px) {
    border-radius: 4px;
  }

  &,
  &:before, &:after {
    position: absolute;
    left: 50%;
    top: 96%;
  }

  &:before {
    content: "";
    width: 8px;
    height: 8px;
    background: #fff;
    margin-left: -4px;
    top: 8px;
    border-radius: 4px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: scroll;
  }

  @media (max-width: 450px) {
    &:before { 
      top: 25px;
      animation-name: scrollmobile;
    }

    &:after {
      content: "";
      width: 6px;
      height: 6px;
      /* background: #fff; */
      border: #fff 1px solid;
      border-radius: 4px;
      top: 40px;
      margin-left: -2.5px;
    }
  }

  @keyframes scroll {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(15px);
    }
  }

  @keyframes scrollmobile {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(-15px);
    }
  }
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: absolute;
  left: 0px;
  right: 0px;

  height: 70px;
  background: rgba(0, 0, 0, 0.06);

  .navbar-content {
    display: flex;
    justify-content: space-between;
  }

  .navbar-title {
    font-family: "PublicSecret";
    font-style: normal;
    font-weight: 600;
    font-size: 23px;
    line-height: 36px;
    margin: 0;
    color: #fff;
  }

  #menu-main {
    display: flex;
    padding: 0px;
    margin: 0px;
    list-style: none;
    gap: 0.5rem;

    a {
      display: block;
      padding: 0.5rem;
      color: #fff;
      text-decoration: none;
      font-size: 18px;
      font-family: "Roboto", sans-serif;
    }
  }

  #btn-mobile {
    display: none;
    background-color: transparent;
    border: none;
    cursor: pointer;

    .hamburguer {
      /* width: 20px; */
      height: 20px;
    }

    .hamburguer::before, .hamburguer::after {
      content: '';
      display: block;
      width: 25px;
      height: 2px;
      background-color: #fff;
      transition: 0.6s;
    }

    .hamburguer::after {
      margin-top: 7px;
    }

  }

  @media (max-width: 770px) {
    #btn-mobile {
      display: block;
    }

    .navbar-content.active .hamburguer::before{
      transform: rotate(135deg);
    }

    .navbar-content.active .hamburguer::after{
      transform: rotate(45deg);
      margin-top: -2px !important;
    }

    .navbar-content #menu-main {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 70px;
      right: 0px;
      width: 100%;
      height: 0px;
      z-index: 1000;
      background-color: #a71435;
      overflow: hidden;
      visibility: hidden;
      transition: 1s;
      li {
        margin: 0px 5px;
      }

      li:first-child {
        margin-top: 10px;
      }
    }

    .navbar-content.active #menu-main {
      visibility: visible;
      height: calc(100vh - 70px);
    }
  }

  /* ul li {
    display: inline;

    & + li {
      margin-left: 70px;
    }
  } */
`;

export const SectionAbout = styled.div`
  display: flex;
  align-items: center;
  min-height: 700px;

  img {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    max-width: 320px;
    border-radius: 20px;
  }

  h3 {
    font-family: "Oswald", sans-serif;
    font-size: 1.8rem;
  }

  @media (max-width: 767px) {
    h3 {
      text-align: center;
    }
  }

  p {
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    img {
      width: 60%;
      margin-top: 50px;
      margin-bottom: 20px;
      max-width: 250px;
      border-radius: 20px;
    }

    h3 {
      text-align: center;
      margin-top: 20px;
    }
  }
`;

export const SectionFeature = styled.div`
  background-color: #f9f9f9;
  padding: 70px 0px;
  overflow: hidden;

  .section-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;

    @media (max-width: 850px) {
      flex-direction: column;
    }
  }

  h3 {
    font-family: "Oswald", sans-serif;
    font-size: 1.8rem;
    text-align: center;
  }

  img#phone {
    max-height: 650px;
  }

  .section-feature-left {
    margin-right: 20px;

    .section-feature-item {
      text-align: right;

      img {
        display: block;
        margin-left: auto;
        margin-right: 0;
        height: 60px;
      }

      span {
        font-size: 0.8rem;
        color: #000;
        font-weight: bold;
        margin-top: 5px;
      }
    }
  }

  .section-feature-right {
    margin-left: 20px;

    .section-feature-item {
      text-align: left;

      img {
        display: block;
        margin-left: auto;
        margin-left: 0;
        height: 60px;
      }

      span {
        font-size: 0.8rem;
        color: #000;
        font-weight: bold;
        margin-top: 5px;
      }
    }
  }

  @media (max-width: 850px) {
    .section-feature-left {
      margin-bottom: 20px;

      .section-feature-item {
        text-align: center;

        img {
          display: block;
          margin: 0 auto;
          height: 60px;
        }
      }
    }
  }

  @media (max-width: 850px) {
    .section-feature-right {
      margin-top: 20px;

      .section-feature-item {
        text-align: center;

        img {
          display: block;
          margin: 0 auto;
          height: 60px;
        }
      }
    }
  }

  .section-feature-item:not(:first-child) {
    margin-top: 55px;
  }
`;

export const SectionImages = styled.div`
  padding: 70px 0px;
  text-align: center;
  overflow: hidden;

  h3 {
    font-family: "Oswald", sans-serif;
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 45px;
  }

  img {
    height: 620px;
    border-radius: 10px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  }

  img:not(:first-child) {
    margin-left: 30px;
  }

  @media (max-width: 992px) {
    img {
      margin-top: 30px;
    }
  }

  @media (max-width: 767px) {
    img {
      margin-left: 0px !important;
    }
  }
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  min-height: 550px;
  overflow: hidden;

  img {
    margin-top: 20px;
    margin-bottom: 20px;
    max-width: 420px;
    border-radius: 10px;
  }

  h3 {
    font-family: "Oswald", sans-serif;
    font-size: 1.8rem;
    text-align: center;
  }

  p {
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    margin: 0 auto;
    margin-top: 30px;
    text-align: center;
    max-width: 450px;
  }

  @media (max-width: 480px) {
    img {
      width: 100%;
      margin-top: 20px;
      margin-bottom: 20px;
      max-width: 250px;
      border-radius: 20px;
    }

    h3 {
      text-align: center;
      margin-top: 20px;
    }
  }
`;

export const SectionInfo = styled.div`
  display: flex;
  background-color: #f9f9f9;
  min-height: 600px;
  align-items: center;
  padding: 30px 0px;
  overflow: hidden;

  @media (max-width: 575px) {
    align-items: flex-start;
  }

  .flex-column .nav-link {
    border: #7d7d7d 2px solid;
    color: #292929;
    font-weight: bold;
    text-align: center;
  }

  .flex-column .nav-link {
    margin-bottom: 20px !important;
  }

  .flex-column .active {
    background-color: transparent !important;
    border: #e42430 2px solid;
    color: #e42430;
  }
`;

export const DownloadAppContainer = styled.div`
  background: linear-gradient(180deg, #e0234e 0%, #ef4b4b 100%);

  .downloadAppContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 280px;

    h3 {
      font-family: "Oswald", sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: 1.5px;
      color: #fff;
    }

    img {
      height: 95px;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  height: 80px;
  border-top: solid 1px;
  border-top-color: rgba(255, 255, 255, 0.2);
  align-items: center;

  .footer-container {
    display: flex;
    justify-content: space-between;
  }

  p {
    font-size: 1rem;
    display: flex;
    font-family: "Oswald", sans-serif;
    font-weight: 500;
    margin: 0px;

    img {
      margin: 5px 0px 0px 10px !important;
    }
  }

  .logo {
    font-family: "PublicSecret";
    font-style: normal;
    font-weight: 600;
  }
`;

import React, { useCallback, useEffect, useRef, useState } from "react";

import {
  Container,
  Header,
  Navbar,
  IconScroll,
  SectionAbout,
  SectionFeature,
  SectionImages,
  Section,
  DownloadAppContainer,
  Footer,
  SectionInfo,
} from "./styles";

import { withRouter } from 'react-router-dom';


import BackendTab from './tabs/backend';
import FrontendTab from './tabs/frontend';
import MobileTab from './tabs/mobile';
import Payment from './tabs/payment';
import IntegrationTab from './tabs/integration';

import imageHeader from "../../assets/images/eitachei-page/header.png";
import imageLogo from "../../assets/images/eitachei-page/logo.png";
import imagePhone from "../../assets/images/eitachei-page/phone-eitachei.png";
import imageProductIcon from "../../assets/images/eitachei-page/product.png";
import imageDeliveryIcon from "../../assets/images/eitachei-page/delivery.png";
import imageDashboardIcon from "../../assets/images/eitachei-page/dashboard.png";
import imagePaymentIcon from "../../assets/images/eitachei-page/payment.png";
import imageNotificationIcon from "../../assets/images/eitachei-page/notificacao.png";
import imageRealtimeIcon from "../../assets/images/eitachei-page/real-time.png";
import imageEitacheiApp1 from "../../assets/images/eitachei-page/eitachei-app-1.png";
import imageEitacheiApp2 from "../../assets/images/eitachei-page/eitachei-app-2.png";
import imageEitacheiApp3 from "../../assets/images/eitachei-page/eitachei-app-3.png";
import imageDashboardWeb from "../../assets/images/eitachei-page/dashboard-web.png";
import imagePlayStore from "../../assets/images/eitachei-page/playstore-icon.png";

import { Col, Nav, Row, Tab } from "react-bootstrap";
import AOS from 'aos';

const Eitachei: React.FC = () => {

  const [activeMenu, setActiveMenu] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const onClickBtnMobile = useCallback(() => {
    if (menuRef?.current && activeMenu === false) {
      menuRef.current.focus();
    }
    setActiveMenu(!activeMenu);
  }, [activeMenu, menuRef]);

  const onBlurMenuPopup = useCallback(() => {
    if (activeMenu === true) {
      setActiveMenu(false);
    }
  }, [activeMenu])

  return (
    <Container>
      <Header>
        <Navbar>
          <div className="container">
            <div className={"navbar-content" + (activeMenu ? ' active' : '')}>
              <h3 className="navbar-title">Eitachei Delivery</h3>
              <button id="btn-mobile" onClick={onClickBtnMobile}>
                <span className="hamburguer"></span>
              </button>
              <ul id="menu-main" ref={menuRef} onBlur={onBlurMenuPopup}>
                <li>
                  <a href="#section-about">Sobre</a>
                </li>
                <li>
                  <a href="#section-feature">Funcionalidades</a>
                </li>
                <li>
                  <a href="#section-images">Imagens</a>
                </li>
                <li>
                  <a href="#section-info">Informações</a>
                </li>
                <li>
                  <a href="#download-demo">Download</a>
                </li>
              </ul>
            </div>
          </div>
        </Navbar>
        <div className="container">
          <div className="header-container">
            <div>
              <h3>Compre produtos em lojas locais sem sair de casa</h3>
              <p>
                Este site não tem por objetivo oferecer uma solução para
                negócios reais. Contudo, foi criado apenas para relatar as
                experiências obtida em seu desenvolvimento.{" "}
              </p>
            </div>
            <img src={imageHeader} alt="header" />
          </div>
          <IconScroll />
        </div>
      </Header>

      <SectionAbout id="section-about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6" style={{ textAlign: "center" }}>
              <img data-aos="zoom-in" src={imageLogo} alt="about" />
            </div>
            <div className="col-12 col-md-6">
              <div data-aos="fade-in">
                <h3>Sobre o Projeto</h3>
                <p>
                  O projeto foi criado com intuito de adquirir experiência de desenvolvimento, o app se trata de um serviço de delivery para empresas locais, onde cada empresa terá um catálogo com seus produtos e poderá desfrutar das várias funcionalidades integradas no app. O seu back-end foi desenvolvido em Laravel (PHP), excetos alguns micro serviços feitos em nodejs, o front-end foi feito usando ReactJs e React Native para versão mobile. Alguns conceitos como real-time, notificação push, envio de emails, gateways de pagamentos, google maps e outros mais foram usados no projeto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionAbout>

      <SectionFeature id="section-feature">
        <div className="container">
          <h3>O que tem a oferecer?</h3>
          <div className="section-container">
            <div data-aos="fade-right" className="section-feature-left">
              <div className="section-feature-item">
                <img src={imageProductIcon} alt="produto" />
                <span>Cadastramento de Produtos</span>
              </div>

              <div className="section-feature-item">
                <img src={imageDeliveryIcon} alt="produto" />
                <span>Rastreio de Pedido</span>
              </div>

              <div className="section-feature-item">
                <img src={imageDashboardIcon} alt="produto" />
                <span>Integração com painel Dashboard</span>
              </div>
            </div>
            <img id="phone" src={imagePhone} alt="phone" />
            <div data-aos="fade-left" className="section-feature-right">
              <div className="section-feature-item">
                <img src={imagePaymentIcon} alt="produto" />
                <span>Sistema de Pagamento</span>
              </div>

              <div className="section-feature-item">
                <img src={imageNotificationIcon} alt="produto" />
                <span>Notificação Push</span>
              </div>

              <div className="section-feature-item">
                <img src={imageRealtimeIcon} alt="produto" />
                <span>Monitoramento em real-time</span>
              </div>
            </div>
          </div>
        </div>
      </SectionFeature>

      <SectionImages id="section-images">
        <div className="container">
          <h3>Imagens</h3>
          <img data-aos="fade-right" src={imageEitacheiApp1} alt="app 1" />
          <img data-aos="fade-up" src={imageEitacheiApp2} alt="app 2" />
          <img data-aos="fade-left" src={imageEitacheiApp3} alt="app 3" />
        </div>
      </SectionImages>

      <Section>
        <div className="container">
          <div className="row align-items-center flex-lg-row flex-md-column">
            <div className="col-12 col-md-6">
              <div data-aos="fade-up">
                <h3>Painel Dashboard</h3>
                <p>
                  Um painel dashboard conta com relatórios de ganhos, produtos mais vendidos, produtos mais visitados e outras coisas a mais. O painel web possui total integração com o app, além de funcionalidades como fila de pedidos, busca personalizada dos produtos cadastrados, gerenciamento de promoções e extrato de venda.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12" style={{ textAlign: "center", padding: 20 }}>
              <img data-aos="fade-left" src={imageDashboardWeb} alt="about" />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container">
          <div className="row align-items-center flex-lg-row flex-column-reverse">
            <div className="col-lg-6 col-md-12 col-sm-12" style={{ textAlign: "center", padding: 20 }}>
              <img data-aos="fade-right" src={imageDashboardWeb} alt="about" />
            </div>
            <div className="col-12 col-md-6">
              <div data-aos="fade-up">
                <h3>Fila de Pedidos</h3>
                <p>
                  Todos os pedidos são organizados em uma fila, onde cada pedido é inserido na fila em tempo real, ou seja, sem necessidade de reload da página. Além de emitir um aviso sonoro a cada pedido novo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <SectionInfo id="section-info">
        <div data-aos="fade-in" className="container">
          <Tab.Container defaultActiveKey="backend">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column" fill={false}>
                  <Nav.Item>
                    <Nav.Link eventKey="backend">Back end</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="frontend">Front end</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="mobile">Mobile</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="payment">Pagamento</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="integration">Integrações</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <BackendTab />
                  <FrontendTab/>
                  <MobileTab/>
                  <Payment/>
                  <IntegrationTab/>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </SectionInfo>

      <DownloadAppContainer id="download-demo">
        <div className="container">
          <div className="downloadAppContent">
            <h3>Baixe uma versão Demo</h3>
            <a href="https://play.google.com/store/apps/details?id=com.dmcode.eitacheidemo&hl=pt">
              <img src={imagePlayStore} alt="icone google play" />
            </a>
          </div>
        </div>
      </DownloadAppContainer>

      <Footer>
        <div className="container">
          <div className="footer-container">
            <p>@ 2021 Todos os direitos reservados</p>
            <p className="logo">Eitachei Delivery</p>
          </div>
        </div>
      </Footer>
    </Container>
  );
};

export default withRouter(Eitachei);

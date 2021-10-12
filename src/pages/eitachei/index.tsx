import React, { useEffect } from "react";

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


import BackendTab from './tabs/backend';

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

  useEffect(() => {
    AOS.init({ duration: 1200 });
  },[]);

  return (
    <Container>
      <Header>
        <Navbar>
          <div className="container">
            <div className="navbar-content">
              <h3 className="navbar-title">Eitachei Delivery</h3>
              <ul>
                <li>
                  <a href="#section-about">Sobre o projeto</a>
                </li>
                <li>
                  <a href="#section-projects">Projetos</a>
                </li>
                <li>
                  <a href="#section-contact">Contato</a>
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
                <h3>Como surgiu a ideia?</h3>
                <p>
                  Olá, eu sou o Daniel, um desenvolvedor Full stack e gamer nas
                  horas vagas rsrs.
                </p>
                <p>
                  Sou um grande entusiasta da computação, em especial da área de
                  desenvolvimento. iniciei com 13 anos de idade e fui
                  intensificando meus estudos ao longo dos anos, após cursar o
                  ensino técnico, passei a enxergar a programação como a minha
                  área de atuação profissional.
                </p>
                <p>
                  Tenho muita curiosidade e sede por conhecimento. Sou cheio de
                  ideias malucas e sempre ponho aprova meu conhecimento tornando
                  elas em realidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionAbout>

      <SectionFeature>
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

      <SectionImages>
        <div className="container">
          <h3>Imagens</h3>

          <img data-aos="fade-right" src={imageEitacheiApp1} />
          <img data-aos="fade-up" src={imageEitacheiApp2} />
          <img data-aos="fade-left" src={imageEitacheiApp3} />
        </div>
      </SectionImages>

      <Section>
        <div className="container">
          <div className="row align-items-center flex-lg-row flex-md-column">
            <div className="col-12 col-md-6">
              <div data-aos="fade-up">
                <h3>Painel Dashboard</h3>
                <p>
                  Este site não tem por objetivo oferecer uma solução para
                  negócios reais. Contudo, foi criado para relatar as
                  experiências obtida em seu desenvolvimento. Contudo, foi
                  criado para relatar as experiências obtida em seu
                  desenvolvimento. .
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
                  Este site não tem por objetivo oferecer uma solução para
                  negócios reais. Contudo, foi criado para relatar as
                  experiências obtida em seu desenvolvimento. Contudo, foi
                  criado para relatar as experiências obtida em seu
                  desenvolvimento. .
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <SectionInfo>
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
                  <BackendTab/>
                  <Tab.Pane eventKey="frontend">
                    {/* <Sonnet /> */}
                    dasd
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </SectionInfo>

      <DownloadAppContainer>
        <div className="container">
          <div className="downloadAppContent">
            <h3>Baixe uma versão Demo</h3>
            <img src={imagePlayStore} />
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

export default Eitachei;

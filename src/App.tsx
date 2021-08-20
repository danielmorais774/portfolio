import React from 'react';

import {Header, Navbar, SectionAbout, SectionProjects, SectionContact, Footer} from './styles';

import imageProgrammer from './assets/images/image-programmer.png';
import imageAbout from './assets/images/image-about.jpg';

import {FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';
import emoji from 'react-easy-emoji'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from './components/Card';

import meadoteData from './data/meAdoteData';
import eitacheiData from './data/eitacheiData';
import chatUiData from './data/chatUiData';
import appMovie from './data/appMovieData';
import appBakeryWeb from './data/appBakeryWebData';
import appBakery from './data/appBakeryData';

const App: React.FC = () => {
  return (
    <>
      <Header>
        <Navbar>
          <div className="container">
            <div className="navbar-content">
              <h3 className="navbar-title">Daniel Morais <span className={"purple"}>Developer</span></h3>
              <ul>
                <li>
                  <a href="#section-about">Sobre mim</a>
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
          <div className='header-container'>
            <div>
              <h3>Olá, eu sou o <span className={"purple"}>Daniel Morais</span></h3>
              <p>Desenvolvedor Full Stack</p>
            </div>
            <img src={imageProgrammer} alt="programmer" />
          </div>
        </div>
        
      </Header>
      <SectionAbout id="section-about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6" style={{textAlign: 'center'}}>
              <img src={imageAbout} alt="about"/>
            </div>
            <div className="col-12 col-md-6">
              <div>
                <h3>Sobre mim</h3>
                <p>Olá, eu sou o Daniel, um desenvolvedor Full stack e gamer nas horas vagas rsrs.</p>
                <p>Sou um grande entusiasta da computação, em especial da área de desenvolvimento. iniciei com 13 anos de idade e fui intensificando meus estudos ao longo dos anos, após cursar o ensino técnico, passei a enxergar a programação como a minha área de atuação profissional.
                </p>
                <p>Tenho muita curiosidade e sede por conhecimento. Sou cheio de ideias malucas e sempre ponho aprova meu conhecimento tornando elas em realidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionAbout>

      <SectionProjects id="section-projects">
        <div className="container">
          <h3>Projetos</h3>
          <div className="row">
            <div className="col-12 col-md-4 col-sm-6">
              <Card data={eitacheiData}/>
            </div>
            <div className="col-12 col-md-4 col-sm-6">
              <Card data={meadoteData}/>
            </div>
            <div className="col-12 col-md-4 col-sm-6">
              <Card data={chatUiData}/>
            </div>
            <div className="col-12 col-md-4 col-sm-6">
              <Card data={appBakeryWeb}/>
            </div>
            <div className="col-12 col-md-4 col-sm-6">
              <Card data={appBakery}/>
            </div>
            <div className="col-12 col-md-4 col-sm-6">
              <Card data={appMovie}/>
            </div>
          </div>
        </div>
      </SectionProjects>

      <SectionContact id="section-contact">
        <div className="container">
          <h3>Contato</h3>
          <p>Em caso de contato, fique a vontade para usar algum dos meios abaixo.</p>

          <div className="row align-items-center">
            <div className="col-md-3 ms-md-auto">
              <a className="item-badge" href="https://www.instagram.com/perfildevdodaniel/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} color="#E42450"/>
                <p>@perfildevdodaniel</p>
              </a>
            </div>

            <div className="col-md-3 ms-md-auto">
              <a className="item-badge" href="https://github.com/danielmorais774" target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} color="#914EFF"/>
                <p>@danielmorais774</p>
              </a>
            </div>

            <div className="col-md-3 ms-md-auto">
              <a className="item-badge" href="https://www.linkedin.com/in/daniel-morais-a3127a1a5" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} color="#0085FF"/>
                <p>Daniel Morais</p>
              </a>
            </div>

            <div className="col-md-3 ms-md-auto">
              <a className="item-badge" href="https://mail.google.com/mail/?view=cm&fs=1&to=danielmorais774@gmail.com&su=CONTATO" target="_blank" rel="noopener noreferrer">
                <SiGmail size={20} color="#E42430"/>
                <p>danielmorais774@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
      </SectionContact>

      <Footer>
        <div className="container">
          <div className="footer-container">
            <p>@ 2021 Todos os direitos reservados</p>
            <p>Feito com muito {emoji('☕')}</p>
          </div>
        </div>
      </Footer>
    </>
  );
}

export default App;
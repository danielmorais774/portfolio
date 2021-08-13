import React from 'react';

import {Header, Navbar, SectionAbout, SectionProjects, SectionContact, Footer} from './styles';

import imageProgrammer from './assets/images/image-programmer.png';
import imageAbout from './assets/images/image-about.png';

import {FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';
import emoji from 'react-easy-emoji'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from './components/Card';

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
                  <a href="#">Sobre mim</a>
                </li>
                <li>
                  <a href="#">Projetos</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
              </ul>
            </div>
          </div>
        </Navbar>
        <div className="container">
          <div className='header-container'>
            <div>
              <h3>Olá, eu sou o <span className={"purple"}>Daniel Morais</span></h3>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            </div>
            <img src={imageProgrammer} alt="programmer" />
          </div>
        </div>
        
      </Header>
      <SectionAbout>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <img src={imageAbout} alt="about"/>
            </div>
            <div className="col-12 col-md-6">
              <div>
                <h3>Sobre mim</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
              </div>
            </div>
          </div>
        </div>
      </SectionAbout>

      <SectionProjects>
        <div className="container">
          <h3>Projetos</h3>
          <div className="row">
            <div className="col-12 col-md-4 col-sm-6">
              <Card/>
            </div>
            <div className="col-12 col-md-4 col-sm-6">
              <Card/>
            </div>
            <div className="col-12 col-md-4 col-sm-6">
              <Card/>
            </div>
            <div className="col-12 col-md-4 col-sm-6">
              <Card/>
            </div>
            <div className="col-12 col-md-4 col-sm-6">
              <Card/>
            </div>
            <div className="col-12 col-md-4 col-sm-6">
              <Card/>
            </div>
            <div className="col-12 col-md-4 col-sm-6">
              <Card/>
            </div>
            <div className="col-12 col-md-4 col-sm-6">
              <Card/>
            </div>
          </div>
        </div>
      </SectionProjects>

      <SectionContact>
        <div className="container">
          <h3>Contato</h3>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
          </p>

          <div className="row align-items-center">
            <div className="col-md-3 ms-md-auto">
              <a className="item-badge" href="#">
                <FaInstagram size={20} color="#E42450"/>
                <p>@perfildevdodaniel</p>
              </a>
            </div>

            <div className="col-md-3 ms-md-auto">
              <a className="item-badge" href="#">
                <FaGithub size={20} color="#914EFF"/>
                <p>@danielmorais774</p>
              </a>
            </div>

            <div className="col-md-3 ms-md-auto">
              <a className="item-badge" href="#">
                <FaLinkedin size={20} color="#0085FF"/>
                <p>Daniel Morais</p>
              </a>
            </div>

            <div className="col-md-3 ms-md-auto">
              <a className="item-badge" href="#">
                <SiGmail size={20} color="#E42430"/>
                <p>danielmorais774</p>
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
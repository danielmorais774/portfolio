import React from "react";
import { Tab } from "react-bootstrap";

import { Content } from "./styles";

import imageReactJsIcon from '../../../../assets/images/eitachei-page/react-icon.png';

const backend: React.FC = () => {
  return (
    <Tab.Pane eventKey="frontend">
      <Content>
        <p>
          O painel de gerenciamento de lojas foi desenvolvido completamente em ReactJS, seguindo o formato SPA para uma melhor experiência de usuário. Todas as requisições possuem token JWT para autenticação e são feitas por meios do Axios, o painel também conta com recurso de websockets usando socket.io conectado a um subsistema em nodejs.
        </p>
        <div className="row-custom">
          <img src={imageReactJsIcon} alt="icone reactjs" />
        </div>
      </Content>
    </Tab.Pane>
  );
};

export default backend;

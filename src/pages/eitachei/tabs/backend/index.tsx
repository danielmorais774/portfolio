import React from "react";
import { Tab } from "react-bootstrap";

import { Content } from "./styles";

import imageLaravelIcon from '../../../../assets/images/eitachei-page/laravel-icon.png';
import imageNodejsIcon from '../../../../assets/images/eitachei-page/nodejs-icon.png';

const backend: React.FC = () => {
  return (
    <Tab.Pane eventKey="backend">
      <Content>
        <p>
          O backend foi a stack na qual mais apliquei os meus conhecimentos, desde a modelagem do banco de dados até as integrações com subsistemas. Seu núcleo principal se trata de um monólito em laravel, na qual foi desenvolvida uma api rest e as regras de negócio. Os registros sobre produtos, vendas, saques, empresas e usuários foram salvos em banco de dados relacional e a API se encarrega de buscar e processar esses dados para o app.
        </p>
        <div className="row-custom">
          <img src={imageNodejsIcon} alt="icone nodejs" />
          <img src={imageLaravelIcon} alt="icone laravel" />
        </div>
      </Content>
    </Tab.Pane>
  );
};

export default backend;

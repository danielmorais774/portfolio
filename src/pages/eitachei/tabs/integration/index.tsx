import React from "react";
import { Tab } from "react-bootstrap";

import { Content } from "./styles";

import imageOneSignalIcon from '../../../../assets/images/eitachei-page/one-signal-icon.png';
import imageBugsnagIcon from '../../../../assets/images/eitachei-page/bugsnag-icon.png';

const backend: React.FC = () => {
  return (
    <Tab.Pane eventKey="integration">
      <Content>
        <p>
          Foi usado algumas plataformas de terceiros como Onesignal, Bugsnag, Codepush e Pagar.me. Contudo alguns subsistemas próprios como controle de sessão socket para o painel web e um software para intermediar conexões com impressoras térmica.
        </p>
        <div className="row-custom">
          <img src={imageOneSignalIcon} alt="icone one signal" />
          <img src={imageBugsnagIcon} alt="icone bugsnag" />
        </div>
      </Content>
    </Tab.Pane>
  );
};

export default backend;

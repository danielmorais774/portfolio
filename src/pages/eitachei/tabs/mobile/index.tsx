import React from "react";
import { Tab } from "react-bootstrap";

import { Content } from "./styles";

import imageReactNativeIcon from '../../../../assets/images/eitachei-page/react-native-icon.png';

const backend: React.FC = () => {
  return (
    <Tab.Pane eventKey="mobile">
      <Content>
        <p>
          O aplicativo foi desenvolvido em React Native, pois oferece suporte ao Android e IOS, as informações consultadas pelo app são feitas via requisições HTTPS usando token JWT para autenticação. Alguns recursos como GPS, câmera e Async Storage foram explorados durante o desenvolvimento. Atualizações simples podem ser feitas via OTA através da ferramenta codepush.
        </p>
        <div className="row-custom">
          <img src={imageReactNativeIcon} alt="icone react native" />
        </div>
      </Content>
    </Tab.Pane>
  );
};

export default backend;

import React from "react";
import { Tab } from "react-bootstrap";

import { Content } from "./styles";

const backend: React.FC = () => {
  return (
    <Tab.Pane eventKey="payment">
      <Content>
        <p>
          O sistema de pagamento foi feito através de uma integração com API de pagamento da Pagar.me. É possível cadastrar cartão, realizar venda por cartão de crédito ou pix, e realizar saques. Após a confirmação de pagamento do Gateway de pagamento, o lojista é notificado com um novo pedido.
        </p>
      </Content>
    </Tab.Pane>
  );
};

export default backend;

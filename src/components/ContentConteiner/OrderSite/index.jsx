import React, { useState } from "react";

import Modal from "../../Modal";

import ReactRotatingText from "react-rotating-text";

import {
  OrderSiteWrapper,
  OrderSiteConteiner,
  OrderSiteHeader,
  OrderSiteLabel,
  OrderSiteCustom,
  OrderSiteText,
  OrderSiteButton,
  Link,
  Label,
} from "./style.js";

import "./style.css";

import { ReactComponent as OrderSiteIcon } from "../../common/icon/RocketIcon.svg";

const OrderSite = () => {
  const [opened, setOpened] = useState(false);
  return (
    <OrderSiteWrapper id="cooperation">
      <Modal opened={opened} onRequestClose={() => setOpened(false)} />
      <OrderSiteConteiner>
        <OrderSiteHeader>
          <OrderSiteLabel>
            {`${"< "}`}
            <ReactRotatingText
              items={[
                "Нужен крутой сайт?",
                "Ищите разработчика?",
                "Нужна хорошая поддержка?",
              ]}
              pause={5000}
              emptyPause={1000}
              typingInterval={60}
              deletingInterval={5}
            />
            <span className="react-rotating-text-cursor" />
            {`${" / >"}`}
          </OrderSiteLabel>
        </OrderSiteHeader>
        <OrderSiteCustom>
          <OrderSiteText>
            Заполните форму точной информацией о Вашем заказе, далее я свяжусь с
            вами по указанным контактам в форме и мы детально обсудим
            техническое задание, сроки, условия оплаты и отвечу на все
            интересующие Вас вопросы.
          </OrderSiteText>
          <OrderSiteButton onClick={() => setOpened(!opened)}>
            <Link>
              <OrderSiteIcon />
              <Label>Заказать сайт</Label>
            </Link>
          </OrderSiteButton>
        </OrderSiteCustom>
      </OrderSiteConteiner>
    </OrderSiteWrapper>
  );
};

export default OrderSite;

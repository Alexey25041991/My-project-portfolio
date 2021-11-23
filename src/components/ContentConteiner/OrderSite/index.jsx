import React, { useState } from "react";

import Modal from "../../Modal";

import ReactRotatingText from "react-rotating-text";

import { OrderSiteLabel, OrderSiteCustom, OrderSiteText } from "./style.js";

import "./style.css";

import { ReactComponent as OrderSiteIcon } from "../../common/icon/RocketIcon.svg";

import PageWrapper from "../../common/PageWrapper";
import PageConteiner from "../../common/PageConteiner";
import HeaderTitle from "../../common/HeaderTitle";
import Button from "../../common/Button";

const OrderSite = () => {
  const [opened, setOpened] = useState(false);
  return (
    <PageWrapper dark id="cooperation">
      <Modal opened={opened} onRequestClose={() => setOpened(false)} />
      <PageConteiner>
        <HeaderTitle dark>
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
        </HeaderTitle>
        <OrderSiteCustom>
          <OrderSiteText>
            Заполните форму точной информацией о Вашем заказе, далее я свяжусь с
            вами по указанным контактам в форме и мы детально обсудим
            техническое задание, сроки, условия оплаты и отвечу на все
            интересующие Вас вопросы.
          </OrderSiteText>
          <Button
            title="Заказать сайт"
            toOrder
            handleClick={() => setOpened(!opened)}
          >
            <OrderSiteIcon />
          </Button>
        </OrderSiteCustom>
      </PageConteiner>
    </PageWrapper>
  );
};

export default OrderSite;

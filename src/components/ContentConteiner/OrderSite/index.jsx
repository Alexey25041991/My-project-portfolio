import React, { useState } from "react";
import { observer } from "mobx-react";

import { store } from "../../../store";

import Modal from "../../Modal";

import ReactRotatingText from "react-rotating-text";

import { OrderSiteLabel, OrderSiteCustom, OrderSiteText } from "./style.js";

import "./style.css";

import { ReactComponent as OrderSiteIcon } from "../../common/icon/RocketIcon.svg";

import PageWrapper from "../../common/PageWrapper";
import PageConteiner from "../../common/PageConteiner";
import HeaderTitle from "../../common/HeaderTitle";
import Button from "../../common/Button";

const OrderSite = observer(() => {
  const { order } = store.getToggleLang();
  const [opened, setOpened] = useState(false);

  return (
    <PageWrapper dark id="cooperation">
      <Modal opened={opened} onRequestClose={() => setOpened(false)} />
      <PageConteiner>
        <HeaderTitle dark>
          <OrderSiteLabel>
            {`${"< "}`}
            <ReactRotatingText
              items={order.orderItems}
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
          <OrderSiteText>{order.text}</OrderSiteText>
          <Button
            title={order.buttonText}
            toOrder
            handleClick={() => setOpened(!opened)}
          >
            <OrderSiteIcon />
          </Button>
        </OrderSiteCustom>
      </PageConteiner>
    </PageWrapper>
  );
});

export default OrderSite;

import React from 'react';

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
} from './style.js';

import { ReactComponent as OrderSiteIcon } from './icon/OrderSiteIcon.svg';

const OrderSite = () => (
  <OrderSiteWrapper>
    <OrderSiteConteiner>
      <OrderSiteHeader>
        <OrderSiteIcon />
        <OrderSiteLabel>Нужен крутой сайт ?</OrderSiteLabel>
      </OrderSiteHeader>
      <OrderSiteCustom>
        <OrderSiteText>
          Заполните форму точной информацией о Вашем заказе, далее я свяжусь с
          вами по указанным контактам в форме и мы детально обсудим техническое
          задание, сроки, условия оплаты и отвечу на все интересующие Вас
          вопросы.
        </OrderSiteText>
        <OrderSiteButton>
          <Link href={`${'#'}`}>
            <OrderSiteIcon />
            <Label>Заказать сайт</Label>
          </Link>
        </OrderSiteButton>
      </OrderSiteCustom>
    </OrderSiteConteiner>
  </OrderSiteWrapper>
);

export default OrderSite;

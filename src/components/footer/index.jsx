import React, { useState } from 'react';

import LogoLook from '../logoLook';
import Modal from '../Modal';

import {
  FooterWrapper,
  FooterConteiner,
  FooterCustom,
  Link,
  Label,
  FooterValue,
  Ul,
  Li,
  LabelText,
  HeaderTopWrapper,
  HeaderLogCoderText,
  HeaderMenu,
  OrderSiteButton,
  LinkButton,
  LabeButtonl,
  FooterValue1,
  FooterHh,
} from './style.js';

import { ReactComponent as FooterСlockIcon } from './icon/FooterСlockIcon.svg';
import { ReactComponent as FooterTelephoneIcon } from './icon/FooterTelephoneIcon.svg';
import { ReactComponent as FooterMailIcon } from './icon/FooterMailIcon.svg';
import { ReactComponent as FooterSkypeIcon } from './icon/FooterSkypeIcon.svg';

import { ReactComponent as OrderSiteIcon } from './icon/OrderSiteIcon.svg';

const Footer = () => {
  const [opened, setOpened] = useState(false);

  return (
    <FooterWrapper id="contacts">
      <Modal opened={opened} onRequestClose={() => setOpened(false)} />
      <FooterConteiner>
        <FooterCustom>
          <HeaderTopWrapper>
            <LogoLook />
            <HeaderMenu>
              <OrderSiteButton onClick={() => setOpened(!opened)}>
                <LinkButton>
                  <OrderSiteIcon />
                  <LabeButtonl>Заказать сайт</LabeButtonl>
                </LinkButton>
              </OrderSiteButton>
            </HeaderMenu>
          </HeaderTopWrapper>
          <FooterValue>
            <Ul>
              <Li>
                <Link>
                  <FooterСlockIcon />
                  <Label>Ежедневно</Label>
                  <LabelText>с 9:00 до 21:00</LabelText>
                </Link>
              </Li>
              <Li>
                <Link>
                  <FooterTelephoneIcon />
                  <Label>Телефон</Label>
                  <LabelText>
                    +7 (999) 812-19-75 <br />
                    +7 (977) 270-09-30
                  </LabelText>
                </Link>
              </Li>
              <Li>
                <Link>
                  <FooterMailIcon />
                  <Label>E-mail</Label>
                  <LabelText>mazurenko-alexey@mail.ru</LabelText>
                </Link>
              </Li>
              <Li>
                <Link>
                  <FooterSkypeIcon />
                  <Label>Skype</Label>
                  <LabelText>aleks10_0</LabelText>
                </Link>
              </Li>
              <Li>
                <Link>
                  <FooterHh href={`${'#'}`}>hh</FooterHh>
                  <Label>HeadHunter</Label>
                  <LabelText>Мазуренко Алексей</LabelText>
                </Link>
              </Li>
            </Ul>
          </FooterValue>
          <FooterValue1>
            <HeaderLogCoderText>
              2017-2021 Фрилансер веб-разработчик IT-WEB-MASTER
            </HeaderLogCoderText>
          </FooterValue1>
        </FooterCustom>
      </FooterConteiner>
    </FooterWrapper>
  );
};

export default Footer;

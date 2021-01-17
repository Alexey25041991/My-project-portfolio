import React from 'react';

import {
  FooterWrapper,
  FooterConteiner,
  // FooterHeader,
  // FooterLabel,
  FooterCustom,
  Link,
  Label,
  FooterValue,
  Ul,
  Li,
  LabelText,
  HeaderTopWrapper,
  HeaderLog,
  HeaderLogSign,
  HeaderLogCoder,
  HeaderLogCoderLabel,
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

const Footer = () => (
  <FooterWrapper>
    <FooterConteiner>
      <FooterCustom>
        <HeaderTopWrapper>
          <HeaderLog>
            <HeaderLogSign> {`${'< >'}`} </HeaderLogSign>
            <HeaderLogCoder>
              <HeaderLogCoderLabel>CODER-OLDBOY</HeaderLogCoderLabel>
              <HeaderLogCoderText>
                Портфолио веб-разработчика
              </HeaderLogCoderText>
            </HeaderLogCoder>
          </HeaderLog>
          <HeaderMenu>
            <OrderSiteButton>
              <LinkButton href={`${'#'}`}>
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
                  +38 (066) 912-69-37 <br /> (Viber, Whatsapp)
                </LabelText>
              </Link>
            </Li>
            <Li>
              <Link>
                <FooterMailIcon />
                <Label>E-mail</Label>
                <LabelText>coderoldboy@gmail.com</LabelText>
              </Link>
            </Li>
            <Li>
              <Link>
                <FooterSkypeIcon />
                <Label>Skype</Label>
                <LabelText>biomax1988</LabelText>
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
            2010-2021 Фрилансер веб-разработчик CODER-OLDBOY
          </HeaderLogCoderText>
        </FooterValue1>
      </FooterCustom>
    </FooterConteiner>
  </FooterWrapper>
);

export default Footer;

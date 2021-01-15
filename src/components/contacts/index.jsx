import React from 'react';

import {
  СontactsWrapper,
  СontactsConteiner,
  // СontactsHeader,
  // СontactsLabel,
  СontactsCustom,
  Link,
  Label,
  СontactsValue,
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
  СontactsValue1,
  СontactsHh,
} from './style.js';

import { ReactComponent as СontactsСlockIcon } from './icon/СontactsСlockIcon.svg';
import { ReactComponent as СontactsTelephoneIcon } from './icon/СontactsTelephoneIcon.svg';
import { ReactComponent as СontactsMailIcon } from './icon/СontactsMailIcon.svg';
import { ReactComponent as СontactsSkypeIcon } from './icon/СontactsSkypeIcon.svg';

import { ReactComponent as OrderSiteIcon } from './icon/OrderSiteIcon.svg';

const Сontacts = () => (
  <СontactsWrapper>
    <СontactsConteiner>
      <СontactsCustom>
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
        <СontactsValue>
          <Ul>
            <Li>
              <Link>
                <СontactsСlockIcon />
                <Label>Ежедневно</Label>
                <LabelText>с 9:00 до 21:00</LabelText>
              </Link>
            </Li>
            <Li>
              <Link>
                <СontactsTelephoneIcon />
                <Label>Телефон</Label>
                <LabelText>
                  +38 (066) 912-69-37 <br /> (Viber, Whatsapp)
                </LabelText>
              </Link>
            </Li>
            <Li>
              <Link>
                <СontactsMailIcon />
                <Label>E-mail</Label>
                <LabelText>coderoldboy@gmail.com</LabelText>
              </Link>
            </Li>
            <Li>
              <Link>
                <СontactsSkypeIcon />
                <Label>Skype</Label>
                <LabelText>biomax1988</LabelText>
              </Link>
            </Li>
            <Li>
              <Link>
                <СontactsHh href={`${'#'}`}>hh</СontactsHh>
                <Label>HeadHunter</Label>
                <LabelText>Мазуренко Алексей</LabelText>
              </Link>
            </Li>
          </Ul>
        </СontactsValue>
        <СontactsValue1>
          <HeaderLogCoderText>
            2010-2021 Фрилансер веб-разработчик CODER-OLDBOY
          </HeaderLogCoderText>
        </СontactsValue1>
      </СontactsCustom>
    </СontactsConteiner>
  </СontactsWrapper>
);

export default Сontacts;

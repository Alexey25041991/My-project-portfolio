import React from 'react';

import {
  СontactsWrapper,
  СontactsConteiner,
  СontactsHeader,
  СontactsLabel,
  СontactsCustom,
  Link,
  Label,
  СontactsValue,
  Ul,
  Li,
  LabelText,
} from './style.js';

import { ReactComponent as СontactsСlockIcon } from './icon/СontactsСlockIcon.svg';
import { ReactComponent as СontactsTelephoneIcon } from './icon/СontactsTelephoneIcon.svg';
import { ReactComponent as СontactsMailIcon } from './icon/СontactsMailIcon.svg';
import { ReactComponent as СontactsSkypeIcon } from './icon/СontactsSkypeIcon.svg';

const Сontacts = () => (
  <СontactsWrapper>
    <СontactsConteiner>
      <СontactsHeader>
        <СontactsLabel>Остались вопросы ?</СontactsLabel>
      </СontactsHeader>
      <СontactsCustom>
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
          </Ul>
        </СontactsValue>
      </СontactsCustom>
    </СontactsConteiner>
  </СontactsWrapper>
);

export default Сontacts;

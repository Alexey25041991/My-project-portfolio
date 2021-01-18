import React from 'react';

import {
  HeaderSectionWrapper,
  HeaderSectionFon,
  HeaderSectionGetsite,
  HeaderSectionContacts,
  HeaderSectionConteiner,
  Link,
  Label,
  HeaderSectionLabel,
  Phones,
  PhonesConteiner,
  PhonesNumber,
  PhonesText,
  Emails,
  ContactsText,
  Skype,
  IconComp,
  IconMap,
  IconWindow,
  IconBook,
  IconPicture,
  IconDay,
  IconSun,
} from './style';

import Clock from './Clock';

import { ReactComponent as RocketGetsiteIcon } from './icon/RocketGetsiteIcon.svg';
import { ReactComponent as PhonesIcon } from './icon/PhonesIcon.svg';
import { ReactComponent as EmailsIcon } from './icon/EmailsIcon.svg';
import { ReactComponent as SkypeIcon } from './icon/SkypeIcon.svg';

const HeaderSection = () => (
  <HeaderSectionWrapper>
    <HeaderSectionFon>
      <IconComp />
      <IconMap />
      <Clock />
      <IconDay>
        <IconWindow />
        <IconSun />
      </IconDay>
      <IconBook />
      <IconPicture />
    </HeaderSectionFon>

    <HeaderSectionGetsite>
      <HeaderSectionConteiner>
        <Link href="#">
          <RocketGetsiteIcon />
          <Label>Заказ услуг</Label>
        </Link>
        <HeaderSectionLabel>
          Заполните форму заказа, <br />и я свяжусь с Вами
        </HeaderSectionLabel>
      </HeaderSectionConteiner>
    </HeaderSectionGetsite>

    <HeaderSectionContacts>
      <HeaderSectionConteiner>
        <Phones>
          <PhonesIcon />
          <PhonesConteiner>
            <PhonesNumber>+8 (999) 812-19-75</PhonesNumber>
            <PhonesNumber>+8 (977) 270-09-30</PhonesNumber>
            <PhonesText>Viber, Whatsapp</PhonesText>
          </PhonesConteiner>
        </Phones>
        <HeaderSectionLabel>
          Звоните в удобное для Вас время!
        </HeaderSectionLabel>
        <Emails>
          <EmailsIcon />
          <ContactsText>mazurenko-alexey@mail.ru</ContactsText>
        </Emails>
        <Skype>
          <SkypeIcon />
          <ContactsText>aleks10_0</ContactsText>
        </Skype>
      </HeaderSectionConteiner>
    </HeaderSectionContacts>
  </HeaderSectionWrapper>
);

export default HeaderSection;

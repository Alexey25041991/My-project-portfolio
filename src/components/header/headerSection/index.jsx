import React, { useState } from "react";

import {
  HeaderSectionWrapper,
  HeaderContactWrapper,
  HeaderSectionFon,
  HeaderSectionGetsite,
  HeaderSectionContacts,
  HeaderSectionConteiner,
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
} from "./style";

import Modal from "../../Modal";
import Clock from "./Clock";

import { ReactComponent as RocketGetsiteIcon } from "../../common/icon/RocketIcon.svg";
import { ReactComponent as PhonesIcon } from "../../common/icon/PhonesIcon.svg";
import { ReactComponent as EmailsIcon } from "../../common/icon/EmailsIcon.svg";
import { ReactComponent as SkypeIcon } from "../../common/icon/SkypeHeaderIcon.svg";
import Button from "../../common/Button";

const HeaderSection = () => {
  const [opened, setOpened] = useState(false);

  return (
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

      <HeaderContactWrapper>
        <HeaderSectionGetsite>
          <HeaderSectionConteiner>
            <Button
              title="Заказать сайт"
              toOrderHeader
              handleClick={() => setOpened(!opened)}
            >
              <RocketGetsiteIcon />
            </Button>
            <Modal opened={opened} onRequestClose={() => setOpened(false)} />
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
                <PhonesNumber>+7 (999) 812-19-75</PhonesNumber>
                <PhonesNumber>+7 (977) 270-09-30</PhonesNumber>
                <PhonesText>Telegram, Whatsapp</PhonesText>
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
      </HeaderContactWrapper>
    </HeaderSectionWrapper>
  );
};

export default HeaderSection;

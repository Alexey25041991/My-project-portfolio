import React, { useState } from "react";
import { observer } from "mobx-react";

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
  PhonesTextDivide,
  PhonesTextWrapper,
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
  SettingWrapper,
  SettingIconWrapper,
} from "./style";

import Modal from "../../Modal";
import Clock from "./Clock";

import { ReactComponent as RocketGetsiteIcon } from "../../common/icon/RocketIcon.svg";
import { ReactComponent as PhonesIcon } from "../../common/icon/PhonesIcon.svg";
import { ReactComponent as EmailsIcon } from "../../common/icon/EmailsIcon.svg";
import { ReactComponent as SkypeIcon } from "../../common/icon/SkypeHeaderIcon.svg";
import { ReactComponent as SettingIcon } from "../../common/icon/icon-header/setting.svg";

import Button from "../../common/Button";
import PopupSetting from "../../common/PopupSetting";
import Toast from "../../common/Toast";

import { getMobile } from "../../common/utils";

import { getwindowInnerWidth } from "../../common/utils/getwindowInnerWidth";
import { store } from "../../../store";

const HeaderSection = observer(() => {
  const [opened, setOpened] = useState(false);
  const [positionValue, setPositionValue] = useState("top right");

  const openToastValue = store.getOpenToast();

  const handleClickPopup = () => {
    const positionValueWidth = getwindowInnerWidth() > 959;
    setPositionValue(positionValueWidth ? "top right" : "right center");
  };

  const textToast = getMobile()
    ? "Спасибо за оценку!"
    : "Спасибо за оценку! Нажмите Ctrl+D для добавления в избранное!";

  return (
    <HeaderSectionWrapper>
      <Toast
        openToastValue={openToastValue}
        severity="info"
        text={textToast}
        timer={10000}
      />
      <HeaderSectionFon>
        <IconComp>
          <PopupSetting
            positionValue={positionValue}
            handleClickPopup={() => handleClickPopup()}
          >
            <SettingWrapper>
              <SettingIconWrapper>
                <SettingIcon fill="white" />
              </SettingIconWrapper>
            </SettingWrapper>
          </PopupSetting>
        </IconComp>
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
              Заполните форму заказа, и я свяжусь с Вами
            </HeaderSectionLabel>
          </HeaderSectionConteiner>
        </HeaderSectionGetsite>

        <HeaderSectionContacts>
          <HeaderSectionConteiner>
            <Phones>
              <PhonesIcon />
              <PhonesConteiner>
                <PhonesNumber href="tel:+79998121975">
                  +7 (999) 812-19-75
                </PhonesNumber>
                <PhonesNumber href="tel:+79772700930">
                  +7 (977) 270-09-30
                </PhonesNumber>
              </PhonesConteiner>
            </Phones>
            <PhonesTextWrapper>
              <PhonesText href="https://t.me/amazurenk">Telegram</PhonesText>
              <PhonesTextDivide>/</PhonesTextDivide>
              <PhonesText href="https://api.whatsapp.com/send?phone=79772700930">
                Whatsapp
              </PhonesText>
            </PhonesTextWrapper>
            <HeaderSectionLabel>
              Звоните в удобное для Вас время!
            </HeaderSectionLabel>
            <Emails>
              <EmailsIcon />
              <ContactsText href="mailto:mazurenko-alexey@mail.ru">
                mazurenko-alexey@mail.ru
              </ContactsText>
            </Emails>
            <Skype>
              <SkypeIcon />
              <ContactsText href="skype:aleks10_0?chat">aleks10_0</ContactsText>
            </Skype>
          </HeaderSectionConteiner>
        </HeaderSectionContacts>
      </HeaderContactWrapper>
    </HeaderSectionWrapper>
  );
});

export default HeaderSection;

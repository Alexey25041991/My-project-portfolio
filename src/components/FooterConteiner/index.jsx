import React, { useState } from "react";
import { observer } from "mobx-react";

import { store } from "../../store";

import LogoLook from "../LogoLook";
import Modal from "../Modal";
import SocialIcons from "../SocialIcons";

import {
  FooterCustom,
  Link,
  Label,
  FooterValue,
  Ul,
  Li,
  Text,
  LabelText,
  LabelTextValue,
  HeaderTopWrapper,
  HeaderLogCoderText,
  FooterValueIt,
  LinkWrapper,
  FooterHh,
  ButtonWrapper,
  LogoLookWrapper,
} from "./style.js";

import { ReactComponent as FooterСlockIcon } from "../common/icon/TermIcon.svg";
import { ReactComponent as FooterTelephoneIcon } from "../common/icon/TelephoneIcon.svg";
import { ReactComponent as FooterMailIcon } from "../common/icon/MailIcon.svg";
import { ReactComponent as FooterSkypeIcon } from "../common/icon/SkypeIcon.svg";

import { ReactComponent as OrderSiteIcon } from "../common/icon/RocketIcon.svg";

import PageWrapper from "../common/PageWrapper";
import PageConteiner from "../common/PageConteiner";
import Button from "../common/Button";

// import { getScrollWidth } from "../common/utils/getScrollWidth";

const FooterConteiner = observer(() => {
  const [opened, setOpened] = useState(false);
  // const [scrollWidthValue, setScrollWidthValue] = useState(0);

  const { footer } = store.getToggleLang();

  const handleClickOpened = () => {
    setOpened(!opened);
    // setScrollWidthValue(getScrollWidth());
  };

  return (
    <PageWrapper dark footer id="contacts">
      <Modal
        opened={opened}
        onRequestClose={() => setOpened(false)}
        // scrollWidthValue={scrollWidthValue}
      />
      <PageConteiner footer>
        <FooterCustom>
          <HeaderTopWrapper>
            <LogoLookWrapper>
              <LogoLook />
            </LogoLookWrapper>
            <ButtonWrapper>
              <Button
                title={footer.buttonText}
                toOrder
                handleClick={() => handleClickOpened()}
              >
                <OrderSiteIcon />
              </Button>
            </ButtonWrapper>
          </HeaderTopWrapper>
          <FooterValue>
            <Ul>
              <Li>
                <Link>
                  <FooterСlockIcon width="40px" height="40px" />
                  <Label>{footer.clock}</Label>
                  <Text>9:00 - 21:00</Text>
                </Link>
              </Li>
              <Li>
                <Link>
                  <FooterTelephoneIcon />
                  <Label>{footer.telephone}</Label>
                  <LabelText href="tel:+79998121975">
                    +7 (999) 812-19-75
                  </LabelText>
                  <LabelText href="tel:+79772700930">
                    +7 (977) 270-09-30
                  </LabelText>
                </Link>
              </Li>
              <Li>
                <LinkWrapper href="mailto:mazurenko-alexey@mail.ru">
                  <FooterMailIcon />
                  <Label>E-mail</Label>
                  <LabelTextValue>mazurenko-alexey@mail.ru</LabelTextValue>
                </LinkWrapper>
              </Li>
              <Li>
                <LinkWrapper href="skype:aleks10_0?chat">
                  <FooterSkypeIcon />
                  <Label>Skype</Label>
                  <LabelTextValue>aleks10_0</LabelTextValue>
                </LinkWrapper>
              </Li>
              <Li>
                <LinkWrapper
                  href="https://odintsovo.hh.ru/resume/4aec3036ff03a8254c0039ed1f33756c4c7653"
                  target="_blank"
                >
                  <FooterHh>hh</FooterHh>
                  <Label>HeadHunter</Label>
                  <LabelTextValue>{footer.headHunter}</LabelTextValue>
                </LinkWrapper>
              </Li>
            </Ul>
          </FooterValue>
          <FooterValueIt>
            <HeaderLogCoderText>{footer.text}</HeaderLogCoderText>
            <SocialIcons />
          </FooterValueIt>
        </FooterCustom>
      </PageConteiner>
    </PageWrapper>
  );
});

export default FooterConteiner;

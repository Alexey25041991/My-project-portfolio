import React, { useState } from "react";

import LogoLook from "../LogoLook";
import Modal from "../Modal";

import {
  FooterCustom,
  Link,
  Label,
  FooterValue,
  Ul,
  Li,
  LabelText,
  HeaderTopWrapper,
  HeaderLogCoderText,
  FooterValueIt,
  FooterHh,
  ButtonWrapper,
} from "./style.js";

import { ReactComponent as FooterСlockIcon } from "../common/icon/TermIcon.svg";
import { ReactComponent as FooterTelephoneIcon } from "../common/icon/TelephoneIcon.svg";
import { ReactComponent as FooterMailIcon } from "../common/icon/MailIcon.svg";
import { ReactComponent as FooterSkypeIcon } from "../common/icon/SkypeIcon.svg";

import { ReactComponent as OrderSiteIcon } from "../common/icon/RocketIcon.svg";

import PageWrapper from "../common/PageWrapper";
import PageConteiner from "../common/PageConteiner";
import Button from "../common/Button";

const Footer = () => {
  const [opened, setOpened] = useState(false);

  return (
    <PageWrapper dark footer id="contacts">
      <Modal opened={opened} onRequestClose={() => setOpened(false)} />
      <PageConteiner footer>
        <FooterCustom>
          <HeaderTopWrapper>
            <LogoLook />
            <ButtonWrapper>
              <Button
                title="Заказать сайт"
                toOrder
                handleClick={() => setOpened(!opened)}
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
                  <FooterHh href={`${"#"}`}>hh</FooterHh>
                  <Label>HeadHunter</Label>
                  <LabelText>Мазуренко Алексей</LabelText>
                </Link>
              </Li>
            </Ul>
          </FooterValue>
          <FooterValueIt>
            <HeaderLogCoderText>
              2017-2021 Фрилансер веб-разработчик IT-WEB-MASTER
            </HeaderLogCoderText>
          </FooterValueIt>
        </FooterCustom>
      </PageConteiner>
    </PageWrapper>
  );
};

export default Footer;

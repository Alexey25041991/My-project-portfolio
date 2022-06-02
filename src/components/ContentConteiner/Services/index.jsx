import React from "react";
import { observer } from "mobx-react";

import { store } from "../../../store";

import { ServicesCustom, ServicesText, ServicesSection } from "./style.js";

import { ReactComponent as ServicesDarkIcon } from "../../common/icon/ServicesDarkIcon.svg";
import { ReactComponent as ServicesIcon } from "../../common/icon/ServicesIcon.svg";

import PageWrapper from "../../common/PageWrapper";
import PageConteiner from "../../common/PageConteiner";
import HeaderTitle from "../../common/HeaderTitle";

const Services = observer(() => {
  const { name } = store.getToggleTheme();
  const Icon = name === "light" ? ServicesDarkIcon : ServicesIcon;

  return (
    <PageWrapper id="services">
      <PageConteiner>
        <HeaderTitle title="Услуги и сотрудничество">
          <Icon />
        </HeaderTitle>
        <ServicesCustom>
          <ServicesSection>
            <ServicesText>
              Предлагаю профессиональные услуги высокого качества в создании
              сайтов, веб разработке, оптимизации, дизайне, создании фирменного
              стиля и др. услуг, а также консалтинг в сфере веб-технологий на
              взаимовыгодных условиях.
            </ServicesText>
            <ServicesText>
              На сайте цен нет — каждый сайт или логотип индивидуальный и цены
              могут кардинально отличатся. С радостью отвечу на все Ваши
              вопросы, постараюсь сделать прикидки по ценам на создание сайта и
              другие работы.
            </ServicesText>
            <ServicesText>
              Я открыт для любых предложений на предмет сотрудничества по
              разработке.
            </ServicesText>
            <ServicesText>
              Вы получите именно тот сайт который хотели!
            </ServicesText>
          </ServicesSection>
        </ServicesCustom>
      </PageConteiner>
    </PageWrapper>
  );
});

export default Services;

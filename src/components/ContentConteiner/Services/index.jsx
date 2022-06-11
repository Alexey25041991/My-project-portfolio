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
  const { cooperation } = store.getToggleLang();
  const { name } = store.getToggleTheme();
  const Icon = name === "light" ? ServicesDarkIcon : ServicesIcon;

  return (
    <PageWrapper id="services">
      <PageConteiner>
        <HeaderTitle title={cooperation.title}>
          <Icon />
        </HeaderTitle>
        <ServicesCustom>
          <ServicesSection>
            <ServicesText>{cooperation.text1}</ServicesText>
            <ServicesText>{cooperation.text2}</ServicesText>
            <ServicesText>{cooperation.text3}</ServicesText>
            <ServicesText>{cooperation.text4}</ServicesText>
          </ServicesSection>
        </ServicesCustom>
      </PageConteiner>
    </PageWrapper>
  );
});

export default Services;

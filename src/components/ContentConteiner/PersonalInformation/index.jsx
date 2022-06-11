import React from "react";
import { observer } from "mobx-react";

import { store } from "../../../store";

import {
  PersonalHeaderCustom,
  PersonalCustom,
  PersonalText,
  PersonalSection,
} from "./style";

import PageWrapper from "../../common/PageWrapper";
import PageConteiner from "../../common/PageConteiner";
import HeaderTitle from "../../common/HeaderTitle";

import { ReactComponent as PersonIcon } from "../../common/icon/PersonIcon.svg";

const PersonalInformation = observer(() => {
  const { name } = store.getToggleTheme();
  const { personal } = store.getToggleLang();
  return (
    <PageWrapper id="person">
      <PageConteiner>
        <HeaderTitle title={personal.title}>
          <PersonIcon
            width={28}
            height={28}
            fill={name === "light" ? "#000" : "#fff"}
          />
        </HeaderTitle>
        <PersonalCustom>
          <PersonalHeaderCustom>{personal.titleText}</PersonalHeaderCustom>
          <PersonalText>{personal.text1}</PersonalText>
          <PersonalSection>
            <PersonalText>{personal.text2}</PersonalText>
            <PersonalText>{personal.text3}</PersonalText>
          </PersonalSection>
        </PersonalCustom>
      </PageConteiner>
    </PageWrapper>
  );
});

export default PersonalInformation;

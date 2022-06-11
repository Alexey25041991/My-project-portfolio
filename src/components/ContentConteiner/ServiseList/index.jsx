import React from "react";
import { observer } from "mobx-react";

import { store } from "../../../store";

import {
  ServiseListCustom,
  ServiseListOptions,
  Ul,
  LiFir,
  Li,
  LiLas,
} from "./style.js";

import { ReactComponent as ServiseListIcon } from "../../common/icon/ServiseListIcon.svg";

import PageWrapper from "../../common/PageWrapper";
import PageConteiner from "../../common/PageConteiner";
import HeaderTitle from "../../common/HeaderTitle";

const ServiseList = observer(() => {
  const { servise } = store.getToggleLang();

  return (
    <PageWrapper dark>
      <PageConteiner>
        <HeaderTitle dark title={servise.title}>
          <ServiseListIcon />
        </HeaderTitle>
        <ServiseListCustom>
          <ServiseListOptions>
            <Ul>
              <LiFir>{servise.text1}</LiFir>
              <Li>{servise.text2}</Li>
              <Li>{servise.text3}</Li>
              <Li>{servise.text4}</Li>
              <LiLas>{servise.text5}</LiLas>
            </Ul>
          </ServiseListOptions>
        </ServiseListCustom>
      </PageConteiner>
    </PageWrapper>
  );
});

export default ServiseList;

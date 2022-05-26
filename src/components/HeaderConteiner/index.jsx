import React from "react";

import { HeaderWrapper } from "./style";

import { observer } from "mobx-react";
import { store } from "../../store";

import NavHeaderTop from "./NavHeaderTop";
import HeaderSection from "./HeaderSection";

const HeaderConteiner = observer(() => {
  const { propsHeaderTopMenu } = store.getToggleLang();
  return (
    <HeaderWrapper>
      <NavHeaderTop propsList={propsHeaderTopMenu} />
      <HeaderSection />
    </HeaderWrapper>
  );
});

export default HeaderConteiner;

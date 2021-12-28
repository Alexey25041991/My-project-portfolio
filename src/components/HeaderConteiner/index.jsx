import React from "react";

import { HeaderWrapper } from "./style";

import NavHeaderTop from "./NavHeaderTop";
import HeaderSection from "./HeaderSection";

import { propsHeaderTopMenu } from "../common/constants";

const HeaderConteiner = () => (
  <HeaderWrapper>
    <NavHeaderTop propsList={propsHeaderTopMenu} />
    <HeaderSection />
  </HeaderWrapper>
);

export default HeaderConteiner;

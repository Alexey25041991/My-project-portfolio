import React from "react";

import LogoLook from "../../logoLook";

import { HeaderTopWrapper, HeaderMenu, Ul, Li, Link, Label } from "./style";

import { propsHeaderMenu } from "./constants";

const HeaderMenuLi = (propsHeaderMenu) =>
  propsHeaderMenu.map((item) => (
    <Li key={item.id}>
      <Link href={`${"/#" + item.value}`}>
        {item.icon}
        <Label style={{ pointerEvents: "none" }}>{item.label}</Label>
      </Link>
    </Li>
  ));

const HeaderTop = () => (
  <HeaderTopWrapper>
    <LogoLook />
    <HeaderMenu>
      <Ul>{HeaderMenuLi(propsHeaderMenu)}</Ul>
    </HeaderMenu>
  </HeaderTopWrapper>
);

export default HeaderTop;

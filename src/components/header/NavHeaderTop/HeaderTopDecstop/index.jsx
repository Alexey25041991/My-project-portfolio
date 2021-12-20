import React from "react";

import LogoLook from "../../../LogoLook";

import { HeaderTopWrapper, HeaderMenu, Ul, Li, Link, Label } from "./style";

const HeaderMenuLi = (propsList) =>
  propsList.map((item) => (
    <Li key={item.id}>
      <Link href={`${"/#" + item.value}`}>
        {item.icon}
        <Label style={{ pointerEvents: "none" }}>{item.label}</Label>
      </Link>
    </Li>
  ));

const HeaderTopDecstop = ({ propsList }) => {
  return (
    <>
      <HeaderTopWrapper>
        <LogoLook />
        <HeaderMenu>
          <Ul>{HeaderMenuLi(propsList)}</Ul>
        </HeaderMenu>
      </HeaderTopWrapper>
    </>
  );
};

export default HeaderTopDecstop;

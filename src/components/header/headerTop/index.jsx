import React, { useState } from "react";

import LogoLook from "../../LogoLook";
import MenuBurger from "./MenuBurger";

import {
  Overlay,
  HeaderTopWrapper,
  HeaderMenu,
  Ul,
  Li,
  Link,
  Label,
  MenuWrapper,
} from "./style";

import { propsHeaderTopMenu } from "../../common/constants";

const HeaderMenuLi = (propsHeaderTopMenu) =>
  propsHeaderTopMenu.map((item) => (
    <Li key={item.id}>
      <Link href={`${"/#" + item.value}`}>
        {item.icon}
        <Label style={{ pointerEvents: "none" }}>{item.label}</Label>
      </Link>
    </Li>
  ));

const HeaderTop = () => {
  const [opened, setOpened] = useState(false);

  const handleOverlayClick = (e) => {
    if (
      opened &&
      e.target.closest("[data-close-border]") &&
      !e.target.closest("[data-close-modal]")
    ) {
      setOpened(false);
    }
  };

  return (
    <>
      <Overlay data-close-border opened={opened} onClick={handleOverlayClick} />
      <HeaderTopWrapper data-close-modal>
        <MenuWrapper>
          <MenuBurger opened={opened} handleClick={() => setOpened(!opened)} />
          <LogoLook />
        </MenuWrapper>
        <HeaderMenu opened={opened}>
          <Ul>{HeaderMenuLi(propsHeaderTopMenu)}</Ul>
        </HeaderMenu>
      </HeaderTopWrapper>
    </>
  );
};

export default HeaderTop;

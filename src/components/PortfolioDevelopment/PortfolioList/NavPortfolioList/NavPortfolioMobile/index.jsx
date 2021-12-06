import React, { useState } from "react";

import MenuBurger from "./MenuBurger";

import {
  Overlay,
  HeaderTopWrapper,
  HeaderMenu,
  HeaderLabel,
  Ul,
  Li,
  Link,
  Label,
  MenuWrapper,
} from "./style";

const HeaderMenuLi = (propsButtonList, setPortfoliosValue) =>
  propsButtonList.map((item) => (
    <Li key={item.id} onClick={() => setPortfoliosValue(item?.value)}>
      <Link>
        <Label style={{ pointerEvents: "none" }}>
          {item.portfolioButtonText}
        </Label>
      </Link>
    </Li>
  ));

const NavPortfolioMobile = ({ propsButtonList, setPortfoliosValue }) => {
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
          <HeaderLabel>Фильтр проектов</HeaderLabel>
          <MenuBurger opened={opened} handleClick={() => setOpened(!opened)} />
        </MenuWrapper>
        <HeaderMenu opened={opened}>
          <Ul>{HeaderMenuLi(propsButtonList, setPortfoliosValue)}</Ul>
        </HeaderMenu>
      </HeaderTopWrapper>
    </>
  );
};

export default NavPortfolioMobile;

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

const HeaderMenuLi = (propsButtonList, setPortfoliosValue, setOpened) =>
  propsButtonList.map((item) => {
    const handleClick = (itemValue) => {
      setPortfoliosValue(itemValue);
      setOpened(false);
    };
    return (
      <>
        {item.id !== "JavaScript" && (
          <Li key={item.id} onClick={() => handleClick(item?.value)}>
            <Link>
              <Label style={{ pointerEvents: "none" }}>
                {item.portfolioButtonText}
              </Label>
            </Link>
          </Li>
        )}
        {item.id === "JavaScript" &&
          HeaderMenuLi(item.value, setPortfoliosValue, setOpened)}
      </>
    );
  });

const NavPortfolioMobile = ({ propsButtonList, setPortfoliosValue }) => {
  const [opened, setOpened] = useState(false);

  const handleOverlayClick = (e) => {
    if (
      opened &&
      e.target.closest("[data-close-border-portfolio]") &&
      !e.target.closest("[data-close-modal-portfolio]")
    ) {
      setOpened(false);
    }
  };

  return (
    <>
      <Overlay
        data-close-border-portfolio
        opened={opened}
        onClick={handleOverlayClick}
      />
      <HeaderTopWrapper data-close-modal-portfolio>
        <MenuWrapper>
          <HeaderLabel>Фильтр заметок</HeaderLabel>
          <MenuBurger opened={opened} handleClick={() => setOpened(!opened)} />
        </MenuWrapper>
        <HeaderMenu opened={opened}>
          <Ul>
            {HeaderMenuLi(propsButtonList, setPortfoliosValue, setOpened)}
          </Ul>
        </HeaderMenu>
      </HeaderTopWrapper>
    </>
  );
};

export default NavPortfolioMobile;

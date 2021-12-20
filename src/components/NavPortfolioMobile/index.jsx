import React, { useState } from "react";

import MenuBurger from "../MenuBurger";

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

const NavMenuLi = (propsList, setPortfoliosValue, setOpened, header) =>
  propsList.map((item) => {
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
          NavMenuLi(item.value, setPortfoliosValue, setOpened)}
      </>
    );
  });

const HeaderMenuLi = (propsList, setOpened, header) =>
  propsList.map((item) => (
    <Li header={header} key={item.id} onClick={() => setOpened(false)}>
      <Link href={`${"/#" + item.value}`}>
        {item.icon}
        <Label style={{ pointerEvents: "none" }}>{item.label}</Label>
      </Link>
    </Li>
  ));

const NavPortfolioMobile = ({
  children,
  propsList,
  setPortfoliosValue,
  header,
}) => {
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

  const MenuLi = header
    ? HeaderMenuLi(propsList, setOpened, header)
    : NavMenuLi(propsList, setPortfoliosValue, setOpened);

  return (
    <>
      <Overlay data-close-border opened={opened} onClick={handleOverlayClick} />
      <HeaderTopWrapper data-close-modal header={header}>
        <MenuWrapper header={header}>
          {children}
          <MenuBurger opened={opened} handleClick={() => setOpened(!opened)} />
        </MenuWrapper>
        <HeaderMenu opened={opened}>
          <Ul>{MenuLi}</Ul>
        </HeaderMenu>
      </HeaderTopWrapper>
    </>
  );
};

NavPortfolioMobile.defaultProps = {
  setPortfoliosValue: () => {},
  header: false,
};

export default NavPortfolioMobile;

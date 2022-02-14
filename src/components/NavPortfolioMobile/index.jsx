import React, { Fragment, useEffect, useState } from "react";
import { Popup } from "semantic-ui-react";

import MenuBurger from "../MenuBurger";
import ButtonLink from "../common/ButtonLink";
import ThemeDarkLight from "../common/ThemeDarkLight";

import {
  Overlay,
  HeaderTopWrapper,
  HeaderMenu,
  Ul,
  Li,
  Link,
  Button,
  Label,
  MenuWrapper,
  SettingWrapper,
  ContainerWrapper,
  ProfileWrapper,
} from "./style";
import "./index.css";

import { ReactComponent as SettingIcon } from "../common/icon/icon-header/setting.svg";
import { ReactComponent as ProfileIcon } from "../common/icon/icon-header/profile.svg";

const NavMenuLi = (propsList, setPortfoliosValue, setOpened, navMenuLink) =>
  propsList.map((item) => {
    const handleClick = (itemValue) => {
      setPortfoliosValue(itemValue);
      setOpened(false);
    };
    return (
      <Fragment key={item.id}>
        {item.id !== "JS" && (
          <Li key={item.id} onClick={() => handleClick(item?.value)}>
            <ButtonLink navMenuLink={navMenuLink}>
              <Button>
                <Label style={{ pointerEvents: "none" }}>
                  {item.portfolioButtonText}
                </Label>
              </Button>
            </ButtonLink>
          </Li>
        )}
        {item.id === "JS" &&
          NavMenuLi(item.value, setPortfoliosValue, setOpened, navMenuLink)}
      </Fragment>
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
  navMenuLink,
}) => {
  const [opened, setOpened] = useState(false);

  const onBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setOpened(false);
    }
  };

  useEffect(() => {
    opened
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [opened]);

  const MenuLi = header
    ? HeaderMenuLi(propsList, setOpened, header)
    : NavMenuLi(propsList, setPortfoliosValue, setOpened, navMenuLink);

  return (
    <>
      <Overlay data-close-border opened={opened} />
      <HeaderTopWrapper
        data-close-modal
        header={header}
        onBlur={onBlur}
        tabIndex={1}
      >
        <MenuWrapper header={header}>
          {children}
          {header && (
            <ContainerWrapper>
              <MenuBurger
                opened={opened}
                handleClick={() => setOpened(!opened)}
              />
              <Popup
                content={
                  <>
                    <ThemeDarkLight
                      opened={opened}
                      handleClick={() => setOpened(!opened)}
                    />
                  </>
                }
                className="popupSetting"
                on="click"
                position="bottom center"
                trigger={
                  <ContainerWrapper>
                    <ProfileWrapper>
                      <ProfileIcon fill="white" />
                    </ProfileWrapper>
                    <SettingWrapper>
                      <SettingIcon fill="white" />
                    </SettingWrapper>
                  </ContainerWrapper>
                }
              />
            </ContainerWrapper>
          )}
          {!header && (
            <MenuBurger
              opened={opened}
              handleClick={() => setOpened(!opened)}
            />
          )}
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
  navMenuLink: "",
};

export default NavPortfolioMobile;

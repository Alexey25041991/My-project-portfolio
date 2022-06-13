import React, { Fragment, useEffect, useState } from "react";
import { observer } from "mobx-react";

import { store } from "../../store";

import { Link as LinkHref } from "react-router-dom";

import MenuBurger from "../MenuBurger";
import ButtonLink from "../common/ButtonLink";
import PopupSetting from "../common/PopupSetting";

import {
  Overlay,
  HeaderTopWrapper,
  HeaderMenu,
  Ul,
  Li,
  Link,
  LinkDiv,
  Button,
  Label,
  MenuWrapper,
  SettingWrapper,
  ContainerWrapper,
  ProfileWrapper,
} from "./style";

import { ReactComponent as SettingIcon } from "../common/icon/icon-header/setting.svg";
import { ReactComponent as ProfileIcon } from "../common/icon/icon-header/profile.svg";

const NavMenuLi = (
  propsList,
  setPortfoliosValue,
  setOpened,
  navMenuLink,
  all
) =>
  propsList.map((item) => {
    const portfolioButtonText =
      item.value === "All" ? all : item.portfolioButtonText;
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
                  {portfolioButtonText}
                </Label>
              </Button>
            </ButtonLink>
          </Li>
        )}
        {item.id === "JS" &&
          NavMenuLi(
            item.value,
            setPortfoliosValue,
            setOpened,
            navMenuLink,
            all
          )}
      </Fragment>
    );
  });

const HeaderMenuLi = (propsList, setOpened, header, routeLink) => {
  const propsListValue = propsList.slice(1);
  const routeLinkBlog = routeLink.startsWith("blog");
  const routeLinkPortfolio = routeLink.startsWith("portfolio");
  const arrPropsList =
    routeLinkBlog || routeLinkPortfolio
      ? propsListValue.slice(-3).filter((i) => !routeLink.startsWith(i.href))
      : propsListValue;

  const scrollToBottom = (id) => {
    const element = document?.getElementById(id);
    window.scrollTo(0, document.body?.scrollHeight - element?.scrollHeight);
  };

  return arrPropsList.map((item) => (
    <Li header={header} key={item.id} onClick={() => setOpened(false)}>
      {!item.href && item.value !== "contacts" && (
        <Link href={`${"/#" + item.value}`}>
          {item.icon}
          <Label style={{ pointerEvents: "none" }}>{item.label}</Label>
        </Link>
      )}
      {item.href && (
        <LinkHref to={`${"/" + item.href}`}>
          <LinkDiv>
            {item.icon}
            <Label style={{ pointerEvents: "none" }}>{item.label}</Label>
          </LinkDiv>
        </LinkHref>
      )}
      {item.value === "contacts" && (
        <LinkDiv onClick={() => scrollToBottom(item.value)}>
          {item.icon}
          <Label style={{ pointerEvents: "none" }}>{item.label}</Label>
        </LinkDiv>
      )}
    </Li>
  ));
};

const NavPortfolioMobile = observer(
  ({ children, propsList, setPortfoliosValue, header, navMenuLink }) => {
    const [opened, setOpened] = useState(false);

    const routeLink = store.getRouteLink();
    const { blog } = store.getToggleLang();

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
      ? HeaderMenuLi(propsList, setOpened, header, routeLink)
      : NavMenuLi(
          propsList,
          setPortfoliosValue,
          setOpened,
          navMenuLink,
          blog.all
        );

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
                <PopupSetting positionValue="bottom center">
                  <ContainerWrapper>
                    <ProfileWrapper>
                      <ProfileIcon fill="white" />
                    </ProfileWrapper>
                    <SettingWrapper>
                      <SettingIcon fill="white" />
                    </SettingWrapper>
                  </ContainerWrapper>
                </PopupSetting>
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
  }
);

NavPortfolioMobile.defaultProps = {
  setPortfoliosValue: () => {},
  header: false,
  navMenuLink: "",
};

export default NavPortfolioMobile;

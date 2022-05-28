import React from "react";
import { observer } from "mobx-react";

import { store } from "../../../../store";

import { Link } from "react-router-dom";
import LogoLook from "../../../LogoLook";

import {
  HeaderTopWrapper,
  HeaderMenu,
  Ul,
  Li,
  LinkA,
  LinkDiv,
  Label,
} from "./style";

const HeaderMenuLi = (arrPropsList) => {
  const scrollToBottom = (id) => {
    const element = document?.getElementById(id);
    window.scrollTo(0, document.body?.scrollHeight - element?.scrollHeight);
  };

  return arrPropsList.map((item) => (
    <Li key={item.id}>
      {!item.href && item.value !== "contacts" && (
        <LinkA href={`${"/#" + item.value}`}>
          {item.icon}
          <Label style={{ pointerEvents: "none" }}>{item.label}</Label>
        </LinkA>
      )}
      {item.href && (
        <Link to={`${"/" + item.href}`}>
          <LinkDiv>
            {item.icon}
            <Label style={{ pointerEvents: "none" }}>{item.label}</Label>
          </LinkDiv>
        </Link>
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

const HeaderTopDecstop = observer(({ propsList }) => {
  const propsListDecstop = propsList.slice(1);
  const routeLink = store.getRouteLink();
  const routeLinkBlog = routeLink.startsWith("blog");
  const routeLinkPortfolio = routeLink.startsWith("portfolio");
  const arrPropsList =
    routeLinkBlog || routeLinkPortfolio
      ? propsListDecstop.slice(-3).filter((i) => !routeLink.startsWith(i.href))
      : propsListDecstop;
  return (
    <>
      <HeaderTopWrapper>
        <LogoLook />
        <HeaderMenu>
          <Ul>{HeaderMenuLi(arrPropsList)}</Ul>
        </HeaderMenu>
      </HeaderTopWrapper>
    </>
  );
});

export default HeaderTopDecstop;

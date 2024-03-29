import React from "react";
import { observer } from "mobx-react";

import { store } from "../../../../store";

import { Link } from "react-router-dom";
import LogoLook from "../../../LogoLook";

// import anime from "animejs/lib/anime.es.js";

import {
  HeaderTopWrapper,
  HeaderMenu,
  Ul,
  Li,
  LinkA,
  LinkDiv,
  Label,
} from "./style";

// const handleAnimation = (element) => {
//   anime({
//     targets: document.body,
//     translateY: [element?.offsetTop - element?.offsetHeight, 0],
//     easing: "easeInOutQuad",
//     duration: 3000,
//   });
// };

const HeaderMenuLi = (arrPropsList) => {
  const scrollToBottom = (id) => {
    const element = document?.getElementById(id);

    // handleAnimation(element);

    window.scrollTo(0, document.body?.scrollHeight - element?.scrollHeight);
  };

  // useLayoutEffect(() => {
  //   const handleScroll = () => {
  //     document.body.style.overflow = document.body?.scrollHeight;
  //   };

  //   document.addEventListener("scroll", handleScroll);
  //   return () => {
  //     document.removeEventListener("scroll", handleScroll);
  //   };
  // });

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

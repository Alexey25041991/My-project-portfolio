import React, { useLayoutEffect, useState } from "react";

import { observer } from "mobx-react";
import { store } from "../../../store";

import Tooltip from "@mui/material/Tooltip";

import { NavWrapper, Ul, Li, Link } from "./style";

const NavLi = (propsHeaderTopMenu) =>
  propsHeaderTopMenu.map((item) => (
    <Li key={item.id}>
      <Tooltip
        componentsProps={{
          tooltip: {
            sx: {
              color: "#fff",
              backgroundColor: "#ff8560b3",
              boxShadow: "0 0 18px #ff8560e0",
              fontSize: "1em",
            },
          },
          arrow: {
            sx: {
              color: "#ff8560b3",
              boxShadow: "0 0 18px #ff8560e0",
            },
          },
        }}
        arrow
        title={item.label}
        placement="right"
      >
        <Link href={`${"/#" + item.value}`}>{item.icon}</Link>
      </Tooltip>
    </Li>
  ));

const Nav = observer(() => {
  const [handleScrollTop, setHandleScrollTop] = useState(false);

  const { propsHeaderTopMenu } = store.getToggleLang();

  useLayoutEffect(() => {
    const handleScroll = () => {
      let scrolled = window.pageYOffset;
      const element = document?.getElementById("advantages");
      const elementTop = element.offsetTop;

      setHandleScrollTop(scrolled > elementTop);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    handleScrollTop && (
      <NavWrapper>
        <Ul>{NavLi(propsHeaderTopMenu)}</Ul>
      </NavWrapper>
    )
  );
});

export default Nav;

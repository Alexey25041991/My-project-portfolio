import React from "react";

import HeaderTopDecstop from "./HeaderTopDecstop";
import NavPortfolioMobile from "../../NavPortfolioMobile";

import LogoLook from "../../LogoLook";

const NavHeaderTop = ({ propsList }) => {
  return (
    <>
      <HeaderTopDecstop propsList={propsList} />
      <NavPortfolioMobile propsList={propsList} header>
        <LogoLook />
      </NavPortfolioMobile>
    </>
  );
};

export default NavHeaderTop;

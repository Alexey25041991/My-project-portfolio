import React from "react";

import NavPortfolioDecstop from "./NavPortfolioDecstop";
import NavPortfolioMobile from "./NavPortfolioMobile";

const NavPortfolioList = ({ propsButtonList, setPortfoliosValue }) => {
  return (
    <>
      <NavPortfolioDecstop
        propsButtonList={propsButtonList}
        setPortfoliosValue={setPortfoliosValue}
      />
      <NavPortfolioMobile
        propsButtonList={propsButtonList}
        setPortfoliosValue={setPortfoliosValue}
      />
    </>
  );
};

export default NavPortfolioList;

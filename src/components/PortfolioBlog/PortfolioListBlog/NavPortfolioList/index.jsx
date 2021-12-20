import React from "react";

import NavPortfolioDecstop from "./NavPortfolioDecstop";
import NavPortfolioMobile from "../../../NavPortfolioMobile";

import styled from "styled-components";

const HeaderLabel = styled.span`
  color: white;
  font-family: "Exo 2", sans-serif;
  font-weight: 800;
  margin: 20px;
  white-space: nowrap;
  line-height: 24px;
  font-size: 19px;
  text-transform: uppercase;
`;

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
      >
        <HeaderLabel>Фильтр заметок</HeaderLabel>
      </NavPortfolioMobile>
    </>
  );
};

export default NavPortfolioList;

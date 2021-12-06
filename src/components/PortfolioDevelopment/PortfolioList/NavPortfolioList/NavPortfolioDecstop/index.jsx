import React from "react";

import {
  PortfolioHeaderValue,
  PortfolioButtom,
  PortfolioButtomText,
} from "./style";

const NavPortfolioDecstop = ({ propsButtonList, setPortfoliosValue }) => {
  return (
    <PortfolioHeaderValue>
      {propsButtonList.map((item) => (
        <PortfolioButtom
          key={item.id}
          onClick={() => setPortfoliosValue(item?.value)}
        >
          <PortfolioButtomText>{item.portfolioButtonText}</PortfolioButtomText>
        </PortfolioButtom>
      ))}
    </PortfolioHeaderValue>
  );
};

export default NavPortfolioDecstop;

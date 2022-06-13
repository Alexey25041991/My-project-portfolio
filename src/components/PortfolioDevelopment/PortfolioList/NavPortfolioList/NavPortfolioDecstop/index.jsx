import React from "react";

import {
  PortfolioHeaderValue,
  PortfolioButtom,
  PortfolioButtomText,
} from "./style";

const NavPortfolioDecstop = ({ propsList, setPortfoliosValue, all }) => {
  return (
    <PortfolioHeaderValue>
      {propsList.map((item) => {
        const portfolioButtonText =
          item.value === "All" ? all : item.portfolioButtonText;
        return (
          <PortfolioButtom
            key={item.id}
            onClick={() => setPortfoliosValue(item?.value)}
          >
            <PortfolioButtomText>{portfolioButtonText}</PortfolioButtomText>
          </PortfolioButtom>
        );
      })}
    </PortfolioHeaderValue>
  );
};

export default NavPortfolioDecstop;

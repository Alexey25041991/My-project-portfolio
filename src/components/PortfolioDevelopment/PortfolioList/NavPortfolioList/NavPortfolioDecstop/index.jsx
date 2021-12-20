import React from "react";

import {
  PortfolioHeaderValue,
  PortfolioButtom,
  PortfolioButtomText,
} from "./style";

const NavPortfolioDecstop = ({ propsList, setPortfoliosValue }) => {
  return (
    <PortfolioHeaderValue>
      {propsList.map((item) => (
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

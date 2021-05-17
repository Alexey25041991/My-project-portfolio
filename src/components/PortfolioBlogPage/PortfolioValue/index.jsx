import React from 'react';

import {
  PortfolioWrapper,
  PortfolioConteiner,
  PortfolioHeader,
  PortfolioCustom,
} from './style.js';

const PortfolioValue = () => (
  <PortfolioWrapper id="portfolio">
    <PortfolioConteiner>
      <PortfolioHeader>привет</PortfolioHeader>
      <PortfolioCustom>привет</PortfolioCustom>
    </PortfolioConteiner>
  </PortfolioWrapper>
);

export default PortfolioValue;

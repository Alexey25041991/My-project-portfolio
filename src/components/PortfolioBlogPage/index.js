import React from 'react';

import PortfolioHeader from './PortfolioHeader';
import PortfolioList from './PortfolioList';
import PortfolioValue from './PortfolioValue';

import { observer } from 'mobx-react-lite';

import { PAGES_PORTFOLIO } from '../common/constants';
import { store } from '../store';

const PortfolioBlogPage = observer(() => {
  const portfolioName = store.getPortfolioBlogPage();
  return (
    <>
      <PortfolioHeader />
      {PAGES_PORTFOLIO.PORTFOLIO_HOME === portfolioName && <PortfolioList />}
      {PAGES_PORTFOLIO.PORTFOLIO_HOME !== portfolioName && <PortfolioValue />}
    </>
  );
});

export default PortfolioBlogPage;

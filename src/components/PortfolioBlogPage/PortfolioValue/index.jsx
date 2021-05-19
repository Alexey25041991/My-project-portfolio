import React from 'react';

import {
  PortfolioWrapper,
  PortfolioConteiner,
  PortfolioCustom,
  Li,
  SlickTrack,
  PortfolioImg,
  PortfolioNameList,
  Projectwindow,
  PortfolioImgUrl,
} from './style.js';

import { propsPortfolioList } from '../../common/constants';

import { store } from '../../store';

const getSlickList = (propsPortfolioList) => {
  const portfolioName = store.getPortfolioBlogPage();
  const portfolioValue = propsPortfolioList.find(
    (item) => item.hrefNameList === portfolioName
  );
  return (
    <Li>
      <PortfolioImg>
        {/* {window.open(
          'https://react-t-shirt-shop.herokuapp.com/',
          'width=600,height=400'
        )} */}
        <PortfolioNameList href={portfolioValue.hrefPortfolio} target="_blank">
          {portfolioValue.hrefPortfolio}
        </PortfolioNameList>
        <Projectwindow>
          <PortfolioImgUrl src={portfolioValue.icon} width={'936px'} />
        </Projectwindow>
      </PortfolioImg>
    </Li>
  );
};

const PortfolioValue = () => (
  <PortfolioWrapper id="portfolio">
    <PortfolioConteiner>
      <PortfolioCustom>
        <SlickTrack>{getSlickList(propsPortfolioList)}</SlickTrack>
      </PortfolioCustom>
    </PortfolioConteiner>
  </PortfolioWrapper>
);

export default PortfolioValue;

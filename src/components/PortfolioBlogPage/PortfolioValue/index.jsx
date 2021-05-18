import React from 'react';
import { Link } from 'react-router-dom';

import {
  PortfolioWrapper,
  PortfolioConteiner,
  PortfolioCustom,
  Li,
  SlickTrack,
  PortfolioImg,
} from './style.js';
import styled from 'styled-components/macro';

import { propsPortfolioList } from '../../common/constants';

import { store } from '../../store';

const PortfolioListData = styled(Link)`
  display: flex;
  width: 285px;
  height: 292px;
  overflow: hidden;
  position: relative;
  top: 21px;
  left: 23px;
`;

const getSlickList = (propsPortfolioList) => {
  const portfolioName = store.getPortfolioBlogPage();
  const portfolioValue = propsPortfolioList.find(
    (item) => item.hrefNameList === portfolioName
  );
  console.log(111, portfolioValue);
  return (
    <Li>
      <PortfolioImg>
        <PortfolioListData
          to={`/portfolio/${portfolioValue.hrefNameList}`}
          style={{ textDecoration: 'none' }}
        >
          {portfolioValue.hrefNameList}
        </PortfolioListData>
        <a href="https://react-t-shirt-shop.herokuapp.com/" target="_blank">
          fdfdf
        </a>
        {/* {window.open(
          'https://react-t-shirt-shop.herokuapp.com/',
          'width=600,height=400'
        )} */}
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

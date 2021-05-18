import React from 'react';

import { Breadcrumbs } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

import { store } from '../../store';
import { PAGES_PORTFOLIO, propsPortfolioList } from '../../common/constants';

import styled from 'styled-components/macro';
import {
  PortfolioHeaderWrapper,
  PortfolioHeaderConteiner,
  PortfolioHeaderHeader,
  PortfolioHeaderText,
  PortfolioHeaderBreadCrumbs,
  BreadcrumbsText,
  Label,
} from './style';

const LinkBreadcrumbs = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  & :hover:before {
    position: absolute;
    content: '';
    width: calc(100% + (1px * 2));
    height: 2px;
    bottom: 15px;
    background: #fff;
  }
`;

const hendleClick = () => {
  return store.setPortfolioBlogPage(PAGES_PORTFOLIO.PORTFOLIO_HOME);
};

const PortfolioHeader = () => {
  console.log(1, store.getPortfolioBlogPage());
  const portfolio = store.getPortfolioBlogPage();
  const portfolioValue = propsPortfolioList.find(
    (item) => item.hrefNameList === portfolio
  );
  return (
    <PortfolioHeaderWrapper>
      <PortfolioHeaderConteiner>
        <PortfolioHeaderBreadCrumbs>
          <Breadcrumbs aria-label="breadcrumb" style={{ color: '#fff' }}>
            <LinkBreadcrumbs to="/">
              <HomeIcon style={{ color: '#fff', marginRight: '5px' }} />
              <BreadcrumbsText>Главная</BreadcrumbsText>
            </LinkBreadcrumbs>
            {portfolio !== PAGES_PORTFOLIO.PORTFOLIO_HOME ? (
              <LinkBreadcrumbs to="/portfolio">
                <BreadcrumbsText onClick={() => hendleClick()}>
                  Портфолио
                </BreadcrumbsText>
              </LinkBreadcrumbs>
            ) : (
              <BreadcrumbsText>Портфолио</BreadcrumbsText>
            )}
            {portfolio !== PAGES_PORTFOLIO.PORTFOLIO_HOME && (
              <BreadcrumbsText>{portfolioValue.hrefNameList}</BreadcrumbsText>
            )}
          </Breadcrumbs>
        </PortfolioHeaderBreadCrumbs>
        <PortfolioHeaderHeader>
          <Label>Портфолио</Label>
        </PortfolioHeaderHeader>
        <PortfolioHeaderText>
          В портфолио представлены проекты, которые я разработал в
          сотрудничестве с веб-студиями так и для частных клиентов, а также
          несколько личных проектов. Основная масса проектов содержит
          индивидуальные функции предназначенные для реализации особенностей
          работы веб-сайта.В моем портфолио веб-разработчика указано название
          сайта, ссылка на сайт, цель сайта и описание выполненной работы.
        </PortfolioHeaderText>
      </PortfolioHeaderConteiner>
    </PortfolioHeaderWrapper>
  );
};

export default PortfolioHeader;

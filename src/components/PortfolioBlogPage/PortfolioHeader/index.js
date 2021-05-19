import React, { useState, useEffect } from 'react';

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
  PortfolioDataTime,
  PortfolioDataText,
  PortfolioTechnologies,
} from './style';

import { ReactComponent as PortfolioTimeIcon } from './icon/PortfolioTimeIcon.svg';

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

const handleClick = () => {
  return store.setPortfolioBlogPage(PAGES_PORTFOLIO.PORTFOLIO_HOME);
};

const PortfolioHeader = () => {
  const header = 'Портфолио';
  const portfolioText = `В портфолио представлены проекты, которые я 
  разработал в сотрудничестве с веб-студиями так и для частных клиентов, 
  а также несколько личных проектов. Основная масса проектов содержит
  индивидуальные функции предназначенные для реализации особенностей
  работы веб-сайта.В моем портфолио веб-разработчика указано название
  сайта, ссылка на сайт, цель сайта и описание выполненной работы`;

  const [headerValue, setHeaderValue] = useState(header);
  const [portfolioHeaderTextValue, setPortfolioHeaderTextValue] = useState(
    portfolioText
  );

  const portfolio = store.getPortfolioBlogPage();
  const portfolioValue = propsPortfolioList.find(
    (item) => item.hrefNameList === portfolio
  );
  const portfolioNameList = portfolioValue?.portfolioNameList;
  const portfolioHeaderText = portfolioValue?.portfolioText;

  useEffect(() => {
    switch (portfolio) {
      case PAGES_PORTFOLIO.PORTFOLIO_HOME:
        setHeaderValue(header) || setPortfolioHeaderTextValue(portfolioText);
        break;
      default:
        setHeaderValue(portfolioNameList) ||
          setPortfolioHeaderTextValue(portfolioHeaderText);
    }
  }, [portfolio, portfolioNameList, portfolioHeaderText, portfolioText]);
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
                <BreadcrumbsText onClick={() => handleClick()}>
                  Портфолио
                </BreadcrumbsText>
              </LinkBreadcrumbs>
            ) : (
              <BreadcrumbsText>Портфолио</BreadcrumbsText>
            )}
            {portfolio !== PAGES_PORTFOLIO.PORTFOLIO_HOME && (
              <BreadcrumbsText>
                {portfolioValue.portfolioNameList}
              </BreadcrumbsText>
            )}
          </Breadcrumbs>
        </PortfolioHeaderBreadCrumbs>
        <PortfolioHeaderHeader>
          <Label>{headerValue}</Label>
        </PortfolioHeaderHeader>
        <PortfolioHeaderText>
          <PortfolioDataTime>
            {portfolio !== PAGES_PORTFOLIO.PORTFOLIO_HOME && (
              <PortfolioTimeIcon fill="#fff" />
            )}
            <PortfolioDataText>
              {portfolioValue?.portfolioDataTime}
              <PortfolioTechnologies>
                {portfolioValue?.technologies}
              </PortfolioTechnologies>
            </PortfolioDataText>
          </PortfolioDataTime>
          {portfolioHeaderTextValue}
        </PortfolioHeaderText>
      </PortfolioHeaderConteiner>
    </PortfolioHeaderWrapper>
  );
};

export default PortfolioHeader;

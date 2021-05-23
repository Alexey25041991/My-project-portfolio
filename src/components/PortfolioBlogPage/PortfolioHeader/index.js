import React from 'react';

import { Breadcrumbs } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

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
  PortfolioGithub,
  PortfolioText,
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

const PortfolioHeader = ({ item }) => {
  return (
    <PortfolioHeaderWrapper>
      <PortfolioHeaderConteiner>
        <PortfolioHeaderBreadCrumbs>
          <Breadcrumbs aria-label="breadcrumb" style={{ color: '#fff' }}>
            <LinkBreadcrumbs to="/">
              <HomeIcon style={{ color: '#fff', marginRight: '5px' }} />
              <BreadcrumbsText>Главная</BreadcrumbsText>
            </LinkBreadcrumbs>
            {item.portfolioNameList !== 'Портфолио' ? (
              <LinkBreadcrumbs to="/portfolio">
                <BreadcrumbsText>Портфолио</BreadcrumbsText>
              </LinkBreadcrumbs>
            ) : (
              <BreadcrumbsText>Портфолио</BreadcrumbsText>
            )}
            {item.portfolioNameList !== 'Портфолио' && (
              <BreadcrumbsText>{item.portfolioNameList}</BreadcrumbsText>
            )}
          </Breadcrumbs>
        </PortfolioHeaderBreadCrumbs>
        <PortfolioHeaderHeader>
          <Label>{item.portfolioNameList}</Label>
        </PortfolioHeaderHeader>
        <PortfolioHeaderText>
          <PortfolioDataTime>
            {item.portfolioNameList !== 'Портфолио' && (
              <PortfolioTimeIcon fill="#fff" />
            )}
            <PortfolioDataText>
              {item?.portfolioDataTime}
              <PortfolioTechnologies>
                {item?.technologies}
              </PortfolioTechnologies>
            </PortfolioDataText>
          </PortfolioDataTime>
          <PortfolioGithub href={item?.github} target="_blank">
            {item?.github}
          </PortfolioGithub>
          <PortfolioText>{item?.portfolioText}</PortfolioText>
        </PortfolioHeaderText>
      </PortfolioHeaderConteiner>
    </PortfolioHeaderWrapper>
  );
};

export default PortfolioHeader;

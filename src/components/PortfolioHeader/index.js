import React from "react";

import { Breadcrumbs } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

import styled from "styled-components/macro";
import {
  PortfolioHeaderText,
  PortfolioHeaderBreadCrumbs,
  BreadcrumbsText,
  PortfolioDataTitle,
  PortfolioDataTime,
  PortfolioDataText,
  PortfolioData,
  PortfolioDataLink,
  PortfolioText,
} from "./style";

import { ReactComponent as PortfolioTimeIcon } from "../common/icon/TimeIcon.svg";

import PageWrapper from "../common/PageWrapper";
import PageConteiner from "../common/PageConteiner";
import HeaderTitle from "../common/HeaderTitle";

const LinkBreadcrumbs = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  & :hover:before {
    position: absolute;
    content: "";
    width: calc(100% + (1px * 2));
    height: 2px;
    bottom: 15px;
    background: #fff;
  }
`;

const setPortfolioHeaderBreadCrumbs = (item, portfolio) => {
  const text = portfolio ? "Портфолио" : "Заметки веб-разработчика";
  const textTo = portfolio ? "/portfolio" : "/blog";
  const textValue = portfolio ? "Портфолио" : "Блог";

  return (
    <Breadcrumbs aria-label="breadcrumb" style={{ color: "#fff" }}>
      <LinkBreadcrumbs to="/">
        <HomeIcon style={{ color: "#fff", marginRight: "5px" }} />
        <BreadcrumbsText>Главная</BreadcrumbsText>
      </LinkBreadcrumbs>
      {item.portfolioNameList !== text ? (
        <LinkBreadcrumbs to={textTo}>
          <BreadcrumbsText>{textValue}</BreadcrumbsText>
        </LinkBreadcrumbs>
      ) : (
        <BreadcrumbsText>{textValue}</BreadcrumbsText>
      )}
      {item.portfolioNameList !== text && (
        <BreadcrumbsText>{item.portfolioNameList}</BreadcrumbsText>
      )}
    </Breadcrumbs>
  );
};

const PortfolioHeaderBlog = ({ item, portfolio = false }) => {
  const dataTime = portfolio ? "Портфолио" : "Заметки веб-разработчика";
  return (
    <PageWrapper dark>
      <PageConteiner>
        <PortfolioHeaderBreadCrumbs>
          {setPortfolioHeaderBreadCrumbs(item, portfolio)}
        </PortfolioHeaderBreadCrumbs>
        <HeaderTitle dark title={item.portfolioNameList} />
        <PortfolioHeaderText>
          {item?.technologies && (
            <PortfolioData>
              <PortfolioDataTitle>Дата создания:</PortfolioDataTitle>
              <PortfolioDataText>
                <PortfolioDataTime>
                  {item.portfolioNameList !== dataTime && (
                    <PortfolioTimeIcon fill="#fff" />
                  )}
                </PortfolioDataTime>
                <span>{item?.portfolioDataTime}</span>
              </PortfolioDataText>
            </PortfolioData>
          )}
          {item?.technologies && (
            <PortfolioData>
              <PortfolioDataTitle>Технологии:</PortfolioDataTitle>
              <span>{item?.technologies?.join(" / ")}</span>
            </PortfolioData>
          )}

          {item?.github && (
            <PortfolioData>
              <PortfolioDataTitle>Ссылка на github:</PortfolioDataTitle>
              <PortfolioDataLink href={item?.github} target="_blank">
                {item?.github}
              </PortfolioDataLink>
            </PortfolioData>
          )}
          {item?.hrefPortfolio && (
            <PortfolioData>
              <PortfolioDataTitle>Ссылка на сайт:</PortfolioDataTitle>
              <PortfolioDataLink href={item?.hrefPortfolio} target="_blank">
                {item?.hrefPortfolio}
              </PortfolioDataLink>
            </PortfolioData>
          )}
          <PortfolioText>{item?.portfolioText}</PortfolioText>
        </PortfolioHeaderText>
      </PageConteiner>
    </PageWrapper>
  );
};

export default PortfolioHeaderBlog;

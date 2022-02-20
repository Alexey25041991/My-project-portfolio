import React from "react";

import { Breadcrumbs } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

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
  LinkBreadcrumbs,
} from "./style";

import { ReactComponent as PortfolioTimeIcon } from "../common/icon/TimeIcon.svg";

import PageWrapper from "../common/PageWrapper";
import PageConteiner from "../common/PageConteiner";
import HeaderTitle from "../common/HeaderTitle";

const setPortfolioHeaderBreadCrumbs = (item, portfolio) => {
  const text = portfolio ? "Портфолио" : "Заметки веб-разработчика";
  const textTo = portfolio ? "/portfolio" : "/blog";
  const textValue = portfolio ? "Портфолио" : "Блог";

  return (
    <Breadcrumbs aria-label="breadcrumb" style={{ color: "#fff" }}>
      <LinkBreadcrumbs href="/">
        <HomeIcon style={{ color: "#fff", marginRight: "5px" }} />
        <BreadcrumbsText>Главная</BreadcrumbsText>
      </LinkBreadcrumbs>
      {item.portfolioNameList !== text ? (
        <LinkBreadcrumbs href={`${textTo}/#portfolioHeader`}>
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
    <PageWrapper dark id="portfolioHeader">
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
          {item?.portfolioText.split(". ").map((item) => (
            <PortfolioText>{item}.</PortfolioText>
          ))}
        </PortfolioHeaderText>
      </PageConteiner>
    </PageWrapper>
  );
};

export default PortfolioHeaderBlog;

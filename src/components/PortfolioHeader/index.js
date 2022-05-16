import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
  PortfolioTextWrapper,
  PortfolioText,
  PortfolioTextTitle,
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
      <Link to="/">
        <LinkBreadcrumbs>
          <HomeIcon style={{ color: "#fff", marginRight: "5px" }} />
          <BreadcrumbsText>Главная</BreadcrumbsText>
        </LinkBreadcrumbs>
      </Link>
      {item.portfolioNameList !== text ? (
        <Link to={`${textTo}/#portfolioHeader`}>
          <LinkBreadcrumbs>
            <BreadcrumbsText>{textValue}</BreadcrumbsText>
          </LinkBreadcrumbs>
        </Link>
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
  const [portfolioTextValue, setPortfolioTextValue] = useState([]);
  const dataTime = portfolio ? "Портфолио" : "Заметки веб-разработчика";

  useEffect(() => {
    const portfolioTextData = Array.from(
      document?.querySelectorAll("[data-prp-header]")
    );
    const portfolioTextDataValue = portfolioTextData.filter(
      (item) => item.clientHeight > 25
    );
    setPortfolioTextValue(portfolioTextDataValue.map((item) => item.innerText));
  }, [setPortfolioTextValue]);
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
          {item?.portfolioTextTitle && (
            <PortfolioTextTitle>{item?.portfolioTextTitle}</PortfolioTextTitle>
          )}
          {item?.portfolioText && (
            <PortfolioTextWrapper>
              {item?.portfolioText.split("\n").map((item, index) => {
                const portfolioTextIndent = portfolioTextValue.includes(item);
                return (
                  <PortfolioText
                    key={index}
                    data-prp-header
                    portfolioTextIndent={portfolioTextIndent}
                  >
                    {item}
                  </PortfolioText>
                );
              })}
            </PortfolioTextWrapper>
          )}
        </PortfolioHeaderText>
      </PageConteiner>
    </PageWrapper>
  );
};

export default PortfolioHeaderBlog;

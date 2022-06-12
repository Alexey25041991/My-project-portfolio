import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

import { store } from "../../store";

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

import { IS_SSR } from "../common/constants";

const setPortfolioHeaderBreadCrumbs = (item, portfolio, portfolioHeader) => {
  const text = portfolio
    ? portfolioHeader.textPortfolio
    : portfolioHeader.textNotes;
  const textTo = portfolio ? "/portfolio" : "/blog";
  const textValue = portfolio
    ? portfolioHeader.textPortfolio
    : portfolioHeader.textValueBlog;

  return (
    <Breadcrumbs aria-label="breadcrumb" style={{ color: "#fff" }}>
      <Link to="/">
        <LinkBreadcrumbs>
          <HomeIcon style={{ color: "#fff", marginRight: "5px" }} />
          <BreadcrumbsText>{portfolioHeader.home}</BreadcrumbsText>
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

const PortfolioHeaderBlog = observer(({ item, portfolio = false }) => {
  const { portfolioHeader } = store.getToggleLang();

  const [portfolioTextValue, setPortfolioTextValue] = useState([]);
  const dataTime = portfolio
    ? portfolioHeader.textPortfolio
    : portfolioHeader.textNotes;

  useEffect(() => {
    const portfolioTextData = Array.from(
      document?.querySelectorAll("[data-prp-header]")
    );
    const portfolioTextDataValue = portfolioTextData.filter(
      (item) => item.clientHeight > 25
    );
    setPortfolioTextValue(portfolioTextDataValue.map((item) => item.innerText));

    const route = IS_SSR && window?.location?.pathname.slice(1);
    store.setRouteLink(route);

    const element = document?.getElementById("portfolioHeader");
    window.scrollTo(0, element?.scrollHeight);
  }, [setPortfolioTextValue]);
  return (
    <PageWrapper dark header id="portfolioHeader" line="noHorizontal">
      <PageConteiner>
        <PortfolioHeaderBreadCrumbs>
          {setPortfolioHeaderBreadCrumbs(item, portfolio, portfolioHeader)}
        </PortfolioHeaderBreadCrumbs>
        <HeaderTitle dark title={item.portfolioNameList} />
        <PortfolioHeaderText>
          {item?.technologies && (
            <PortfolioData>
              <PortfolioDataTitle>{portfolioHeader.date}</PortfolioDataTitle>
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
              <PortfolioDataTitle>
                {portfolioHeader.technology}
              </PortfolioDataTitle>
              <span>{item?.technologies?.join(" / ")}</span>
            </PortfolioData>
          )}
          {item?.github && (
            <PortfolioData>
              <PortfolioDataTitle>
                {portfolioHeader.linkGithub}
              </PortfolioDataTitle>
              <PortfolioDataLink href={item?.github} target="_blank">
                {item?.github}
              </PortfolioDataLink>
            </PortfolioData>
          )}
          {item?.hrefPortfolio && (
            <PortfolioData>
              <PortfolioDataTitle>{portfolioHeader.link}</PortfolioDataTitle>
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
});

export default PortfolioHeaderBlog;

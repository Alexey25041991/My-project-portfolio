import styled from "styled-components";
import { MOBILE_660 } from "../common/media";

export const PortfolioHeaderText = styled.div`
  // margin: 0 auto;
  margin-top: 0;
  margin-bottom: 20px;
  margin-left: 20px;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  // max-width: 660px;

  @media ${MOBILE_660} {
    margin-left: 0;
  }
`;

export const PortfolioHeaderBreadCrumbs = styled.div`
  margin-top: 17px;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
`;

export const BreadcrumbsText = styled.p`
  color: white;
  font-weight: 400;
  margin-bottom: 4px;
  line-height: 24px;
`;

export const PortfolioDataTitle = styled.span`
  display: flex;
  margin-right: 8px;
  color: white;
  font-size: 14px;
  line-height: 22px;
  font-family: "Exo 2", sans-serif;
`;

export const PortfolioDataTime = styled.div`
  display: flex;
  margin-right: 6px;
`;

export const PortfolioDataText = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  line-height: 22px;
  font-family: "Exo 2", sans-serif;
`;

export const PortfolioTextWrapper = styled.div`
  display: flex;
  margin-top: 8px;
  flex-direction: column;

  @media ${MOBILE_660} {
    text-align: center;
    text-indent: revert;
  }
`;

export const PortfolioText = styled.div`
  color: #fff;
  font-size: 14px;
  line-height: 24px;
  text-indent: ${({ portfolioTextIndent }) =>
    portfolioTextIndent ? "20px" : "revert"};
  font-family: "Exo 2", sans-serif;

  &:not(:last-child) {
    margin-bottom: 6px;
  }

  @media ${MOBILE_660} {
    text-align: center;
    text-indent: revert;
  }
`;

export const PortfolioTextTitle = styled.h3`
  color: #fff;
  margin: 0 auto;
  margin-bottom: 12px;

  @media ${MOBILE_660} {
    text-align: center;
  }
`;

export const PortfolioData = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  font-family: "Exo 2", sans-serif;
  margin-bottom: 12px;
  line-height: 22px;

  @media ${MOBILE_660} {
    justify-content: center;
  }
`;

export const PortfolioDataLink = styled.a`
  display: flex;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  line-height: 22px;
  position: relative;

  &:hover {
    color: #fff;
  }

  &:hover:before {
    position: absolute;
    content: "";
    width: calc(100% + (1px * 2));
    height: 2px;
    bottom: 0;
    background: #fff;
  }
`;

export const LinkBreadcrumbs = styled.a`
  display: flex;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  text-decoration: none;
  position: relative;
  & :hover:before {
    position: absolute;
    content: "";
    width: calc(100% + (1px * 2));
    height: 2px;
    bottom: 0;
    left: 0;
    background: #fff;
  }
`;

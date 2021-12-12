import styled from "styled-components";

export const PortfolioHeaderText = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  flex-direction: column;
`;

export const PortfolioHeaderBreadCrumbs = styled.div`
  margin-top: 17px;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
`;

export const BreadcrumbsText = styled.p`
  color: white;
  font-size: 1.18rem;
  font-weight: 400;
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

export const PortfolioText = styled.div`
  color: #fff;
  font-size: 14px;
  font-family: "Exo 2", sans-serif;
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
`;

export const PortfolioDataLink = styled.a`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  line-height: 22px;
  position: relative;
  &:hover:before {
    position: absolute;
    content: "";
    width: calc(100% + (1px * 2));
    height: 2px;
    bottom: 0;
    background: #fff;
  }
`;

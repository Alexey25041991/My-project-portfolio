import styled from "styled-components";

export const PortfolioHeaderHeader = styled.div`
  display: flex;
  align-items: center;
  text-shadow: 0 1px 1px rgba(37, 101, 167, 0.47);
  color: white;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const PortfolioHeaderText = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
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

export const Label = styled.span`
  display: flex;
  align-items: center;
  color: white;
  line-height: 17px;
  font-size: 30px;
  font-family: "Exo 2", sans-serif;
  font-weight: 700;
  text-decoration: none;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
`;

export const PortfolioDataTime = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

export const PortfolioDataText = styled.div`
  display: flex;
  color: #fff;
  font-size: 14px;
  font-family: "Exo 2", sans-serif;
  margin-left: 5px;
`;

export const PortfolioTechnologies = styled.div`
  color: #fff;
  font-size: 14px;
  font-family: "Exo 2", sans-serif;
  margin-left: 20px;
`;

export const PortfolioText = styled.div`
  color: #fff;
  font-size: 14px;
  font-family: "Exo 2", sans-serif;
  margin-top: 12px;
`;

export const PortfolioGithub = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  font-family: "Exo 2", sans-serif;
  margin-bottom: 12px;
  line-height: 1;
  cursor: pointer;
  & :hover {
    border-bottom: 1px dashed #fff;
  }
`;

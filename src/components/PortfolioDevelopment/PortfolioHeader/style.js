import styled from 'styled-components';

import myIconWawe from './icon/wawe.png';
import myIconBgcont from './icon/bgcont.png';

export const PortfolioHeaderWrapper = styled.div`
  display: flex;
  background-color: #2b3037;
  background: url(${myIconBgcont}) center top;
  line-height: 20px;
  color: #000;
  font-family: 'Exo 2', sans-serif;
  &:before {
    background: url(${myIconWawe}) top center repeat-x;
    content: '';
    width: 100%;
    height: 22px;
    display: flex;
    margin-top: -22px;
    position: absolute;
    z-index: 10;
  }
`;

export const PortfolioHeaderConteiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 960px;
  margin: 0 auto;
  padding: 0 25px;
  padding-bottom: 25px;
`;

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
  font-family: 'Exo 2', sans-serif;
  font-weight: 700;
  text-decoration: none;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
`;

export const Ul = styled.ul`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  list-style: none;
  display: flex;
  // flex-direction: column;
  vertical-align: top;
  width: 296px;
  margin-right: 17px;
  margin-top: 40px;
`;

export const Span = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 20px;
`;

export const Link = styled.div`
  text-shadow: 0 1px 1px rgba(37, 101, 167, 0.47);
  color: white;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;

export const LabelTitle = styled.div`
  text-shadow: 0 1px 1px rgba(37, 101, 167, 0.47);
  color: white;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const LabelText = styled.div`
  margin-top: 7px;
  text-shadow: 0 1px 1px rgba(37, 101, 167, 0.47);
  color: white;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;

export const PortfolioDataTime = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

export const PortfolioDataText = styled.div`
  display: flex;
  color: #fff;
  font-size: 14px;
  font-family: 'Exo 2', sans-serif;
  margin-left: 5px;
`;

export const PortfolioTechnologies = styled.div`
  color: #fff;
  font-size: 14x;
  font-family: 'Exo 2', sans-serif;
  margin-left: 20px;
`;

export const PortfolioText = styled.div`
  color: #fff;
  font-size: 14x;
  font-family: 'Exo 2', sans-serif;
  margin-top: 12px;
`;

export const PortfolioGithub = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 14x;
  font-family: 'Exo 2', sans-serif;
  margin-bottom: 12px;
  line-height: 1;
  cursor: pointer;
  & :hover {
    border-bottom: 1px dashed #fff;
  }
`;

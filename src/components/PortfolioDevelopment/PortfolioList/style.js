import styled from "styled-components";

import myIconBgport from "../../common/icon/bgport.png";
import myIconBgportActiv from "../../common/icon/bgporth.png";

export const PortfolioHeaderValue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const PortfolioCustom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const Ul = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style-type: none;
  width: 960px;
  margin: 0 auto;
  position: relative;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  width: 322px !important;
  text-align: center;
  margin-left: -8px;
  margin-bottom: 30px;
`;

export const PortfolioButtom = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: #2b3037;
  border-radius: 4px;
  text-shadow: 0 1px 1px rgba(37, 101, 167, 0.47);
  color: white;
  font-family: "Exo 2", sans-serif;
  font-size: 16px;
  font-weight: 900;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 40px;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin: 0 20px;
  &:hover {
    background-color: #ff8560;
  }
`;

export const PortfolioButtomText = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 15px;
  color: white;
  line-height: 17px;
  font-size: 14px;
  font-family: "Exo 2", sans-serif;
  font-weight: 400;
  text-decoration: none;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
`;

export const SlickList = styled.div`
  margin: 0px 12px !important;
  overflow: hidden;
  position: relative;
  padding: 0;
`;

export const SlickTrack = styled.div`
  display: flex;
  flex-wrap: wrap;
  opacity: 1;
  margin-left: -13px;
  position: relative;
  top: 0;
`;

export const PortfolioImg = styled.div`
  display: flex;
  background: url(${myIconBgport}) no-repeat;
  width: 328px;
  height: 359px;
  &:hover {
    background: url(${myIconBgportActiv}) no-repeat;
  }
`;

export const PortfolioImgUrl = styled.img`
  display: flex;
  position: relative;
`;

export const PortfolioData = styled.div`
  display: flex;
  text-align: left;
  margin-top: -46px;
  padding: 0px 14px 0px 23px;
  margin-bottom: 15px;
  position: relative;
`;

export const PortfolioDataValue = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 7px;
  background: #e7e9ea;
  color: #707980;
  min-width: 277px;
`;

export const PortfolioDataLabel = styled.div`
  display: flex;
`;

export const PortfolioDataText = styled.div`
  color: #707980;
  font-size: 12px;
  font-family: "Exo 2", sans-serif;
  margin-left: 5px;
`;

export const PortfolioDataTime = styled.div`
  display: flex;
`;

export const PortfolioName = styled.div`
  color: #2b2a29;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  & :hover {
    font-size: 18px;
  }
`;

export const PortfolioNameList = styled.a`
  font-size: 14px;
  border-bottom: 1px dashed #000;
  color: #000;
  cursor: pointer;
`;

import styled from "styled-components";
import { TABLET_768 } from "../../common/media";

import myIconBgport from "../../common/icon/bgport.png";
import myIconBgportActiv from "../../common/icon/bgporth.png";

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  width: 322px !important;
  text-align: center;
  margin-left: -8px;
  margin-bottom: auto;
  &:last-child {
    margin-bottom: auto;
  }

  perspective: 1000px;
  transform-style: preserve-3d;

  @media ${TABLET_768} {
    width: 100% important;
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperPortfolioImg = styled.div`
  display: flex;

  transition: transform 0.2s;
  transform: rotateX(0);
`;

export const PortfolioImg = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-top: 22px;
  margin-bottom: 15px;
  margin-left: ${({ theme }) => (theme.name === "dark" ? "22px" : "28px")};
  position: relative;
`;

export const PortfolioDataValue = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 4px 7px;
  background: #e7e9ea;
  color: #707980;
  min-width: 286px;
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
  margin-bottom: 30px;
`;

export const PortfolioNameList = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.color.text.primary};
  cursor: pointer;
  border-bottom: 1px dashed ${({ theme }) => theme.color.text.primary};
`;

export const PortfolioListData = styled.div`
  display: flex;
  justify-content: center;
  width: 285px;
  height: 292px;
  overflow: hidden;
  position: relative;
  top: 21px;
  left: 23px;
  text-decoration: none;
`;

export const PortfolioListDataText = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  text-decoration: none;
`;

import styled from "styled-components";
import { TABLET_1024, TABLET_768, MOBILE_660 } from "../../common/media";

import myIconStl from "../../common/icon/stl.png";
import myIconStlh from "../../common/icon/stlh.png";
import myIconStr from "../../common/icon/str.png";
import myIconStrh from "../../common/icon/strh.png";
import myIconBgport from "../../common/icon/bgport.png";
import myIconBgportActiv from "../../common/icon/bgporth.png";

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
  height: 420px;
  width: 960px;
  margin: 0 auto;
  position: relative;

  @media ${TABLET_1024} {
    width: 100%;
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  width: 322px !important;
  text-align: center;
  margin-left: -8px;

  @media ${TABLET_768} {
    width: 100% important;
    justify-content: center;
  }
`;

export const ButtonL = styled.button`
  display: flex;
  position: absolute;
  top: 149px;
  background: url(${myIconStl}) no-repeat;
  border: 0px;
  width: 25px;
  height: 45px;
  left: -25px;
  cursor: pointer;
  &:hover {
    background: url(${myIconStlh}) no-repeat;
  }

  @media ${TABLET_1024} {
    left: 0;
  }
`;

export const ButtonR = styled.button`
  display: flex;
  position: absolute;
  top: 149px;
  background: url(${myIconStr}) no-repeat;
  border: 0px;
  width: 25px;
  height: 45px;
  right: -25px;
  cursor: pointer;
  &:hover {
    background: url(${myIconStrh}) no-repeat;
  }

  @media ${TABLET_1024} {
    right: 0;
  }
`;

export const SlickList = styled.div`
  margin: 0px 12px !important;
  overflow: hidden;
  position: relative;
  padding: 0;

  @media ${TABLET_1024} {
    width: 100%;
  }

  @media ${MOBILE_660} {
    margin: 0px 17px !important;
  }
`;

export const SlickTrack = styled.div`
  display: flex;
  opacity: 1;
  margin-left: -13px;
  position: relative;
  top: 0;

  @media ${TABLET_1024} {
    width: 100%;
    margin-left: 0;
  }
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

export const PortfolioNameList = styled.div`
  font-size: 14px;
  color: #000;
  cursor: pointer;
  border-bottom: 1px dashed #000;
`;

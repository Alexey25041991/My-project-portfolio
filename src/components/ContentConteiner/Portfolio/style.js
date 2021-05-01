// import styled from 'styled-components';
import styled from 'styled-components';

import myIconWawew from './icon/wawew.png';
// import myIconWawewb from './icon/wawewb.png';
import myIconBgcont from './icon/bgcont.png';
import myIconStl from './icon/stl.png';
import myIconStlh from './icon/stlh.png';
import myIconStr from './icon/str.png';
import myIconStrh from './icon/strh.png';
import myIconBgport from './icon/bgport.png';

export const PortfolioWrapper = styled.div`
  display: flex;
  background-color: #fff;
  // background: url(${myIconBgcont}) center top;
  line-height: 20px;
  color: #000;
  font-family: 'Exo 2', sans-serif;
  &:before {
    background: url(${myIconWawew}) top center repeat-x;
    content: '';
    width: 100%;
    height: 32px;
    display: flex;
    margin-top: -31px;
    position: absolute;
  }
`;

export const PortfolioConteiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 960px;
  margin: 0 auto;
  padding: 0 25px;
  padding-bottom: 70px;
`;

export const PortfolioHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding-top: 35px;
  margin-bottom: 30px;
`;

export const PortfolioLabel = styled.div`
  color: #2b2a29;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-left: 12px;
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
  height: 420px;
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
`;

export const Allportf = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 290px;
  height: 40px;
  background-color: #2b3037;
  border-radius: 4px;
  text-shadow: 0 1px 1px rgba(37, 101, 167, 0.47);
  color: white;
  font-family: 'Exo 2', sans-serif;
  font-size: 16px;
  font-weight: 900;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 40px;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    background-color: #ff8560;
  }
`;

export const LinkPortfolio = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  color: palevioletred;
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  line-height: 17px;
  font-size: 14px;
  font-family: 'Exo 2', sans-serif;
  font-weight: 400;
  text-decoration: none;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  margin-top: 10px;
  margin-left: 10px;
`;

export const SlickList = styled.div`
  margin: 0px 12px !important;
  overflow: hidden;
  position: relative;
  padding: 0;
`;

export const SlickTrack = styled.div`
  display: flex;
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
`;

export const PortfolioList = styled.a`
  display: flex;
  width: 285px;
  height: 292px;
  overflow: hidden;
  position: relative;
  top: 21px;
  left: 23px;
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
  font-family: 'Exo 2', sans-serif;
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
`;

export const PortfolioNameList = styled.a`
  font-size: 14px;
  text-decoration: none;
  border-bottom: 1px dashed #000;
  color: #000;
  cursor: pointer;
`;

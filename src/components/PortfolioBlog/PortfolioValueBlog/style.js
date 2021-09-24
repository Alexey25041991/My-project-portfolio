// import styled from 'styled-components';
import styled from "styled-components";

// import myIconWawewb from './icon/wawewb.png';
import myIconBrouse from "./icon/brouse.png";
import myIconWawew from "./icon/wawew.png";

export const PortfolioWrapper = styled.div`
  display: flex;
  background-color: #fff;
  line-height: 20px;
  color: #000;
  font-family: "Exo 2", sans-serif;
  &:before {
    background: url(${myIconWawew}) top center repeat-x;
    content: "";
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
`;

export const PortfolioHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 30px;
  margin-bottom: 30px;
}
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
  margin: 30px 0;
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
  justify-content: center;
  flex-wrap: wrap;
  opacity: 1;
  position: relative;
  top: 0;
`;

export const PortfolioImg = styled.div`
  display: flex;
  background: url(${myIconBrouse}) no-repeat;
  position: relative;
  width: 960px;
  height: 734px;
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
`;

export const PortfolioNameList = styled.a`
  text-decoration: none;
  position: absolute;
  left: 105px;
  top: 47px;
  color: #8f8f8f;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
`;

export const Projectwindow = styled.div`
  position: absolute;
  top: 72px;
  display: block;
  width: 100%;
  height: 655px;
  overflow: auto;
  border-radius: 0 0 0 10px;
`;

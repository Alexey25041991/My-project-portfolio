import styled from "styled-components";

import myIconBrouse from "../../common/icon/brouse.png";
import myIconWawew from "../../common/icon/wawew.png";

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

export const PortfolioCustom = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
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

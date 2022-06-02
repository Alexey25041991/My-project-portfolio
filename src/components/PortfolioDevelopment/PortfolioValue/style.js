import styled from "styled-components";
import { TABLET_959 } from "../../common/media";

import myIconBrouse from "../../common/icon/brouse.png";

export const PortfolioCustom = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const Li = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;

  @media ${TABLET_959} {
    width: 100%;
  }
`;

export const SlickTrack = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  opacity: 1;
  position: relative;
  top: 0;

  @media ${TABLET_959} {
    width: 100%;
  }
`;

export const SlickTrackMobile = styled.div`
  @media ${TABLET_959} {
    width: 100%;
  }
`;

export const PortfolioImg = styled.div`
  display: flex;
  background: url(${myIconBrouse}) no-repeat;
  position: relative;
  width: 960px;
  height: 734px;

  @media ${TABLET_959} {
    width: 100%;
    height: auto;
    // background-size: 100%;
    // background: 100%;
    background: none;
  }
`;

export const PortfolioImgUrl = styled.img`
  display: flex;
  position: relative;

  @media ${TABLET_959} {
    width: 100%;
  }
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

  @media ${TABLET_959} {
    display: none;
  }
`;

export const Projectwindow = styled.a`
  position: absolute;
  top: 72px;
  display: block;
  width: 100%;
  height: 650px;
  overflow: auto;
  border-radius: 0 0 0 10px;
  cursor: pointer;

  @media ${TABLET_959} {
    display: flex;
    position: inherit;
    height: auto;
    overflow: inherit;
    top: 0;
  }
`;

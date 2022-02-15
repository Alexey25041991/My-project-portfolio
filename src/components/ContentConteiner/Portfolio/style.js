import styled from "styled-components";
import { TABLET_1024, MOBILE_660, MOBILE_480 } from "../../common/media";

import myIconStl from "../../common/icon/stl.png";
import myIconStlh from "../../common/icon/stlh.png";
import myIconStr from "../../common/icon/str.png";
import myIconStrh from "../../common/icon/strh.png";

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

  @media ${MOBILE_480} {
    left: -10px;
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

  @media ${MOBILE_480} {
    right: -10px;
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

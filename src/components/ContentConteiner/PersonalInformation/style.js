import styled from "styled-components";
import { TABLET_959, MOBILE_660 } from "../../common/media";

import myIconWebdev from "../../common/icon/webdev.png";

export const PersonalHeaderCustom = styled.h4`
  font-size: 20px;
  line-height: 26px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-top: 0;
  margin-bottom: 16px;
`;

export const PersonalCustom = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const PersonalText = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  text-indent: 20px;
  font-size: 14px;
  line-height: 20px;

  @media ${MOBILE_660} {
    text-align: center;
    text-indent: revert;
  }
`;

export const PersonalSection = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${myIconWebdev}) right top no-repeat;
  padding-right: 485px;
  padding-bottom: 10px;

  @media ${TABLET_959} {
    background: url(${myIconWebdev}) center top no-repeat;
    padding-right: 0;
    padding-top: 170px;
    background-size: 294px;
  }
`;

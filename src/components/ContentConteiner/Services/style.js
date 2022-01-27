import styled from "styled-components";
import { TABLET_959, MOBILE_660 } from "../../common/media";

import myIconService from "../../common/icon/service.png";

export const ServicesCustom = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const ServicesText = styled.p`
  margin-top: 17px;
  margin-bottom: 0;
  color: #000;
  font-size: 14px;
  line-height: 20px;

  @media ${MOBILE_660} {
    width: 100%;
    text-align: center;
  }
`;

export const ServicesSection = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${myIconService}) right top no-repeat;
  padding-right: 485px;

  @media ${TABLET_959} {
    background: url(${myIconService}) center top no-repeat;
    padding-right: 0;
    padding-top: 128px;
    background-size: 294px;
  }
`;

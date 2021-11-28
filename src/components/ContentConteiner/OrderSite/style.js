import styled from "styled-components";
import { MOBILE_660 } from "../../common/media";

export const OrderSiteLabel = styled.div`
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  margin-left: 12px;
  line-height: 36px;

  @media ${MOBILE_660} {
    font-size: 26px;
    line-height: 30px;
  }
`;

export const OrderSiteCustom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const OrderSiteText = styled.p`
  margin-top: 0;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;

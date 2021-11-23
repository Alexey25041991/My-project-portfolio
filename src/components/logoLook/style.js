import styled from "styled-components";
import { MOBILE_660, MOBILE_480 } from "../common/media";

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  vertical-align: top;
  padding-top: 12px;

  @media ${MOBILE_660} {
    padding: 10px 20px;
  }

  @media ${MOBILE_480} {
    padding-left: 0;
  }
`;

export const LogoSign = styled.div`
  color: white;
  line-height: 30px;
  font-size: 25px;
  font-family: "Exo 2", sans-serif;
  font-weight: 800;
  margin-right: 14px;
  white-space: nowrap;
  @media ${MOBILE_480} {
    line-height: 24px;
    font-size: 19px;
    margin-right: 8px;
  }
`;

export const LogoCoder = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`;

export const LogoCoderLabel = styled(LogoSign)`
  vertical-align: top;
  font-weight: bold;
`;

export const LogoCoderText = styled.div`
  color: white;
  text-align: left;
  font-size: 12px;
  font-weight: 400;
  padding-top: 4px;
  display: block;
  font-family: "Exo 2", sans-serif;
  white-space: nowrap;
`;

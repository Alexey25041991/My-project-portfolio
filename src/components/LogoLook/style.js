import styled from "styled-components";
import { MOBILE_660, MOBILE_480 } from "../common/media";

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  vertical-align: top;
  padding-top: 12px;
  letter-spacing: 5px;

  @media ${MOBILE_660} {
    padding: 10px 20px;
    justify-content: center;
  }

  @media ${MOBILE_480} {
    padding-left: 0;
  }
`;

export const LogoSign = styled.div`
  color: #ff8560;
  line-height: 30px;
  font-size: 25px;
  font-family: "Exo 2", sans-serif;
  // font-weight: 800;
  white-space: nowrap;
  text-transform: uppercase;
  text-shadow: -1px 0 1px white, 0 -1px 1px white, 0 1px 1px white,
    1px 0 1px white, 0 0 8px white, 0 0 8px white, 0 0 8px white,
    2px 2px 3px black;
  @media ${MOBILE_480} {
    line-height: 24px;
    font-size: 19px;
    margin-right: 8px;
  }
`;

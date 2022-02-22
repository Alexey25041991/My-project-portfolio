import styled from "styled-components";
import { MOBILE_660 } from "../media";

export const ThemeDarkLightWrapper = styled.div`
  text-align: center;
  padding: ${({ positionStyle }) =>
    positionStyle ? "0 1em 0 1em" : "2em 0 0 0"};

  @media ${MOBILE_660} {
    padding: 2em 0 0 0;
    text-align: center;
  }
`;

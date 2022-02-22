import styled from "styled-components";
import { MOBILE_660 } from "../media";

export const PopupWrapper = styled.div`
  display: flex;
  flex-direction: ${({ positionStyle }) => (positionStyle ? "row" : "column")};
  align-items: center;

  @media ${MOBILE_660} {
    flex-direction: column;
  }
`;

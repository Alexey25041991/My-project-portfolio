import styled from "styled-components";
import { MOBILE_560 } from "../common/media";

import { HEADER_MARGIN_BOTTOM } from "./constants";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: pre-wrap;
  margin-bottom: ${HEADER_MARGIN_BOTTOM};
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;

  @media ${MOBILE_560} {
    flex-direction: column;
    font-size: 16px;
  }
`;

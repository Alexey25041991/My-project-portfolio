import styled from "styled-components";
import { TABLET_959 } from "../common/media";

import {
  BUTTONS_MARGIN_BETWEEN,
  BUTTONS_PADDING_BOTTOM,
  PADDING_RIGHT,
} from "./constants";

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding-bottom: ${BUTTONS_PADDING_BOTTOM};
  padding-right: ${PADDING_RIGHT};

  button:not(:first-child) {
    margin-left: ${BUTTONS_MARGIN_BETWEEN};
  }

  @media ${TABLET_959} {
    flex-direction: column-reverse;
  }
`;

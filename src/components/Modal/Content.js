import styled from "styled-components";
import { TABLET_959, MOBILE_480 } from "../common/media";

import { PADDING } from "./constants";

export const Content = styled.div`
  white-space: pre-wrap;
  padding: ${PADDING};
  color: inherit;
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  width: 100%;

  @media ${TABLET_959} {
    padding: 0;
    padding-top: 8px;
  }
`;

export const ContentAnimation = styled.div`
  margin-left: 200px;

  @media ${TABLET_959} {
    margin-left: 40px;
  }

  @media ${MOBILE_480} {
    display: none;
  }
`;

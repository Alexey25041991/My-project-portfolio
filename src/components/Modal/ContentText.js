import styled from "styled-components";
import { TABLET_959 } from "../common/media";

import { PADDING } from "./constants";

export const ContentText = styled.div`
  white-space: pre-wrap;
  overflow-y: auto;
  padding: 5px ${PADDING} ${PADDING} ${PADDING};
  color: inherit;
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  width: 100%;

  @media ${TABLET_959} {
    padding: 8px 0;
  }
`;

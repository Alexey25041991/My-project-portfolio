import styled from "styled-components";
import { TABLET_959 } from "../common/media";

export const ContentWrapper = styled.div`
  display: flex;

  @media ${TABLET_959} {
    flex-direction: column;
  }
`;

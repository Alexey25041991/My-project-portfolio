import styled from "styled-components";
import { TABLET_959 } from "../../common/media";

export const PortfolioCustom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const Ul = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style-type: none;
  width: 960px;
  margin: 0 auto;
  position: relative;

  @media ${TABLET_959} {
    justify-content: center;
    width: 100%;
  }
`;

export const SlickList = styled.div`
  margin: 0px 12px !important;
  overflow: hidden;
  position: relative;
  padding: 0;
`;

export const SlickTrack = styled.div`
  display: flex;
  flex-wrap: wrap;
  opacity: 1;
  margin-left: -13px;
  position: relative;
  top: 0;

  @media ${TABLET_959} {
    justify-content: center;
  }
`;

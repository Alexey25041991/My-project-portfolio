import styled from "styled-components";
import { MOBILE_660 } from "../../../../common/media";

export const PortfolioHeaderValueWrapper = styled.div`
  width: 300px;

  @media ${MOBILE_660} {
    display: none;
  }
`;

export const PortfolioTagText = styled.div`
  margin-bottom: 20px;
  color: #000000;
  font-size: 14px;
  font-weight: 700;
  font-family: "Exo 2", sans-serif;
`;

export const PortfolioHeaderValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  margin: 16px;
  max-width: 100%;
  width: 160px;
  color: white;
  position: ${({ handleScrollNav }) =>
    handleScrollNav ? "fixed" : "relative"};
  top: ${({ handleScrollNav }) => (handleScrollNav ? "0px" : "auto")};
`;

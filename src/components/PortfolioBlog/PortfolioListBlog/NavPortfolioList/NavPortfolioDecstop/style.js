import styled from "styled-components";
import { MOBILE_660 } from "../../../../common/media";

export const PortfolioHeaderValueWrapper = styled.div`
  width: 300px;
  position: relative;

  @media ${MOBILE_660} {
    display: none;
  }
`;

export const PortfolioTagText = styled.div`
  margin-bottom: 12px;
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
  position: ${({ handleScrollNav, handleScrollFilter }) =>
    handleScrollNav && handleScrollFilter ? "fixed" : "absolute"};
  bottom: ${({ handleScrollFilter, handleFilterInvisible }) =>
    handleScrollFilter || handleFilterInvisible ? "auto" : "0"};
  top: ${({ handleScrollFilter }) => (handleScrollFilter ? "0" : "auto")};
  overflow-y: auto;
  overflow-x: hidden;
  max-height: ${({
    handleWrapperHeight,
    handleFilterInvisible,
    handleScrollFilter,
    handleScrollNav,
  }) =>
    handleFilterInvisible
      ? handleWrapperHeight + "px"
      : !handleScrollNav && handleScrollFilter
      ? "calc(100vh - 180px)"
      : "calc(100vh - 36px)"};
  padding-right: 12px;

  /* Основная ширина полосы прокрутки. */
  ::-webkit-scrollbar {
    width: 16px;
  }

  /* Цвет дорожки, по которой двигается бегунок прокрутки. */
  ::-webkit-scrollbar-track {
    background: #fff;
    background-clip: content-box;
    /* opacity: 0;
  background-color: transparent; */
  }

  /* Размер и цвет бегунка. */
  ::-webkit-scrollbar-thumb {
    background: #ff8560;
    border: 6px solid #fff;
    border-radius: 10px;
  }
  /* Размер бегунка при наведении на него курсора. */
  ::-webkit-scrollbar-thumb:hover {
    border: 4px solid #ffff;
  }
`;

export const PortfolioHeaderValueInvisible = styled.div`
  display: flex;
  visibility: hidden;
  height: ${({ handleHeightFilter }) => handleHeightFilter + "px"};
  width: 160px;
  margin: 16px;
  position: fixed;
  top: 0;
`;

export const ButtonWrapper = styled.a`
  text-decoration: none;
`;

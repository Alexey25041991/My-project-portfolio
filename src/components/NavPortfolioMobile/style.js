import styled from "styled-components";
import { MOBILE_660 } from "../common/media";

export const Overlay = styled.div`
  ${({ opened }) => (opened ? "" : "display: none;")};
  position: fixed;
  top: 0;
  left: 0;
  inset: 0px;
  z-index: 21;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease 0s;
  background: rgba(0, 0, 0, 0.4);
`;

export const HeaderTopWrapper = styled.div`
  display: none;
  @media ${MOBILE_660} {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    height: auto;
    width: 100%;
    align-items: center;
    position: fixed;
    z-index: 22;
    background-color: #2b3037;
    bottom: ${({ header }) => (header ? "auto" : 0)};
    top: ${({ header }) => (header ? 0 : "auto")};
    margin-left: ${({ header }) => (header ? 0 : "-20px")};
    flex-direction: ${({ header }) => (header ? "column" : "column-reverse")};
  }
`;

export const HeaderMenu = styled.div`
  padding-top: 10px;
  position: relative;
  display: ${({ opened = false }) => (opened ? "flex" : "none")};
  width: 100%;
  z-index: 20;
  background-color: #464a53;
  padding-top: 0;
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-top: ${({ header }) => (header ? "none" : "2px solid #fff")};
  border-bottom: ${({ header }) => (header ? "2px solid #fff" : "none")};
  flex-direction: ${({ header }) => (header ? "row-reverse" : "row")};
  background-color: #464a53;
`;

export const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: calc(100vh - 172px);

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

export const Li = styled.li`
  display: inline-block;
  vertical-align: top;
  text-align: center;
  margin-bottom: 16px;

  & :hover {
    cursor: pointer;
  }

  position: relative;
  & :hover:before {
    position: absolute;
    content: "";
    width: calc(100% + (1px * 2));
    height: 2px;
    bottom: 0px;
    background: #ff8560;
  }

  margin-bottom: 0;
  border-top: ${({ header }) => (header ? "none" : "2px solid #fff")};
  border-bottom: ${({ header }) => (header ? "2px solid #fff" : "none")};
  & :hover:before {
    display: none;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 8px;
  color: palevioletred;
  flex-direction: row;
  padding: 10px 20px;
`;

export const Button = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 8px;
  color: palevioletred;
  flex-direction: row;
  padding: 10px 20px;
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  color: white;
  line-height: 17px;
  font-size: 14px;
  font-family: "Exo 2", sans-serif;
  font-weight: 400;
  text-decoration: none;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  margin-top: 10px;
  white-space: nowrap;
  margin-top: 0;
  padding-left: 10px;
`;

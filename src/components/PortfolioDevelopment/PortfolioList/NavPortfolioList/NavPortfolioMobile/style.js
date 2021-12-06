import styled from "styled-components";
import { MOBILE_660 } from "../../../../common/media";

export const Overlay = styled.div`
  ${({ opened }) => (opened ? "" : "display: none;")};
  position: fixed;
  top: 0;
  left: 0;
  inset: 0px;
  z-index: 10;
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
    z-index: 20;
    background-color: #2b3037;
    bottom: 0;
    margin-left: -20px;
    flex-direction: column-reverse;
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
  border-top: 2px solid #fff;
  background-color: #464a53;
`;

export const HeaderLabel = styled.span`
  color: white;
  font-family: "Exo 2", sans-serif;
  font-weight: 800;
  margin: 20px;
  white-space: nowrap;
  line-height: 24px;
  font-size: 19px;
  text-transform: uppercase;
`;

export const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  flex-direction: column;
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
  border-top: 2px solid #fff;
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

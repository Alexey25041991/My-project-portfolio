import styled from "styled-components";
import { TABLET_1024, MOBILE_660 } from "../../common/media";

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
  display: flex;
  justify-content: space-between;
  height: 74px;
  width: 960px;
  margin: 0 auto;
  position: relative;

  @media ${TABLET_1024} {
    flex-direction: column;
    height: auto;
    width: 100%;
    align-items: center;
  }

  @media ${MOBILE_660} {
    position: fixed;
    z-index: 20;
    background-color: #2b3037;
  }
`;

export const HeaderMenu = styled.div`
  padding-top: 10px;
  position: relative;
  @media ${MOBILE_660} {
    display: ${({ opened = false }) => (opened ? "flex" : "none")};
    width: 100%;
    z-index: 20;
    background-color: #464a53;
    padding-top: 0;
  }
`;

export const MenuWrapper = styled.div`
  @media ${MOBILE_660} {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 2px solid #fff;
    background-color: #464a53;
  }
`;

export const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media ${MOBILE_660} {
    width: 100%;
    flex-direction: column;
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

  @media ${MOBILE_660} {
    margin-bottom: 0;
    border-bottom: 2px solid #fff;
    & :hover:before {
      display: none;
    }
  }
`;

export const Link = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 8px;
  color: palevioletred;

  @media ${MOBILE_660} {
    flex-direction: row;
    padding: 10px 20px;
  }
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

  @media ${MOBILE_660} {
    margin-top: 0;
    padding-left: 10px;
  }
`;

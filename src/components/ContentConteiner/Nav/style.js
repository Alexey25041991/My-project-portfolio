import styled from "styled-components";
import { TABLET_1120 } from "../../common/media";

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 48px;
  height: 370px;
  background: url(img/rocket.png) no-repeat;
  position: fixed;
  bottom: 30px;
  margin-left: 20px;
  z-index: 99;
  background: #2b3037;
  border: 4px solid #fff;
  border-radius: 8px;
  text-align: center;
  padding-top: 13px;
  z-index: 50;

  @media ${TABLET_1120} {
    display: none;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  list-style: none;
  margin-bottom: 10px;
  position: relative;

  & :hover {
    cursor: pointer;
    border-radius: 50%;
    background-color: #ff8560b3;
    box-shadow: 0 0 18px #ff8560e0;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoSign = styled.div`
  color: white;
  line-height: 30px;
  font-size: 16px;
  font-family: "Exo 2", sans-serif;
  font-weight: 800;
  white-space: nowrap;
`;

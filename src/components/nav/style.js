import styled from 'styled-components';

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 48px;
  height: 348px;
  margin-bottom: -11px;
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
  }
`;

export const Link = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  color: #fff;
  left: 48px;
  text-align: left;
  top: 0px;
  opacity: 0;
  font-size: 11px;
  visibility: hidden;
  -moz-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background: #2b3037;
  padding: 2px 5px;
  border-radius: 5px;
  border: 3px solid #fff;
`;

export const LogoSign = styled.div`
  color: white;
  line-height: 30px;
  font-size: 16px;
  font-family: 'Exo 2', sans-serif;
  font-weight: 800;
  white-space: nowrap;
`;

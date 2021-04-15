// import styled from 'styled-components';
import styled from 'styled-components';

import myIconWawew from './icon/wawew.png';
import myIconWawewb from './icon/wawewb.png';
import myIconBgcont from './icon/bgcont.png';

export const OrderSiteWrapper = styled.div`
  display: flex;
  background-color: #fff;
  background: url(${myIconBgcont}) center top;
  line-height: 20px;
  color: #000;
  font-family: 'Exo 2', sans-serif;
  &:before {
    background: url(${myIconWawew}) top center repeat-x;
    content: '';
    width: 100%;
    height: 32px;
    display: flex;
    margin-top: -31px;
    position: absolute;
  }
  &::after {
    background: url(${myIconWawewb}) center bottom repeat-x;
    content: '';
    width: 100%;
    height: 28px;
    display: flex;
    margin-top: -5px;
    position: absolute;
`;

export const OrderSiteConteiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 960px;
  margin: 0 auto;
  padding: 0 25px;
  padding-bottom: 70px;
`;

export const OrderSiteHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding-top: 35px;
  margin-bottom: 30px;
`;

export const OrderSiteLabel = styled.div`
  color: #2b2a29;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  margin-left: 12px;
`;

export const OrderSiteCustom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const OrderSiteText = styled.p`
  margin-top: 17px;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;

export const OrderSiteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 44px;
  background-color: #2b3037;
  border: 2px solid white;
  border-radius: 4px;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.1);
  text-shadow: 0 1px 1px rgba(37, 101, 167, 0.47);
  color: white;
  font-family: 'Exo 2', sans-serif;
  font-size: 20px;
  font-weight: 900;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 43px;
  margin-top: 15px;
  &:hover {
    background-color: #ff8560;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  color: palevioletred;
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  line-height: 17px;
  font-size: 14px;
  font-family: 'Exo 2', sans-serif;
  font-weight: 400;
  text-decoration: none;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  margin-top: 5px;
  margin-left: 10px;
`;

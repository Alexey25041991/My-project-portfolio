// import styled from 'styled-components';
import styled from 'styled-components';

import myIconWawew from './icon/wawew.png';
import myIconWawewb from './icon/wawewb.png';
import myIconBgcont from './icon/bgcont.png';
import myIconLinet from './icon/linet.png';
import myIconLinem from './icon/linem.png';
import myIconLineb from './icon/lineb.png';

export const ServiseListWrapper = styled.div`
  display: flex;
  background-color: #fff;
  background: url(${myIconBgcont}) center top;
  line-height: 20px;
  color: #ffff;
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

export const ServiseListConteiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 960px;
  margin: 0 auto;
  padding: 0 25px;
  padding-bottom: 70px;
`;

export const ServiseListHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding-top: 35px;
  margin-bottom: 30px;
`;

export const ServiseListLabel = styled.div`
  color: #2b2a29;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  margin-left: 12px;
`;

export const ServiseListCustom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const ServiseListOptions = styled.div`
  display: flex;
  vertical-align: top;
  width: 450px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const LiFir = styled.li`
  display: flex;
  background: url(${myIconLinet}) no-repeat !important;
  background-position: 0px 9px !important;
  padding-left: 35px !important;
  padding-bottom: 20px !important;
`;

export const Li = styled.li`
  display: flex;
  background: url(${myIconLinem}) no-repeat !important;
  background-position: 0px -9px !important;
  padding-left: 35px !important;
  padding-bottom: 20px !important;
`;

export const LiLas = styled.li`
  display: flex;
  background: url(${myIconLineb}) no-repeat !important;
  background-position: 0px -75px !important;
  padding-left: 35px !important;
  padding-bottom: 20px !important;
`;

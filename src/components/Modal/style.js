// import styled from 'styled-components';
import styled from 'styled-components';

import myIconWawew from './icon/wawew.png';
// import myIconWawewb from './icon/wawewb.png';
import myIconBgcont from './icon/bgcont.png';

export const ServicesWrapper = styled.div`
  display: flex;
  background-color: #fff;
  // background: url(${myIconBgcont}) center top;
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
`;

export const ServicesConteiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 960px;
  margin: 0 auto;
  padding: 0 25px;
  padding-bottom: 70px;
`;

export const ServicesHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding-top: 35px;
  margin-bottom: 30px;
`;

export const ServicesLabel = styled.div`
  color: #2b2a29;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-left: 12px;
`;

export const ServicesCustom = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const ServicesText = styled.p`
  margin-top: 17px;
  color: #000;
  font-size: 14px;
  line-height: 20px;
`;

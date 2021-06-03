import styled from 'styled-components';

import myIconWawew from './icon/wawew.png';
// import myIconWawewb from './icon/wawewb.png';
import myIconBgcont from './icon/bgcont.png';
import myIconWebdev from './icon/webdev.png';

export const PersonalWrapper = styled.div`
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

export const PersonalConteiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 960px;
  margin: 0 auto;
  padding: 0 25px;
  padding-bottom: 70px;
`;

export const PersonalHeader = styled.h1`
  color: #2b2a29;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  padding-top: 35px;
`;

export const PersonalHeaderCustom = styled.h4`
  color: #2b2a29;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-top: 11px;
  margin-bottom: 30px;
`;

export const PersonalCustom = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const PersonalText = styled.div`
  margin-top: 17px;
  color: #000;
  font-size: 14px;
  line-height: 20px;
`;

export const PersonalSection = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${myIconWebdev}) right top no-repeat;
  padding-right: 485px;
  padding-bottom: 10px;
`;

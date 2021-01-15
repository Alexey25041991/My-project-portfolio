// import styled from 'styled-components';
import styled from 'styled-components';

import myIconWawew from './icon/wawew.png';
import myIconWawewb from './icon/wawewb.png';
import myIconBgcont from './icon/bgcont.png';

export const СontactsWrapper = styled.div`
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

export const СontactsConteiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 960px;
  margin: 0 auto;
  padding: 0 25px;
  padding-bottom: 70px;
`;

export const СontactsHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding-top: 35px;
  margin-bottom: 30px;
`;

export const СontactsLabel = styled.div`
  color: #2b2a29;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  margin-left: 12px;
`;

export const СontactsCustom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const Link = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 15px;
  color: palevioletred;
`;

export const LabelText = styled.span`
  display: flex;
  align-items: center;
  color: white;
  line-height: 17px;
  font-size: 14px;
  font-family: 'Exo 2', sans-serif;
  font-weight: 400;
  text-decoration: none;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
`;

export const Label = styled(LabelText)`
  text-transform: uppercase;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  display: inline-block;
  vertical-align: top;
  text-align: center;
  margin-bottom: 16px;
`;

export const СontactsValue = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;
`;

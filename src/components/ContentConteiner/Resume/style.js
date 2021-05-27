// import styled from 'styled-components';
import styled, { keyframes } from 'styled-components';

import myIconWawew from './icon/wawew.png';
import myIconWawewb from './icon/wawewb.png';
import myIconBgcont from './icon/bgcont.png';

export const ResumeWrapper = styled.div`
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

export const ResumeConteiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 960px;
  margin: 0 auto;
  padding: 0 25px;
  padding-bottom: 70px;
`;

export const ResumeHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding-top: 35px;
  margin-bottom: 0;
`;

export const ResumeLabel = styled.div`
  color: #2b2a29;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  margin-left: 12px;
`;

export const ResumeCustom = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const ResumeOptions = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const ResumeStatus = styled.div`
  display: flex;
  justify-content: flex-end;
  vertical-align: top;
  text-align: right;
  width: 400px;
  margin-right: 12px;
  text-shadow: 0 1px 1px rgba(37, 101, 167, 0.47);
  color: white;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const ResumeValue = styled.div`
  display: flex;
  vertical-align: top;
  text-align: left;
  width: 400px;
  text-shadow: 0 1px 1px rgba(37, 101resumeskills, 167, 0.47);
  color: white;
  font-size: 14px;
  font-weight: 400;
`;

export const ResumeSkills = styled.div`
  display: flex;
  flex-direction: column;
  vertical-align: top;
  text-align: left;
  width: 400px;
  margin-bottom: 20px;
  margin-top: -15px;
`;

export const ResumeSkillsLabel = styled.div`
  margin-bottom: 5px;
  margin-top: 15px;
  text-shadow: 0 1px 1px rgba(37, 101, 167, 0.47);
  color: white;
  font-size: 14px;
  font-weight: 400;
`;

export const ResumeSkillsProgres = styled.div`
  width: 100%;
  height: 3px;
  background-color: rgba(165, 165, 165, 0.28);
  border-radius: 2px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 1px 2px transparent;
`;

const spin = keyframes`
  progress-bar-stripes
`;

export const ResumeSkillsValue = styled.div`
  width: ${({ width }) => width}%;
  height: 3px;
  font-size: 10px;
  line-height: 27px;
  color: #fff;
  text-align: right;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  transition: width 0.6s ease;
  background-color: #fa5f1d;
  background-size: 40px 40px;
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );

  animation: ${spin} 1s linear infinite;
  border-radius: 2px;
`;

import styled from "styled-components";

import myIconWawew from "../../common/icon/wawew.png";
import myIconWawewb from "../../common/icon/wawewb.png";
import myIconBgcont from "../../common/icon/bgcont.png";
import myMainIcon from "../../common/icon/MainIcon.png";

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

export const Avatar = styled.div`
  background: url(${myMainIcon}) center no-repeat;
  width: 144px;
  height: 144px;
  border-radius: 50%;
  position: absolute;
  right: 140px;
`;

export const ResumeOptionsWrapper = styled.div`
  display: flex;
  position: relative;
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
`;

export const ResumeSkillsValue = styled.div`
  width: ${({ width }) => width}%;
`;

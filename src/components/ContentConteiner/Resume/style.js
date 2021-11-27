import styled from "styled-components";
import { TABLET_959, MOBILE_660 } from "../../common/media";

import myMainIcon from "../../common/icon/MainIcon.png";

export const Avatar = styled.div`
  background: url(${myMainIcon}) center no-repeat;
  width: 144px;
  height: 144px;
  border-radius: 50%;
  position: absolute;
  right: 140px;

  @media ${TABLET_959} {
    position: relative;
    right: 0;
    margin: 0 auto;
  }

  @media ${MOBILE_660} {
    margin: 0 auto;
  }
`;

export const ResumeOptionsWrapper = styled.div`
  display: flex;
  position: relative;

  @media ${TABLET_959} {
    justify-content: center;
    margin: 0 auto;
    justify-content: center;
    flex-direction: column-reverse;
  }

  @media ${MOBILE_660} {
    justify-content: center;
    flex-direction: column-reverse;
  }
`;

export const ResumeStatusWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${MOBILE_660} {
    width: 100%;
  }
`;

export const ResumeCustom = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const ResumeOptions = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
  width: 100%;

  @media ${TABLET_959} {
    flex-direction: column;
    justify-content: center;
  }
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

  @media ${TABLET_959} {
    justify-content: center;
    margin: 0 auto;
  }

  @media ${MOBILE_660} {
    width: 100%;
  }
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

  @media ${TABLET_959} {
    justify-content: center;
    margin: 0 auto;
  }

  @media ${MOBILE_660} {
    width: 100%;
  }
`;

export const ResumeSkills = styled.div`
  display: flex;
  flex-direction: column;
  vertical-align: top;
  text-align: left;
  width: 400px;
  margin-bottom: 20px;
  margin-top: -15px;

  @media ${TABLET_959} {
    justify-content: center;
    margin: 0 auto;
  }

  @media ${MOBILE_660} {
    width: 100%;
  }
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

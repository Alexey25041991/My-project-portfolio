import React, { Fragment } from "react";
import { observer } from "mobx-react";

import { store } from "../../../store";

import {
  ResumeCustom,
  ResumeOptions,
  ResumeStatus,
  ResumeValue,
  ResumeSkills,
  ResumeSkillsLabel,
  ResumeSkillsProgres,
  ResumeSkillsValue,
  ResumeOptionsWrapper,
  ResumeStatusWrapper,
  Avatar,
} from "./style.js";

import "./style.css";

import { propsPortfolioResume } from "./constants";

import { ReactComponent as ResumeIcon } from "../../common/icon/ResumeIcon.svg";

import PageWrapper from "../../common/PageWrapper";
import PageConteiner from "../../common/PageConteiner";
import HeaderTitle from "../../common/HeaderTitle";

const ResumeSkillsLabelValue = (title, numberValue, id) => (
  <Fragment key={id}>
    <ResumeSkillsLabel>{title}</ResumeSkillsLabel>
    <ResumeSkillsProgres className="progress">
      <ResumeSkillsValue className="fill a" width={numberValue}>
        {`${numberValue + "%"}`}
      </ResumeSkillsValue>
    </ResumeSkillsProgres>
  </Fragment>
);

const Resume = observer(() => {
  const { resume } = store.getToggleLang();

  return (
    <PageWrapper dark id="resume">
      <PageConteiner>
        <HeaderTitle dark title={resume.title}>
          <ResumeIcon />
        </HeaderTitle>
        <ResumeCustom>
          <ResumeOptionsWrapper>
            <ResumeStatusWrapper>
              <ResumeOptions>
                <ResumeStatus>{resume.headerStatus}</ResumeStatus>
                <ResumeValue>{resume.status}</ResumeValue>
              </ResumeOptions>
              <ResumeOptions>
                <ResumeStatus>{resume.headerFIO}</ResumeStatus>
                <ResumeValue>{resume.FIO}</ResumeValue>
              </ResumeOptions>
              <ResumeOptions>
                <ResumeStatus>{resume.headerSpecialization}</ResumeStatus>
                <ResumeValue>{resume.specialization}</ResumeValue>
              </ResumeOptions>
            </ResumeStatusWrapper>
            <Avatar />
          </ResumeOptionsWrapper>
          <ResumeOptions>
            <ResumeStatus>{resume.headerSkills}</ResumeStatus>
            <ResumeSkills>
              {propsPortfolioResume.map((item) =>
                ResumeSkillsLabelValue(item.title, item.numberValue, item.id)
              )}
            </ResumeSkills>
          </ResumeOptions>
          <ResumeOptions>
            <ResumeStatus>{resume.headerWorkExperience}</ResumeStatus>
            <ResumeValue>{resume.workExperience}</ResumeValue>
          </ResumeOptions>
          <ResumeOptions>
            <ResumeStatus>{resume.headerEducation}</ResumeStatus>
            <ResumeValue>
              {resume.education1}
              <br />
              {resume.education2}
            </ResumeValue>
          </ResumeOptions>
          <ResumeOptions>
            <ResumeStatus>{resume.headerQuality}</ResumeStatus>
            <ResumeValue>{resume.quality}</ResumeValue>
          </ResumeOptions>
          {/* <ResumeOptions>
          <ResumeStatus>КОНТАКТЫ:</ResumeStatus>
          <ResumeValue>
            Моб.: +7(977)270-09-30 / +7(977)270-09-30
            <br /> Skype: aleks10_0
            <br /> Почта: mazurenko-alexey@mail.ru
          </ResumeValue>
        </ResumeOptions> */}
        </ResumeCustom>
      </PageConteiner>
    </PageWrapper>
  );
});

export default Resume;

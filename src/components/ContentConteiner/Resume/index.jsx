import React, { Fragment } from "react";

import {
  ResumeWrapper,
  ResumeConteiner,
  ResumeHeader,
  ResumeLabel,
  ResumeCustom,
  ResumeOptions,
  ResumeStatus,
  ResumeValue,
  ResumeSkills,
  ResumeSkillsLabel,
  ResumeSkillsProgres,
  ResumeSkillsValue,
  ResumeOptionsWrapper,
  Avatar,
} from "./style.js";

import "./style.css";

import { propsPortfolioResume } from "./constants";

import { ReactComponent as ResumeIcon } from "./icon/ResumeIcon.svg";

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

const Resume = () => (
  <ResumeWrapper id="resume">
    <ResumeConteiner>
      <ResumeHeader>
        <ResumeIcon />
        <ResumeLabel>Резюме</ResumeLabel>
      </ResumeHeader>
      <ResumeCustom>
        <ResumeOptionsWrapper>
          <div>
            <ResumeOptions>
              <ResumeStatus>Статус:</ResumeStatus>
              <ResumeValue>Веб-разработчик</ResumeValue>
            </ResumeOptions>
            <ResumeOptions>
              <ResumeStatus>Ф.И.О.:</ResumeStatus>
              <ResumeValue>Мазуренко Алексей Анатольевич</ResumeValue>
            </ResumeOptions>
            <ResumeOptions>
              <ResumeStatus>СПЕЦИАЛИЗАЦИЯ:</ResumeStatus>
              <ResumeValue>Программирование, разработка.</ResumeValue>
            </ResumeOptions>
          </div>
          <Avatar />
        </ResumeOptionsWrapper>
        <ResumeOptions>
          <ResumeStatus>Навыки:</ResumeStatus>
          <ResumeSkills>
            {propsPortfolioResume.map((item) =>
              ResumeSkillsLabelValue(item.title, item.numberValue, item.id)
            )}
          </ResumeSkills>
        </ResumeOptions>
        <ResumeOptions>
          <ResumeStatus>ОПЫТ РАБОТЫ:</ResumeStatus>
          <ResumeValue>
            Созданием сайтов, версткой и прочее занимаюсь с 2017 года по наст.
            время.
          </ResumeValue>
        </ResumeOptions>
        <ResumeOptions>
          <ResumeStatus>ОБРАЗОВАНИЕ:</ResumeStatus>
          <ResumeValue>
            2008–2012, Московский государственный строительный университет,
            институт фундаментального образования, Математика (бакалавр).
            <br />
            2012–2014, Московский государственный строительный университет,
            институт фундаментального образования, Математика (магистр).
          </ResumeValue>
        </ResumeOptions>
        <ResumeOptions>
          <ResumeStatus>ДЕЛОВЫЕ И ЛИЧНЫЕ КАЧЕСТВА:</ResumeStatus>
          <ResumeValue>
            Собранный и уверенный в своих силах, творчески подхожу к выполнению
            работы. Самодисциплина и способность работать в команде. Всегда
            нахожусь на связи, заинтересован в выполнении быстро и качественно
            работу.
          </ResumeValue>
        </ResumeOptions>
        <ResumeOptions>
          <ResumeStatus>КОНТАКТЫ:</ResumeStatus>
          <ResumeValue>
            Моб.: +7(977)270-09-30 / +7(977)270-09-30
            <br /> Skype: aleks10_0
            <br /> Почта: mazurenko-alexey@mail.ru
          </ResumeValue>
        </ResumeOptions>
      </ResumeCustom>
    </ResumeConteiner>
  </ResumeWrapper>
);

export default Resume;

import React, { Fragment } from 'react';

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
} from './style.js';

import './style.css';

import { propsPortfolioResume } from './constants';

import { ReactComponent as ResumeIcon } from './icon/ResumeIcon.svg';

const ResumeSkillsLabelValue = (title, numberValue, id) => (
  <Fragment key={id}>
    <ResumeSkillsLabel>{title}</ResumeSkillsLabel>
    <ResumeSkillsProgres className="progress">
      <ResumeSkillsValue className="fill a" width={numberValue}>
        {`${numberValue + '%'}`}
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
        <ResumeOptions>
          <ResumeStatus>Навыки:</ResumeStatus>
          <ResumeSkills>
            {propsPortfolioResume.map((item) =>
              ResumeSkillsLabelValue(item.title, item.numberValue, item.id)
            )}
            {/* {ResumeSkillsLabelValue('HTML / CSS', 85)}
            {ResumeSkillsLabelValue('Javascript', 85)}
            {ResumeSkillsLabelValue('React', 75)}
            {ResumeSkillsLabelValue('React-Native', 65)}
            {ResumeSkillsLabelValue('Next.js', 55)}
            {ResumeSkillsLabelValue('TypeScript', 65)}
            {ResumeSkillsLabelValue('Mob-X', 75)}
            {ResumeSkillsLabelValue('Redux', 75)}
            {ResumeSkillsLabelValue('Redux-Saga', 55)}
            {ResumeSkillsLabelValue('Pug', 65)}
            {ResumeSkillsLabelValue('Bootstrap', 75)}
            {ResumeSkillsLabelValue('Webpack', 60)}
            {ResumeSkillsLabelValue('Jest', 60)}
            {ResumeSkillsLabelValue('Node.js', 60)}
            {ResumeSkillsLabelValue('Docker', 40)}
            {ResumeSkillsLabelValue('Photoshop / Figma', 90)}
            {ResumeSkillsLabelValue('Git / Bitbucket', 70)} */}
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
          <ResumeStatus>ЦЕНА НА САЙТ, ДИЗАЙН:</ResumeStatus>
          <ResumeValue>
            На сайте цен нет — каждый сайт или логотип индивидуальный и цены
            могут кардинально отличатся. С радостью отвечу на все Ваши вопросы,
            постараюсь сделать прикидки по ценам на создание сайта и другие
            работы.
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

import React from 'react';

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

// import style from './style.css';

import { ReactComponent as ResumeIcon } from './icon/ResumeIcon.svg';

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
            <ResumeSkillsLabel>HTML / CSS</ResumeSkillsLabel>
            <ResumeSkillsProgres>
              <ResumeSkillsValue width={85}>85%</ResumeSkillsValue>
            </ResumeSkillsProgres>

            <ResumeSkillsLabel>Javascript</ResumeSkillsLabel>
            <ResumeSkillsProgres>
              <ResumeSkillsValue width={85}>85%</ResumeSkillsValue>
            </ResumeSkillsProgres>

            <ResumeSkillsLabel>React</ResumeSkillsLabel>
            <ResumeSkillsProgres>
              <ResumeSkillsValue width={75}>75%</ResumeSkillsValue>
            </ResumeSkillsProgres>

            <ResumeSkillsLabel>React-Native</ResumeSkillsLabel>
            <ResumeSkillsProgres>
              <ResumeSkillsValue width={65}>65%</ResumeSkillsValue>
            </ResumeSkillsProgres>

            <ResumeSkillsLabel>Next.js</ResumeSkillsLabel>
            <ResumeSkillsProgres>
              <ResumeSkillsValue width={55}>55%</ResumeSkillsValue>
            </ResumeSkillsProgres>

            <ResumeSkillsLabel>TypeScript</ResumeSkillsLabel>
            <ResumeSkillsProgres>
              <ResumeSkillsValue width={65}>65%</ResumeSkillsValue>
            </ResumeSkillsProgres>

            <ResumeSkillsLabel>Mob-X</ResumeSkillsLabel>
            <ResumeSkillsProgres>
              <ResumeSkillsValue width={75}>75%</ResumeSkillsValue>
            </ResumeSkillsProgres>

            <ResumeSkillsLabel>Redux</ResumeSkillsLabel>
            <ResumeSkillsProgres>
              <ResumeSkillsValue width={75}>75%</ResumeSkillsValue>
            </ResumeSkillsProgres>

            <ResumeSkillsLabel>Redux-Saga</ResumeSkillsLabel>
            <ResumeSkillsProgres>
              <ResumeSkillsValue width={55}>55%</ResumeSkillsValue>
            </ResumeSkillsProgres>

            <ResumeSkillsLabel>Pug</ResumeSkillsLabel>
            <ResumeSkillsProgres>
              <ResumeSkillsValue width={65}>65%</ResumeSkillsValue>
            </ResumeSkillsProgres>

            <ResumeSkillsLabel>Bootstrap</ResumeSkillsLabel>
            <ResumeSkillsProgres>
              <ResumeSkillsValue width={75}>75%</ResumeSkillsValue>
            </ResumeSkillsProgres>

            <ResumeSkillsLabel>Webpack</ResumeSkillsLabel>
            <ResumeSkillsProgres>
              <ResumeSkillsValue width={60}>60%</ResumeSkillsValue>
            </ResumeSkillsProgres>

            <ResumeSkillsLabel>Jest</ResumeSkillsLabel>
            <ResumeSkillsProgres>
              <ResumeSkillsValue width={60}>60%</ResumeSkillsValue>
            </ResumeSkillsProgres>

            <ResumeSkillsLabel>Node.js</ResumeSkillsLabel>
            <ResumeSkillsProgres>
              <ResumeSkillsValue width={60}>60%</ResumeSkillsValue>
            </ResumeSkillsProgres>

            <ResumeSkillsLabel>Docker</ResumeSkillsLabel>
            <ResumeSkillsProgres>
              <ResumeSkillsValue width={40}>40%</ResumeSkillsValue>
            </ResumeSkillsProgres>

            <ResumeSkillsLabel>Photoshop / Figma</ResumeSkillsLabel>
            <ResumeSkillsProgres>
              <ResumeSkillsValue width={90}>90%</ResumeSkillsValue>
            </ResumeSkillsProgres>

            <ResumeSkillsLabel>Git / Bitbucket</ResumeSkillsLabel>
            <ResumeSkillsProgres>
              <ResumeSkillsValue width={70}>70%</ResumeSkillsValue>
            </ResumeSkillsProgres>
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

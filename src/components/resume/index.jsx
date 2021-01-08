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
  <ResumeWrapper>
    <ResumeConteiner>
      <ResumeHeader>
        <ResumeIcon />
        <ResumeLabel>Резюме</ResumeLabel>
      </ResumeHeader>
      <ResumeCustom>
        <ResumeOptions>
          <ResumeStatus>Статус:</ResumeStatus>
          <ResumeValue>Веб-разработчик, фрилансер</ResumeValue>
        </ResumeOptions>
        <ResumeOptions>
          <ResumeStatus>Ф.И.О.:</ResumeStatus>
          <ResumeValue>Мазуренко Алексей Анатольевич</ResumeValue>
        </ResumeOptions>
        <ResumeOptions>
          <ResumeStatus>СПЕЦИАЛИЗАЦИЯ:</ResumeStatus>
          <ResumeValue>
            Сайт-визитка, интернет магазин, сайт каталог, корпоративный сайт,
            промо сайт, landing page, сайт под ключ, верстка e-mail рассылок и
            доработка функциональности сайтов.
          </ResumeValue>
        </ResumeOptions>
        <ResumeOptions>
          <ResumeStatus>Навыки:</ResumeStatus>
          <ResumeSkills>
            <ResumeSkillsLabel>HTML / CSS</ResumeSkillsLabel>
            <ResumeSkillsProgres>
              <ResumeSkillsValue width={100}>100%</ResumeSkillsValue>
            </ResumeSkillsProgres>

            <ResumeSkillsLabel>Javascript / jQuery / AJAX</ResumeSkillsLabel>
            <ResumeSkillsProgres>
              <ResumeSkillsValue width={85}>85%</ResumeSkillsValue>
            </ResumeSkillsProgres>

            <ResumeSkillsLabel>PHP / MySQL</ResumeSkillsLabel>
            <ResumeSkillsProgres>
              <ResumeSkillsValue width={80}>80%</ResumeSkillsValue>
            </ResumeSkillsProgres>

            <ResumeSkillsLabel>
              Photoshop / Illustrator / Flash
            </ResumeSkillsLabel>
            <ResumeSkillsProgres>
              <ResumeSkillsValue width={90}>90%</ResumeSkillsValue>
            </ResumeSkillsProgres>
          </ResumeSkills>
        </ResumeOptions>
        <ResumeOptions>
          <ResumeStatus>ОПЫТ РАБОТЫ:</ResumeStatus>
          <ResumeValue>
            Созданием сайтов, версткой и прочее занимаюсь с 2011 года по наст.
            время.
          </ResumeValue>
        </ResumeOptions>
        <ResumeOptions>
          <ResumeStatus>ОБРАЗОВАНИЕ:</ResumeStatus>
          <ResumeValue>
            2004–2007, Электромеханик, среднее-техническое, Политехнический
            техникум 2007–2012, Экономический кибернетик, бакалавр, Открытый
            межрегиональный университет развития человека "Украина" 2007–2012,
            Дизайнер компьютерной графики, Компьютерная Академия "ШАГ".
          </ResumeValue>
        </ResumeOptions>
        <ResumeOptions>
          <ResumeStatus>ДЕЛОВЫЕ И ЛИЧНЫЕ КАЧЕСТВА:</ResumeStatus>
          <ResumeValue>
            Собранный и уверенный в своих силах, планирую выполнение работы,
            творчески подхожу к выполнению ТЗ, самодисциплина и способность
            работать в команде. Всегда нахожусь на связи и никуда никогда не
            пропадаю, заинтересован в постоянных заказчиках.
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
            Моб.: +3(066)912-69-37 (Viber. Whatsapp) Skype: biomax1988.
          </ResumeValue>
        </ResumeOptions>
      </ResumeCustom>
    </ResumeConteiner>
  </ResumeWrapper>
);

export default Resume;

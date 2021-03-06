import React from 'react';

import {
  ServicesWrapper,
  ServicesConteiner,
  ServicesHeader,
  ServicesLabel,
  ServicesCustom,
  ServicesText,
  ServicesSection,
} from './style.js';

import { ReactComponent as ServicesIcon } from './icon/ServicesIcon.svg';

const Services = () => (
  <ServicesWrapper id="services">
    <ServicesConteiner>
      <ServicesHeader>
        <ServicesIcon />
        <ServicesLabel>Услуги и сотрудничество</ServicesLabel>
      </ServicesHeader>
      <ServicesCustom>
        <ServicesSection>
          <ServicesText>
            Предлагаю профессиональные услуги высокого качества в создании
            сайтов, веб разработке, оптимизации, дизайне, создании фирменного
            стиля и др. услуг, а также консалтинг в сфере веб-технологий на
            взаимовыгодных условиях.
          </ServicesText>
          <ServicesText>
            На сайте цен нет — каждый сайт или логотип индивидуальный и цены
            могут кардинально отличатся. С радостью отвечу на все Ваши вопросы,
            постараюсь сделать прикидки по ценам на создание сайта и другие
            работы.
          </ServicesText>
          <ServicesText>
            Я открыт для любых предложений на предмет сотрудничества по
            разработке.
          </ServicesText>
          <ServicesText>
            Вы получите именно тот сайт который хотели!
          </ServicesText>
        </ServicesSection>
      </ServicesCustom>
    </ServicesConteiner>
  </ServicesWrapper>
);

export default Services;

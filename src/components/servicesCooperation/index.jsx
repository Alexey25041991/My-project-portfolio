import React from 'react';

import {
  ServicesWrapper,
  ServicesConteiner,
  ServicesHeader,
  ServicesLabel,
  ServicesCustom,
  ServicesText,
} from './style.js';

import { ReactComponent as ServicesIcon } from './icon/ServicesIcon.svg';

const ServicesCooperation = () => (
  <ServicesWrapper>
    <ServicesConteiner>
      <ServicesHeader>
        <ServicesIcon />
        <ServicesLabel>Услуги и сотрудничество</ServicesLabel>
      </ServicesHeader>
      <ServicesCustom>
        <ServicesText>
          Предлагаю профессиональные услуги высокого качества в создании сайтов,
          веб разработке, оптимизации, дизайне, создании фирменного стиля и др.
          услуг, а также консалтинг в сфере веб-технологий на взаимовыгодных
          условиях.
        </ServicesText>
        <ServicesText>
          Я открыт для любых предложений на предмет сотрудничества по
          разработке.
        </ServicesText>
        <ServicesText>Вы получите именно тот сайт который хотели!</ServicesText>
      </ServicesCustom>
    </ServicesConteiner>
  </ServicesWrapper>
);

export default ServicesCooperation;

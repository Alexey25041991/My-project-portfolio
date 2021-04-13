import React from 'react';

import {
  ServiseListWrapper,
  ServiseListConteiner,
  ServiseListHeader,
  ServiseListLabel,
  ServiseListCustom,
  ServiseListOptions,
  Ul,
  LiFir,
  Li,
  LiLas,
} from './style.js';

import { ReactComponent as ServiseListIcon } from './icon/ServiseListIcon.svg';

const ServiseList = () => (
  <ServiseListWrapper>
    <ServiseListConteiner>
      <ServiseListHeader>
        <ServiseListIcon />
        <ServiseListLabel>Перечень услуг</ServiseListLabel>
      </ServiseListHeader>
      <ServiseListCustom>
        <ServiseListOptions>
          <Ul>
            <LiFir>
              Помощь в составлении технического задания для сайта и пр..
            </LiFir>
            <Li>Разработка проекта с нуля и поддержка его после.</Li>
            <Li>
              Наполнение сайта Вашим контентом: товарами интернет-магазина,
              текстовой информацией, графической информации.
            </Li>
            <Li>
              Установка, доработка дополнительного функционала: форум,
              фотогалерея, интернет-магазин, слайдер, карта сайта, формы для
              связи и т.д.
            </Li>
            <LiLas>
              Оптимизация сайта: скорость загрузки, оптимизация сайта для лучшей
              индексации поисковыми системами: HTML и CSS валидация,
              корректировка кода и пр..
            </LiLas>
          </Ul>
        </ServiseListOptions>
      </ServiseListCustom>
    </ServiseListConteiner>
  </ServiseListWrapper>
);

export default ServiseList;

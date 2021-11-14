import React from "react";

import {
  ServiseListCustom,
  ServiseListOptions,
  Ul,
  LiFir,
  Li,
  LiLas,
} from "./style.js";

import { ReactComponent as ServiseListIcon } from "../../common/icon/ServiseListIcon.svg";

import PageWrapper from "../../common/PageWrapper";
import PageConteiner from "../../common/PageConteiner";
import HeaderTitle from "../../common/HeaderTitle";

const ServiseList = () => (
  <PageWrapper dark>
    <PageConteiner>
      <HeaderTitle dark title="Перечень услуг">
        <ServiseListIcon />
      </HeaderTitle>
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
    </PageConteiner>
  </PageWrapper>
);

export default ServiseList;

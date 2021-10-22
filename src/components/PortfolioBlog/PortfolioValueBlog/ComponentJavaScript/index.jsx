import React from "react";

import {
  PersonalWrapper,
  PersonalConteiner,
  PersonalHeader,
  // PersonalHeaderCustom,
  PersonalCustom,
  PersonalText,
  PersonalSection,
  PersonalHeaderJs,
} from "./style.js";

import "./style.css";

const ComponentJavaScript = () => (
  <>
    <PersonalWrapper id="person">
      <PersonalConteiner>
        <PersonalHeader className="titleText">
          Великий и ужасный
          <PersonalHeaderJs className="javaScript">JavaScript</PersonalHeaderJs>
          &mdash; основано на реальных событиях &mdash;
        </PersonalHeader>
        <PersonalCustom>
          {/* <PersonalHeaderCustom>подробнее обо мне</PersonalHeaderCustom> */}
          <PersonalText>
            На моем сайте <b>веб-разработчика</b> в портфолио представлены
            проекты, которые я разработал в сотрудничестве с веб-студиями так и
            для частных клиентов, а также несколько личных проектов. Основная
            масса проектов содержит индивидуальные функции предназначенные для
            реализации особенностей работы веб-сайта.
          </PersonalText>
          <PersonalSection>
            <PersonalText>
              Помимо созданных сайтов в портфолио, мной также разработаны
              различные калькуляторы, сложные формы обратной связи,
              многоуровневое меню, слайдера изображений, отзывов и тд.,
              исправлений различных ошибок на сайтах, оптимизация загрузки
              сайта, наполнение сайта до 15000 товаров, материалом (текстовой
              информацией) и многое другое...
            </PersonalText>
            <PersonalText>
              В моем портфолио веб-разработчика указано название сайта, ссылка
              на сайт, цель сайта и описание выполненной работы. Если
              потребуется могу предоставить доказательства на то что это я делал
              все сайты с моего портфолио.
            </PersonalText>
          </PersonalSection>
        </PersonalCustom>
      </PersonalConteiner>
    </PersonalWrapper>
  </>
);

export default ComponentJavaScript;

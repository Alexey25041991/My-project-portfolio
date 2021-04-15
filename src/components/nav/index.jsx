import React from 'react';

import { NavWrapper, Ul, Li, Link, Label, LogoSign } from './style';

import { ReactComponent as PersonIcon } from './icon/PersonIcon.svg';
import { ReactComponent as ResumeIcon } from './icon/ResumeIcon.svg';
import { ReactComponent as PortfolioIcon } from './icon/PortfolioIcon.svg';
import { ReactComponent as ServicesIcon } from './icon/ServicesIcon.svg';
import { ReactComponent as BlogIcon } from './icon/BlogIcon.svg';
import { ReactComponent as СontactsIcon } from './icon/СontactsIcon.svg';
import { ReactComponent as СooperationIcon } from './icon/СooperationIcon.svg';
import { ReactComponent as ScaleIcon } from './icon/ScaleIcon.svg';

const Nav = () => (
  <NavWrapper>
    <Ul>
      <Li>
        <Link href={'#'}>
          <LogoSign>{`${'< / >'}`}</LogoSign>
          <Label>Дом</Label>
        </Link>
      </Li>
      <Li>
        <Link href={'#advantages'}>
          <ScaleIcon width={28} height={28} fill="#ffff" />
          <Label>Преимущества</Label>
        </Link>
      </Li>
      <Li>
        <Link href={'#person'}>
          <PersonIcon width={28} height={28} fill="#ffff" />
          <Label>Обо мне</Label>
        </Link>
      </Li>
      <Li>
        <Link href={'#resume'}>
          <ResumeIcon />
          <Label>Резюме</Label>
        </Link>
      </Li>
      <Li>
        <Link href={'#services'}>
          <ServicesIcon />
          <Label>Услуги</Label>
        </Link>
      </Li>
      <Li>
        <Link href={'#portfolio'}>
          <PortfolioIcon />
          <Label>Портфолио</Label>
        </Link>
      </Li>
      <Li>
        <Link href={'#cooperation'}>
          <СooperationIcon />
          <Label>Сотрудничество</Label>
        </Link>
      </Li>
      <Li>
        <Link href={'#blog'}>
          <BlogIcon />
          <Label>Блог</Label>
        </Link>
      </Li>
      <Li>
        <Link href={'#contacts'}>
          <СontactsIcon />
          <Label>Контакты</Label>
        </Link>
      </Li>
    </Ul>
  </NavWrapper>
);

export default Nav;

import React from 'react';

import Tooltip from '@material-ui/core/Tooltip';

import { NavWrapper, Ul, Li, Link, LogoSign } from './style';

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
        <Tooltip arrow title="Дом" placement="right">
          <Link href={'/#'}>
            <LogoSign>{`${'< / >'}`}</LogoSign>
          </Link>
        </Tooltip>
      </Li>
      <Li>
        <Tooltip arrow title="Преимущества" placement="right">
          <Link href={'/#advantages'}>
            <ScaleIcon width={28} height={28} fill="#ffff" />
          </Link>
        </Tooltip>
      </Li>
      <Li>
        <Tooltip arrow title="Обо мне" placement="right">
          <Link href={'/#person'}>
            <PersonIcon width={28} height={28} fill="#ffff" />
          </Link>
        </Tooltip>
      </Li>
      <Li>
        <Tooltip arrow title="Резюме" placement="right">
          <Link href={'/#resume'}>
            <ResumeIcon />
          </Link>
        </Tooltip>
      </Li>
      <Li>
        <Tooltip arrow title="Услуги" placement="right">
          <Link href={'/#services'}>
            <ServicesIcon />
          </Link>
        </Tooltip>
      </Li>
      <Li>
        <Tooltip arrow title="Портфолио" placement="right">
          <Link href={'/#portfolio'}>
            <PortfolioIcon />
          </Link>
        </Tooltip>
      </Li>
      <Li>
        <Tooltip arrow title="Сотрудничество" placement="right">
          <Link href={'/#cooperation'}>
            <СooperationIcon />
          </Link>
        </Tooltip>
      </Li>
      <Li>
        <Tooltip arrow title="Блог" placement="right">
          <Link href={'/#blog'}>
            <BlogIcon />
          </Link>
        </Tooltip>
      </Li>
      <Li>
        <Tooltip arrow title="Контакты" placement="right">
          <Link href={'/#contacts'}>
            <СontactsIcon />
          </Link>
        </Tooltip>
      </Li>
    </Ul>
  </NavWrapper>
);

export default Nav;

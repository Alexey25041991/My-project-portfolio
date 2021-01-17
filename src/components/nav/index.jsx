import React from 'react';

import { NavWrapper, Ul, Li, Link, Label } from './style';

import { ReactComponent as ResumeIcon } from './icon/ResumeIcon.svg';
import { ReactComponent as PortfolioIcon } from './icon/PortfolioIcon.svg';
import { ReactComponent as ServicesIcon } from './icon/ServicesIcon.svg';
import { ReactComponent as BlogIcon } from './icon/BlogIcon.svg';
import { ReactComponent as СontactsIcon } from './icon/СontactsIcon.svg';

const Nav = () => (
  <NavWrapper>
    <Ul>
      <Li>
        <Link href={`${'#'}`}>
          <ResumeIcon />
          <Label>Привет</Label>
        </Link>
      </Li>
      <Li>
        <Link href={`${'#'}`}>
          <PortfolioIcon />
          <Label>Привет</Label>
        </Link>
      </Li>
      <Li>
        <Link href={`${'#'}`}>
          <ServicesIcon />
          <Label>Привет</Label>
        </Link>
      </Li>
      <Li>
        <Link href={`${'#'}`}>
          <BlogIcon />
          <Label>Привет</Label>
        </Link>
      </Li>
      <Li>
        <Link href={`${'#'}`}>
          <СontactsIcon />
          <Label>Привет</Label>
        </Link>
      </Li>
    </Ul>
  </NavWrapper>
);

export default Nav;

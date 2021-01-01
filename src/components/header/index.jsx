import React from 'react';

import { HeaderWrapper } from './style';

import HeaderTop from './components/headerTop';
import HeaderSection from './components/headerSection';

const HeaderConteiner = () => (
  <HeaderWrapper>
    <HeaderTop />
    <HeaderSection />
  </HeaderWrapper>
);

export default HeaderConteiner;

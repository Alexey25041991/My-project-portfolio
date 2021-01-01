import React from 'react';

import {
  HeaderTopWrapper,
  HeaderLog,
  HeaderLogSign,
  HeaderLogCoder,
  HeaderLogCoderLabel,
  HeaderLogCoderText,
  HeaderMenu,
  Ul,
  Li,
  Link,
  Label,
} from './style';

import { propsHeaderMenu } from './constants';

const HeaderMenuLi = (propsHeaderMenu) =>
  propsHeaderMenu.map((item) => (
    <Li key={item.id}>
      <Link href={`${'#' + item.value}`}>
        {item.icon}
        <Label>{item.label}</Label>
      </Link>
    </Li>
  ));

const HeaderTop = () => (
  <HeaderTopWrapper>
    <HeaderLog>
      <HeaderLogSign> {`${'< >'}`} </HeaderLogSign>
      <HeaderLogCoder>
        <HeaderLogCoderLabel>CODER-OLDBOY</HeaderLogCoderLabel>
        <HeaderLogCoderText>Портфолио веб-разработчика</HeaderLogCoderText>
      </HeaderLogCoder>
    </HeaderLog>
    <HeaderMenu>
      <Ul>{HeaderMenuLi(propsHeaderMenu)}</Ul>
    </HeaderMenu>
  </HeaderTopWrapper>
);

export default HeaderTop;

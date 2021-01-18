import React from 'react';

import {
  Logo,
  LogoSign,
  LogoCoder,
  LogoCoderLabel,
  LogoCoderText,
} from './style';

const LogoLook = () => (
  <Logo>
    <LogoSign> {`${'< >'}`} </LogoSign>
    <LogoCoder>
      <LogoCoderLabel>CODER-fanatic</LogoCoderLabel>
      <LogoCoderText>Портфолио веб-разработчика</LogoCoderText>
    </LogoCoder>
  </Logo>
);

export default LogoLook;

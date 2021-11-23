import React from "react";

import {
  Logo,
  LogoSign,
  LogoCoder,
  LogoCoderLabel,
  LogoCoderText,
} from "./style";

const LogoLook = () => (
  <Logo>
    <LogoSign> {`${"< / >"}`} </LogoSign>
    <LogoCoder>
      <LogoCoderLabel>it-web-master</LogoCoderLabel>
      <LogoCoderText>Портфолио разработчика</LogoCoderText>
    </LogoCoder>
  </Logo>
);

export default LogoLook;

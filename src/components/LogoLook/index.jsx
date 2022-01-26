import React from "react";

import { Logo, LogoSign, LaykoWayWrapper } from "./style";
import { ReactComponent as LaykoWay } from "../common/icon/LaykoWay.svg";

const LogoLook = () => (
  <Logo>
    <LogoSign>
      {`${"lyak"}`}
      <LaykoWayWrapper>
        <LaykoWay width={46} height={46} />
      </LaykoWayWrapper>
      {`${"way"}`}
    </LogoSign>
  </Logo>
);

export default LogoLook;

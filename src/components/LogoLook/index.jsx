import React from "react";

import { Logo, LogoSign, LaykoWayWrapper } from "./style";
import { ReactComponent as LaykoWayLightIcon } from "../common/icon/LaykoWayLightIcon.svg";

const LogoLook = () => (
  <Logo>
    <LogoSign>
      {`${"lyak"}`}
      <LaykoWayWrapper>
        <LaykoWayLightIcon width={42} height={42} />
      </LaykoWayWrapper>
      {`${"way"}`}
    </LogoSign>
  </Logo>
);

export default LogoLook;

import React from "react";

import { Link } from "react-router-dom";

import { Logo, LogoSign, LaykoWayWrapper } from "./style";
import { ReactComponent as LaykoWayLightIcon } from "../common/icon/LaykoWayLightIcon.svg";

const LogoLook = () => (
  <Link to="/">
    <Logo>
      <LogoSign>
        {`${"lyak"}`}
        <LaykoWayWrapper>
          <LaykoWayLightIcon width={42} height={42} />
        </LaykoWayWrapper>
        {`${"way"}`}
      </LogoSign>
    </Logo>
  </Link>
);

export default LogoLook;

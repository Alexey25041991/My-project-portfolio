import React from "react";

import { ThemeDarkLightWrapper } from "./style";
import "./style.css";

const ThemeDarkLight = ({ opened, handleClick, positionStyle }) => (
  <ThemeDarkLightWrapper onClick={handleClick} positionStyle={positionStyle}>
    <input type="checkbox" checked={opened} onChange={() => console.log("")} />
  </ThemeDarkLightWrapper>
);

export default ThemeDarkLight;

import React, { useEffect } from "react";

import { ThemeDarkLightWrapper } from "./style";
import "./style.css";
import { store } from "../../../store";

const ThemeDarkLight = ({ opened, handleClick, positionStyle, dayTime }) => {
  useEffect(() => {
    store.setToggleTheme(dayTime ? opened : !opened);
  }, [opened, dayTime]);

  return (
    <ThemeDarkLightWrapper id="themeDarkLight" positionStyle={positionStyle}>
      <input
        type="checkbox"
        defaultChecked={!opened}
        onClick={handleClick}
        onChange={() => store.setCheckedTheme(dayTime ? !opened : opened)}
      />
    </ThemeDarkLightWrapper>
  );
};

export default ThemeDarkLight;

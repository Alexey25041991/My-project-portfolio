import React from "react";

import { ThemeDarkLightWrapper } from "./style";
import "./style.css";
import { store } from "../../../store";

const ThemeDarkLight = ({ opened, handleClick, positionStyle }) => {
  store.setToggleTheme(opened);

  return (
    <ThemeDarkLightWrapper
      id="themeDarkLight"
      onClick={handleClick}
      positionStyle={positionStyle}
    >
      <input
        type="checkbox"
        checked={!opened}
        onChange={() => console.log("")}
      />
    </ThemeDarkLightWrapper>
  );
};

export default ThemeDarkLight;

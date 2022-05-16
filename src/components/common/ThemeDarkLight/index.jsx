import React, { useEffect } from "react";

import { ThemeDarkLightWrapper } from "./style";
import "./style.css";
import { store } from "../../../store";

const ThemeDarkLight = ({ opened, handleClick, positionStyle }) => {
  useEffect(() => {
    store.setToggleTheme(opened);
  }, [opened]);

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

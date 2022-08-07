import React, { useEffect } from "react";

import { ThemeDarkLightWrapper } from "./style";
import "./style.css";
import { store } from "../../../store";

const ThemeDarkLight = ({ opened, handleClick, positionStyle }) => {
  useEffect(() => {
    store.setToggleTheme(opened);
  }, [opened]);

  return (
    <ThemeDarkLightWrapper id="themeDarkLight" positionStyle={positionStyle}>
      <input
        type="checkbox"
        defaultChecked={!opened}
        onClick={handleClick}
        // onChange={() => store.setCheckedTheme(!opened)}
      />
    </ThemeDarkLightWrapper>
  );
};

export default ThemeDarkLight;

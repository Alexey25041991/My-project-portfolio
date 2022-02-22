import React, { useState } from "react";
import { Popup } from "semantic-ui-react";

import ButtonElement from "../ButtonElement";
import ButtonHeart from "../ButtonHeart";
import ThemeDarkLight from "../ThemeDarkLight";

import { PopupWrapper } from "./style";
import "./style.css";

const PopupSetting = ({ children, positionValue, handleClickPopup }) => {
  const [opened, setOpened] = useState(false);
  const positionStyle = positionValue === "top right";
  return (
    <Popup
      content={
        <PopupWrapper positionStyle={positionStyle}>
          <ButtonHeart positionStyle={positionStyle} />
          <ThemeDarkLight
            opened={opened}
            handleClick={() => setOpened(!opened)}
            positionStyle={positionStyle}
          />
          <ButtonElement positionStyle={positionStyle} />
        </PopupWrapper>
      }
      className="popupSetting"
      on="click"
      position={positionValue}
      trigger={children}
      onMount={handleClickPopup}
    />
  );
};

PopupSetting.defaultProps = {
  handleClickPopup: () => {},
  positionValue: "top right",
  children: null,
};

export default PopupSetting;

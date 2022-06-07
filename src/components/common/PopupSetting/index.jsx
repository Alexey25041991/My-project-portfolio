import React, { useState, useEffect } from "react";
import { Popup } from "semantic-ui-react";

import ButtonElement from "../ButtonElement";
import ButtonHeart from "../ButtonHeart";
import ThemeDarkLight from "../ThemeDarkLight";

import { getDayTime } from "../../common/utils";

import { PopupWrapper } from "./style";
import "./style.css";

const PopupSetting = ({ children, positionValue, handleClickPopup }) => {
  const [openedTheme, setOpenedTheme] = useState(false);
  const [openedEnglish, setOpenedEnglish] = useState(false);
  const positionStyle = positionValue === "top right";

  const dayTime = getDayTime();

  useEffect(() => {
    setOpenedTheme(!dayTime);
  }, [dayTime]);

  return (
    <Popup
      content={
        <PopupWrapper positionStyle={positionStyle}>
          <ButtonHeart positionStyle={positionStyle} />
          <ThemeDarkLight
            opened={openedTheme}
            handleClick={() => setOpenedTheme(!openedTheme)}
            positionStyle={positionStyle}
          />
          <ButtonElement
            opened={openedEnglish}
            handleClick={() => setOpenedEnglish(!openedEnglish)}
            positionStyle={positionStyle}
          />
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

import React, { useState, useEffect } from "react";
import { Popup } from "semantic-ui-react";
import { observer } from "mobx-react";
import { store } from "../../../store";

import ButtonElement from "../ButtonElement";
import ButtonHeart from "../ButtonHeart";
import ThemeDarkLight from "../ThemeDarkLight";

import { getDayTime } from "../../common/utils";

import { PopupWrapper } from "./style";
import "./style.css";

const PopupSetting = observer(
  ({ children, positionValue, handleClickPopup }) => {
    const [openedTheme, setOpenedTheme] = useState(false);
    const [openedEnglish, setOpenedEnglish] = useState(false);
    const positionStyle = positionValue === "top right";

    const time = store.getTime();
    const dayTime = getDayTime(time).dayTime;
    useEffect(() => {
      setOpenedTheme(!dayTime);
    }, [dayTime]);

    const handleClickTheme = () => {
      setOpenedTheme(!openedTheme);
      store.setCheckedTheme(!openedTheme);
    };

    return (
      <Popup
        content={
          <PopupWrapper positionStyle={positionStyle}>
            <ButtonHeart positionStyle={positionStyle} />
            <ThemeDarkLight
              opened={openedTheme}
              handleClick={handleClickTheme}
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
  }
);

PopupSetting.defaultProps = {
  handleClickPopup: () => {},
  positionValue: "top right",
  children: null,
};

export default PopupSetting;

import React, { useState, useEffect, useCallback } from "react";
import { observer } from "mobx-react";
import styled from "styled-components";

import { store } from "../../../../../store";
import WeatherIcon from "../WeatherIcon";

// import ModalAnimation from "../ModalAnimation";

import {
  ContentWrapper,
  Overlay,
  Header,
  HeaderText,
  IconClose,
  Content,
  ContentRadio,
  ContentAnimation,
  Footer,
  ModalComponent,
  ModalSectionWrapper,
  ModalSection,
  ContentText,
  WeatherIconWrapper,
} from "./style";

import "./style.css";

import { getwindowInnerWidth } from "../../../../common/utils/getwindowInnerWidth";

import { ReactComponent as CloseOutline } from "../../../../common/icon/CloseOutline.svg";
import { ReactComponent as FooterMailIcon } from "../../../../common/icon/MailDarkIcon.svg";

import { CLIMATE_CONTROL } from "./constants";

const ModalСlimateСontrol = observer(
  ({ opened = false, onRequestClose, theme }) => {
    const [isClimateСontro, setIsClimateСontrol] = useState("sunnyMoon");

    useEffect(() => {
      if (opened) {
        store.setOpenToastModal(false);
      }
    }, [opened]);

    useEffect(() => {
      store.setClimateСontrol(isClimateСontro);
    }, [isClimateСontro]);

    const handleClose = (e) => {
      e.stopPropagation();
      onRequestClose && onRequestClose();
    };

    const handleOverlayClick = (e) => {
      if (
        opened &&
        e.target.closest("[data-close-border]") &&
        !e.target.closest("[data-close-modal]")
      ) {
        handleClose(e);
      }
    };

    useEffect(() => {
      const positionValueWidth = getwindowInnerWidth() < 659;
      if (positionValueWidth) {
        if (opened) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
      }
    }, [opened]);

    return (
      opened && (
        <Overlay data-close-border opened={opened} onClick={handleOverlayClick}>
          <ModalComponent data-close-modal>
            <Header>
              <FooterMailIcon
                width={24}
                height={24}
                fill={theme === "light" ? "#2b3037" : "#fff"}
              />
              <HeaderText>Погодные условия</HeaderText>
            </Header>
            <IconClose onClick={handleClose}>
              <CloseOutline width={24} height={24} />
            </IconClose>
            <ModalSectionWrapper>
              <ModalSection>
                {CLIMATE_CONTROL.map((item) => (
                  <WeatherIconWrapper
                    key={item}
                    onClick={() => setIsClimateСontrol(item)}
                  >
                    <WeatherIcon сlimateСontrol={item} theme={theme} />
                  </WeatherIconWrapper>
                ))}
              </ModalSection>
            </ModalSectionWrapper>
          </ModalComponent>
        </Overlay>
      )
    );
  }
);

export default ModalСlimateСontrol;

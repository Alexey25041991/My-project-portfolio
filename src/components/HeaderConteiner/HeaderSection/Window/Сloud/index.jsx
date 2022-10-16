import React from "react";
import { observer } from "mobx-react";

// import { store } from '../../../../store';

import { CloudWrapper, PuffCloud, RainWrapper, Rain } from "./style";
import "./style.css";

const Cloud = observer(() => {
  const randomNumber = (min, max) =>
    Math.round(Math.random() * (max - min) + min);

  const randomArra = (length, min, max) =>
    Array(length)
      .fill()
      .map(() => {
        return {
          top: randomNumber(min, max),
          left: randomNumber(min, max),
          animationDuration: randomNumber(26, 80),
        };
      });

  return randomArra(12, -80, 120).map((item, index) => (
    <CloudWrapper
      top={item.top}
      left={item.left}
      animationDuration={item.animationDuration}
      key={index}
    >
      {randomArra(10, 14, 40).map((itemPuff, i) => (
        <PuffCloud top={itemPuff.top} left={itemPuff.left} key={i} />
      ))}
      <RainWrapper id="rain-wrapper">
        <Rain id="rain" />
      </RainWrapper>
    </CloudWrapper>
  ));
});

export default Cloud;

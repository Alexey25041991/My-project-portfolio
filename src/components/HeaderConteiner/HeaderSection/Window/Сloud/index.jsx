import React from "react";
import { observer } from "mobx-react";

// import { store } from '../../../../store';

import WeatherRain from "./WeatherRain";

import { CloudWrapper, PuffCloud } from "./style";
// import "./style.css";
import { getRandomArra } from "../../../../common/utils";

const Cloud = observer(() => {
  return getRandomArra(16, -80, 120, 26, 80).map((item, index) => (
    <CloudWrapper
      key={index}
      top={item.top}
      left={item.left}
      animationDuration={item.animationDuration}
    >
      {getRandomArra(10, 14, 40).map((itemPuff, i) => (
        <PuffCloud
          key={i}
          top={itemPuff.top}
          left={itemPuff.left}
          topCloud={item.top}
        />
      ))}
      <WeatherRain
        dropAmount={20}
        leftMin={0}
        leftMax={32}
        fallTimeMin={10}
        fallTimeMax={20}
        top={item.top}
      />
    </CloudWrapper>
  ));
});

export default Cloud;

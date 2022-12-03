import React from "react";
import { observer } from "mobx-react";

// import { store } from '../../../../store';

import WeatherRain from "./WeatherRain";
import PuffCloud from "./PuffCloud";

import { CloudWrapper } from "./style";
// import "./style.css";
import { getRandomArra } from "../../../../common/utils";

const Cloud = observer(() => {
  // const weatherValue = Number(weather);
  // console.log(222, weatherValue);
  return getRandomArra(20, -80, 120, 26, 80).map((item, index) => (
    <CloudWrapper
      key={index}
      top={item.top}
      left={item.left}
      animationDuration={item.animationDuration}
    >
      <PuffCloud
        dropAmount={10}
        min={14}
        max={40}
        fallTimeMin={8}
        fallTimeMax={12}
      />
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

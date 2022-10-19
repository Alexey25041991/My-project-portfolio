import React from "react";
import { observer } from "mobx-react";

// import { store } from '../../../../store';

import { getRandomArra } from "../../../../../common/utils";

import { RainWrapper, Rain, Drop } from "./style";

const WeatherRain = observer(
  ({ dropAmount, leftMin, leftMax, fallTimeMin, fallTimeMax }) => (
    <RainWrapper data-rain-wrapper>
      <Rain data-rain>
        {getRandomArra(
          dropAmount,
          leftMin,
          leftMax,
          fallTimeMin,
          fallTimeMax
        ).map((itemDrop, i) => (
          <Drop
            left={itemDrop.left}
            animationDuration={itemDrop.animationDuration / 18}
            key={i}
          />
        ))}
      </Rain>
    </RainWrapper>
  )
);

export default WeatherRain;

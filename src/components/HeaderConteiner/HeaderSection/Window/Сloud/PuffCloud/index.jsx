import React from "react";
import { observer } from "mobx-react";

// import { store } from '../../../../store';

import { getRandomArra, getRandomNumber } from "../../../../../common/utils";

import { PuffCloudPattern } from "./style";

const PuffCloud = observer(
  ({ dropAmount, min, max, fallTimeMin, fallTimeMax }) => {
    return getRandomArra(dropAmount, min, max, fallTimeMin, fallTimeMax).map(
      (itemPuff, i) => {
        const leftRandom = getRandomNumber(itemPuff.top, itemPuff.left);
        const topRandom = getRandomNumber(itemPuff.top, itemPuff.left);
        return (
          <PuffCloudPattern
            key={i}
            top={itemPuff.top}
            left={itemPuff.left}
            animationDuration={itemPuff.animationDuration}
            leftRandom={leftRandom}
            topRandom={topRandom}
          />
        );
      }
    );
  }
);

export default PuffCloud;

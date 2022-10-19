import React from "react";
import { observer } from "mobx-react";

// import { store } from '../../../../store';

import { CloudWrapper, PuffCloud, RainWrapper, Rain, Drop } from "./style";
import "./style.css";

const Cloud = observer(() => {
  const randomNumber = (min, max) =>
    Math.round(Math.random() * (max - min) + min);

  // const randomArra1 = (length, min, max) =>
  //   Array(length)
  //     .fill()
  //     .map(() => randomNumber(min, max) / 20);
  // console.log(111, randomArra1(20, 10, 20));

  const randomArra = (length, min, max, t1, t2) =>
    Array(length)
      .fill()
      .map(() => {
        return {
          top: randomNumber(min, max),
          left: randomNumber(min, max),
          animationDuration: randomNumber(t1, t2),
        };
      });

  return randomArra(16, -80, 120, 26, 80).map((item, index) => (
    <CloudWrapper
      top={item.top}
      left={item.left}
      animationDuration={item.animationDuration}
      key={index}
    >
      {randomArra(10, 14, 40).map((itemPuff, i) => (
        <PuffCloud top={itemPuff.top} left={itemPuff.left} key={i} />
      ))}
      <RainWrapper data-rain-wrapper>
        <Rain data-rain>
          {randomArra(20, 0, 32, 10, 20).map((itemDrop, i) => (
            <Drop
              left={itemDrop.left}
              animationDuration={itemDrop.animationDuration / 18}
              key={i}
            />
          ))}
        </Rain>
      </RainWrapper>
    </CloudWrapper>
  ));
});

export default Cloud;

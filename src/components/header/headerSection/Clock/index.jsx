import React, { useState } from "react";

import { ClockWrapper, Hour, Min, Sec } from "./style";

const Clock = () => {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const deg = 6;

  setInterval(() => {
    let day = new Date();
    setHour(day.getHours() * 30);
    setMin(day.getMinutes() * deg);
    setSec(day.getSeconds() * deg);
  });

  return (
    <ClockWrapper>
      <Hour style={{ transform: `rotateZ(${hour + min / 12}deg)` }} id="hr" />
      <Min style={{ transform: `rotateZ(${min}deg)` }} id="mn" />
      <Sec style={{ transform: `rotateZ(${sec}deg)` }} id="sc" />>
    </ClockWrapper>
  );
};

export default Clock;

import React, { useEffect, useState } from "react";
// import { store } from "../../../../store";

import { getDayTime } from "../../../common/utils";
// import { observer } from "mobx-react";
// import { store } from "../../../../store";

import { HeavenlyBody, HeavenlyBodyClikTeme } from "./style";
import "./style.css";

const Window = ({ theme, time, checkedTheme }) => {
  const [animationClikTeme, setAnimationClikTeme] = useState(false);
  const [animationCheckedTheme, setAnimationCheckedTheme] = useState(true);
  const [timeLeftSunMoon, setTimeLeftSunMoon] = useState(0);
  const [percentRemainingSunMoon, setPercentRemainingSunMoon] = useState(0);
  // const [leftWindowSunMoon, setLeftWindowSunMoon] = useState(-60);
  const [leftRotateWindowSunMoon, setLeftRotateWindowSunMoon] = useState(-60);

  // проверка что день
  const dayTime = getDayTime(time).dayTime;
  // восход в секунадх
  const sunriseStr = getDayTime(time).sunriseStr * 60;
  // закат в секундах
  const sunsetStr = getDayTime(time).sunsetStr * 60;
  // текущее время в секундах
  const timesHouse = getDayTime(time).timesHouse * 60;

  // сколько процентов осталось до захода солнца от дна
  const percentRemainingSunValue = Math.round(
    ((sunsetStr - timesHouse) * 100) / (sunsetStr - sunriseStr)
  );

  // сколько времени осталось до захода солца в секундах
  const timesSunsetStr = Math.abs(sunsetStr - timesHouse);

  // констатнта для добавления расчтета сикунда анимации для определения продолжительности (пока вынуждено так для учета времени если перевалило за 24:00)
  const timeDeltaMoon = Math.abs(86400 - sunsetStr);
  // сколько времени осталось до захода луны
  const timesMoon =
    timesHouse <= sunriseStr
      ? Math.abs(sunriseStr - timesHouse)
      : Math.abs(86400 - timesHouse + sunriseStr);
  // 86400 - timesHouse + sunriseStr
  // сколько процентов осталось до захода луны
  const percentRemainingMoonValue = Math.round(
    (timesMoon * 100) / (sunriseStr + timeDeltaMoon)
  );

  // сколько в процентах пути прошло солце и луна
  const lenghtLeftSunMoon = 100 - percentRemainingSunMoon;

  useEffect(() => {
    setAnimationCheckedTheme(checkedTheme);
    setAnimationClikTeme(true);
  }, [checkedTheme]);

  useEffect(() => {
    setAnimationClikTeme(false);
  }, []);

  // useEffect(() => {
  //   console.log("theme", theme, dayTime, timeLeftSunMoon);
  //   const day =
  //     (dayTime && theme === "light") ||
  //     (dayTime === false && theme !== "light");
  //   console.log("day", day);
  //   setAnimationClikTeme(!animationClikTeme);
  // }, [theme]);

  useEffect(() => {
    if (dayTime) {
      setTimeLeftSunMoon(timesSunsetStr);
      setPercentRemainingSunMoon(percentRemainingSunValue);
    } else {
      setTimeLeftSunMoon(timesMoon);
      setPercentRemainingSunMoon(percentRemainingMoonValue);
    }

    // ширина окна
    const windowView = document?.querySelector(".window-view");
    if (windowView) {
      // const windowViewWidth = windowView.offsetWidth;
      // расположение солнца или луны от левого края окна по горизонтали
      // 25 половина солнца и луны
      // setLeftWindowSunMoon(
      //   Math.abs(
      //     windowViewWidth -
      //       Math.round((windowViewWidth * percentRemainingSunMoon) / 100) -
      //       25
      //   )
      // );

      // расположение солнца или луны в градусах от левого края окна
      // длина пройденного пути в грудах = 120 по ширине окна
      // расчет сколько крадусов прошел от левого края в соотношения процентов ко времени половины дня (так как значение должно быть отрицательно и уменьшатся от -60 в первую половину дня и потом до 60)
      if (lenghtLeftSunMoon <= 50) {
        const leftRotate = Math.round((60 * lenghtLeftSunMoon) / 50) - 60;
        setLeftRotateWindowSunMoon(leftRotate);
      } else {
        const leftRotate = Math.abs(
          60 - Math.round((60 * lenghtLeftSunMoon) / 50)
        );
        setLeftRotateWindowSunMoon(leftRotate);
      }
    }
  }, [
    percentRemainingMoonValue,
    percentRemainingSunMoon,
    percentRemainingSunValue,
    timesMoon,
    timesSunsetStr,
    dayTime,
    lenghtLeftSunMoon,
  ]);

  // const heavenlyBody = document?.querySelector(".heavenly-body");
  // const heavenlyBody = document?.querySelector("[data-heavenly-body]");
  // useEffect(() => {
  // console.log(111, theme, heavenlyBody);
  // if (theme === "light") {
  //   if (heavenlyBody) {
  //     heavenlyBody.classList.remove("sun");
  //     heavenlyBody.classList.add("moon");
  //   }
  // } else {
  //   heavenlyBody.classList.remove("moon");
  //   heavenlyBody.classList.add("sun");
  // }
  //   setAnimation(!animation);
  // }, [theme]);

  // function checkClass() {
  //   if ($(heavenlyBody).hasClass('sun')) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // var heavenlyBody = $('.heavenly-body');
  // $(heavenlyBody).addClass('sun');

  // function sunToMoon() {
  //   if (checkClass()) {
  //     $(heavenlyBody).removeClass('sun');
  //     $(heavenlyBody).addClass('moon');
  //   } else {
  //     $(heavenlyBody).removeClass('moon');
  //     $(heavenlyBody).addClass('sun');
  //   }
  // }

  // var timer = setTimeout(function tick() {
  //   sunToMoon();
  //   timer = setTimeout(tick, 4000);
  // }, 4000);

  return (
    <div className="window-scene">
      <div className="window">
        <div className="window-view">
          {animationClikTeme && (
            <HeavenlyBodyClikTeme
              data-heavenly-body
              animationCheckedTheme={animationCheckedTheme}
              theme={theme}
              timeLeftSunMoon={timeLeftSunMoon}
              leftRotateWindowSunMoon={leftRotateWindowSunMoon}
            />
          )}
          {!animationClikTeme && (
            <HeavenlyBody
              data-heavenly-body
              theme={theme}
              timeLeftSunMoon={timeLeftSunMoon}
              leftRotateWindowSunMoon={leftRotateWindowSunMoon}
            />
          )}

          {/* <div className="container">
            <div className="sun"></div>
            <div className="moon"></div>
          </div> */}

          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>
          <div className="cloud cloud-4"></div>
          <div className="cloud cloud-5"></div>
          <div className="star star-1"></div>
          <div className="star star-2"></div>
          <div className="star star-3"></div>
          <div className="star star-4"></div>
          <div className="star star-5"></div>
          <div className="star star-6"></div>
          <div className="star star-7"></div>
          <div className="ground-light"></div>
          <div className="ground"></div>
          <div className="tree tree-big"></div>
          <div className="tree tree-small tree-small-1"></div>
          <div className="tree tree-small tree-small-2"></div>
          <div className="tree tree-long"></div>
        </div>
        <div className="window-hotspot"></div>
        <div className="window-frame"></div>
        <div className="window-sill"></div>
      </div>
      <div className="window-light window-light-left"></div>
      <div className="window-light window-light-right"></div>
    </div>
  );
};

export default Window;
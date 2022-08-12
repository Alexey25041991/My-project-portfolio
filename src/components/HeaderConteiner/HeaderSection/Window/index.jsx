import React, { useEffect, useState } from "react";
// import { store } from "../../../../store";

import { getDayTime } from "../../../common/utils";
// import { observer } from "mobx-react";
// import { store } from "../../../../store";

import {
  HeavenlyBody,
  WindowLightLeft,
  WindowLightRight,
  WindowHotspot,
  WindowView,
} from "./style";
import "./style.css";

const Window = ({ theme, time, checkedTheme }) => {
  const [animationClikTeme, setAnimationClikTeme] = useState(false);
  const [animationCheckedTheme, setAnimationCheckedTheme] = useState(true);
  const [timeLeftSunMoon, setTimeLeftSunMoon] = useState(0);
  const [percentRemainingSunMoon, setPercentRemainingSunMoon] = useState(0);
  // const [leftWindowSunMoon, setLeftWindowSunMoon] = useState(-60);
  const [leftRotateWindowSunMoon, setLeftRotateWindowSunMoon] = useState(-60);
  const [lightOffOpacitySun, setLightOffOpacitySun] = useState(0);
  const [lightOffOpacityMoon, setLightOffOpacityMoon] = useState(0);
  const [lightOffOpacity, setLightOffOpacity] = useState(0);
  const [dayToNightColor, setDayToNightColor] = useState("#0c2233");

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

  // сколько прошло солце или луна
  // const lightOff = Math.round((lenghtLeftSunMoon * 120) / 100);
  // сколько прошло солце или луна от полного круга 360deg в прроцентах (всего 33%)
  // const lightOffPercent = Math.round((lightOff * 100) / 360);

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
      setAnimationCheckedTheme(animationCheckedTheme);
    } else {
      setTimeLeftSunMoon(timesMoon);
      setPercentRemainingSunMoon(percentRemainingMoonValue);
      setAnimationCheckedTheme(!animationCheckedTheme);
    }

    const lightOffOpacityValue =
      theme === "light" ? lightOffOpacitySun : lightOffOpacityMoon;
    setLightOffOpacity(lightOffOpacityValue);

    const dayToNightColorValue = theme === "light" ? "#88bef5" : "#0c2233";
    setDayToNightColor(dayToNightColorValue);

    // ширина окна
    const windowView = document?.querySelector("[data-window-view]");
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
        //какую яркость задать от пройденного процента по кругу 360deg для 1
        if (theme === "light") {
          setLightOffOpacitySun(lenghtLeftSunMoon / 50);
        } else {
          // для 0.4
          setLightOffOpacityMoon((lenghtLeftSunMoon * 0.4) / 50);
        }
      } else {
        const leftRotate = Math.abs(
          60 - Math.round((60 * lenghtLeftSunMoon) / 50)
        );
        setLeftRotateWindowSunMoon(leftRotate);
        //какую яркость задать от пройденного процента по кругу 360deg для 1
        if (theme === "light") {
          setLightOffOpacitySun(2 - lenghtLeftSunMoon / 50);
        } else {
          // для 0.4
          setLightOffOpacityMoon(0.8 - (lenghtLeftSunMoon * 0.4) / 50);
        }
      }
    }
  }, [
    percentRemainingMoonValue,
    percentRemainingSunMoon,
    percentRemainingSunValue,
    timesMoon,
    timesSunsetStr,
    dayTime,
    theme,
    lenghtLeftSunMoon,
    lightOffOpacitySun,
    lightOffOpacityMoon,
    animationCheckedTheme,
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
        <WindowView
          data-window-view
          dayToNightColor={dayToNightColor}
          timeLeftSunMoon={timeLeftSunMoon}
          animationCheckedTheme={animationCheckedTheme}
          animationClikTeme={animationClikTeme}
        >
          <HeavenlyBody
            data-heavenly-body
            theme={theme}
            timeLeftSunMoon={timeLeftSunMoon}
            leftRotateWindowSunMoon={leftRotateWindowSunMoon}
            animationClikTeme={animationClikTeme}
            animationCheckedTheme={animationCheckedTheme}
          />

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
        </WindowView>
        {/* <div className="window-hotspot"></div> */}
        <WindowHotspot
          lightOffOpacity={lightOffOpacity}
          timeLeftSunMoon={timeLeftSunMoon}
          animationCheckedTheme={animationCheckedTheme}
          lightOffOpacitySun={lightOffOpacitySun}
          lightOffOpacityMoon={lightOffOpacityMoon}
          animationClikTeme={animationClikTeme}
        />
        <div className="window-frame"></div>
        <div className="window-sill"></div>
      </div>

      <WindowLightLeft
        lightOffOpacity={lightOffOpacity}
        timeLeftSunMoon={timeLeftSunMoon}
        animationCheckedTheme={animationCheckedTheme}
        lightOffOpacitySun={lightOffOpacitySun}
        lightOffOpacityMoon={lightOffOpacityMoon}
        animationClikTeme={animationClikTeme}
      />
      <WindowLightRight
        lightOffOpacity={lightOffOpacity}
        timeLeftSunMoon={timeLeftSunMoon}
        animationCheckedTheme={animationCheckedTheme}
        lightOffOpacitySun={lightOffOpacitySun}
        lightOffOpacityMoon={lightOffOpacityMoon}
        animationClikTeme={animationClikTeme}
      />

      {/* <div className="window-light window-light-left"></div>
      <div className="window-light window-light-right"></div> */}
    </div>
  );
};

export default Window;

import styled, { css, keyframes } from "styled-components";
// import { TABLET_959, MOBILE_660 } from "../../../common/media";

const heavenlyBodyMoveClikSun = (leftRotateWindowSunMoon) => keyframes`
  from {
    transform: rotate(${leftRotateWindowSunMoon}deg);
    background: #fff;
    box-shadow: 0 0 10px 2px #fff;
  }
  25% {
    background: #fff;
    box-shadow: 0 0 10px 2px #fff;
  }
  50% {
    background: #fff82f;
    box-shadow: 0 0 10px 2px #fff82f;
  }
  to {
    transform: rotate(${360 + leftRotateWindowSunMoon}deg);
    background: #fff82f;
    box-shadow: 0 0 10px 2px #fff82f;
  }
`;

const heavenlyBodyMoveClikMoon = (leftRotateWindowSunMoon) => keyframes`
  from {
    transform: rotate(${leftRotateWindowSunMoon}deg);
    background: #fff82f;
    box-shadow: 0 0 10px 2px #fff82f;
  }
  25% {
    background: #fff82f;
    box-shadow: 0 0 10px 2px #fff82f;
  }
  50% {
    background: #fff;
    box-shadow: 0 0 10px 2px #fff;
  }
  to {
    transform: rotate(${360 + leftRotateWindowSunMoon}deg);
    background: #fff;
    box-shadow: 0 0 10px 2px #fff;
  }
`;

const heavenlyBodyMove = (leftRotateWindowSunMoon) => keyframes`
  from {
    transform: rotate(${leftRotateWindowSunMoon}deg);
  }
  to {
    transform: rotate(60deg);
  }
`;

const lightOff = (lightOffOpacity) => keyframes`
  from { 
    opacity: ${lightOffOpacity};
  }
  to {
    opacity: ${lightOffOpacity};
  }
`;

const lightOffSun = (lightOffOpacitySun, lightOffOpacityMoon) => keyframes`
  from { 
    opacity: ${lightOffOpacityMoon};
  }
  33% {
    opacity: 0;
  }
  70% {
    opacity: 0;
  }
  to {
    opacity: ${lightOffOpacitySun};
  }
`;

const lightOffMoon = (lightOffOpacitySun, lightOffOpacityMoon) => keyframes`
  from {
    opacity: ${lightOffOpacitySun};
  }
  33% {
    opacity: 0;
  }
  70% {
    opacity: 0;
  }
  to {
    opacity: ${lightOffOpacityMoon};
  }
`;

// const lightOff = keyframes`
// from {
//   opacity: 0;
// }
// 25% {
//   opacity: 1;
// }
// 50% {
//   opacity: 0;
// }
// 75% {
//   opacity: 0.3;
// }
// to {
//   opacity: 0;
// }
// `;

// const heavenlyBodyMove = (leftWindowSunMoon) => keyframes`
//   from {
//     top: 55px;
//     left: ${leftWindowSunMoon.leftWindowSunMoon}px;
//   }
//   15% {
//     top: 45px;
//   }
//   33% {
//     top: 30px;
//   }
//   40% {
//     top: 25px;
//   }
//   50% {
//     top: 20px;
//   }
//   60 {
//     top: 25px;
//   }
//   66% {
//     top: 30px;
//   }
//   85% {
//     top: 45px;
//   }
//   to {
//     top: 55px;
//     left: 270px;
//   }
// `;

export const HeavenlyBody = styled.div`
  position: absolute;
  left: 86px;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  animation-duration: ${(props) =>
    props.animationClikTeme ? "4s" : props.timeLeftSunMoon + "s"};
  ${(props) =>
    props.animationClikTeme
      ? css`
          animation-name: ${props.animationCheckedTheme
            ? heavenlyBodyMoveClikMoon(props.leftRotateWindowSunMoon)
            : heavenlyBodyMoveClikSun(props.leftRotateWindowSunMoon)};
        `
      : css`
          animation-name: ${heavenlyBodyMove(props.leftRotateWindowSunMoon)};
        `};
  animation-timing-function: linear;
  animation-iteration-count: ${(props) =>
    props.animationClikTeme ? 1 : "infinite"};

  // в случае переключение темы
  animation-fill-mode: forwards;
  -webkit-animation-timing-function: ease-in-out;

  background: #fff;
  box-shadow: 0 0 10px 2px #fff;

  transform-origin: 50% 400%;
  margin-top: 5%;

  ${({ theme }) =>
    theme === "light" &&
    css`
      background: #fff82f;
      box-shadow: 0 0 10px 2px #fff82f;
    `}
`;

export const WindowLight = styled.div`
  position: absolute;
  top: 11px;
  width: 135px;
  height: 395px;
  z-index: 1;
  ${(props) =>
    props.animationClikTeme
      ? css`
          animation-name: ${props.animationCheckedTheme
            ? lightOffMoon(props.lightOffOpacitySun, props.lightOffOpacityMoon)
            : lightOffSun(props.lightOffOpacitySun, props.lightOffOpacityMoon)};
        `
      : css`
          animation-name: ${lightOff(props.lightOffOpacity)};
        `};
  animation-duration: ${(props) =>
    props.animationClikTeme ? "4s" : props.timeLeftSunMoon + "s"};
  animation-timing-function: linear;
  animation-iteration-count: ${(props) =>
    props.animationClikTeme ? 1 : "infinite"};
  animation-fill-mode: forwards;

  // в случае переключение темы
  -webkit-animation-timing-function: ease-in-out;
`;

export const WindowLightLeft = styled(WindowLight)`
  left: -72px;
  transform: rotate(20deg);
  background-image: linear-gradient(
    20deg,
    rgba(255, 255, 255, 0) 10%,
    rgba(255, 255, 255, 0.5)
  );
`;

export const WindowLightRight = styled(WindowLight)`
  left: 198px;
  transform: rotate(-20deg);
  background-image: linear-gradient(
    -20deg,
    rgba(255, 255, 255, 0) 10%,
    rgba(255, 255, 255, 0.5)
  );
`;

export const WindowHotspot = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 2;
  width: 220px;
  height: 300px;
  background: transparent;
  background-image: linear-gradient(
    to right top,
    transparent 60%,
    rgba(255, 255, 255, 0.1) 60%,
    rgba(255, 255, 255, 0.1) 70%,
    transparent 70%,
    transparent 73%,
    rgba(255, 255, 255, 0.1) 73%,
    rgba(255, 255, 255, 0.1) 76%,
    transparent 76%
  );
  ${(props) =>
    props.animationClikTeme
      ? css`
          animation-name: ${props.animationCheckedTheme
            ? lightOffMoon(props.lightOffOpacitySun, props.lightOffOpacityMoon)
            : lightOffSun(props.lightOffOpacitySun, props.lightOffOpacityMoon)};
        `
      : css`
          animation-name: ${lightOff(props.lightOffOpacity)};
        `};
  animation-duration: ${(props) =>
    props.animationClikTeme ? "4s" : props.timeLeftSunMoon + "s"};
  animation-timing-function: linear;
  animation-iteration-count: ${(props) =>
    props.animationClikTeme ? 1 : "infinite"};
  animation-fill-mode: forwards;
`;

const dayToNight = (dayToNightColor) => keyframes`
  from {
    background: ${dayToNightColor};
  }
  to {
    background: ${dayToNightColor};
  }
`;

const dayToNightSun = keyframes`
  from { 
    background: #88bef5;
  }
  16% {
    background: #88bef5;
  }
  33% {
    background: #88bef5;
  }
  70% {
    background: #0c2233;
  }
  85% {
    background: #0c2233;
  }
  to {
    background: #0c2233;
  }
`;

const dayToNightMoon = keyframes`
  from { 
    background: #0c2233;
  }
  16% {
    background: #0c2233;
  }
  33% {
    background: #0c2233;
  }
  70% {
    background: #88bef5;
  }
  85% {
    background: #88bef5;
  }
  to {
    background: #88bef5;
  }
`;

export const WindowView = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  width: 222px;
  height: 300px;
  background: #88bef5;
  z-index: 1;
  overflow: hidden;
  ${(props) =>
    props.animationClikTeme
      ? css`
          animation-name: ${props.animationCheckedTheme
            ? dayToNightSun
            : dayToNightMoon};
        `
      : css`
          animation-name: ${dayToNight(props.dayToNightColor)}};
        `};
  animation-duration: ${(props) =>
    props.animationClikTeme ? "4s" : props.timeLeftSunMoon + "s"};
  animation-timing-function: linear;
  animation-iteration-count: ${(props) =>
    props.animationClikTeme ? 1 : "infinite"};
  animation-fill-mode: forwards;
`;

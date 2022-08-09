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
  100% {
    opacity: ${lightOffOpacity};
  }
`;

const lightOffSun = (lightOffOpacity) => keyframes`
  from { 
    opacity: ${lightOffOpacity};
  }
  33% {
    opacity: 0;
  }
  70% {
    opacity: 0;
  }
  to {
    opacity: ${lightOffOpacity};
  }
`;

const lightOffMoon = (lightOffOpacity) => keyframes`
  from {
    opacity: ${lightOffOpacity};
  }
  33% {
    opacity: 0;
  }
  70% {
    opacity: 0;
  }
  to {
    opacity: ${lightOffOpacity};
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

  animation-duration: ${(props) => props.timeLeftSunMoon + "s"};
  animation-name: ${(props) => heavenlyBodyMove(props.leftRotateWindowSunMoon)};
  animation-timing-function: linear;
  animation-iteration-count: infinite;

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

export const HeavenlyBodyClikTeme = styled.div`
  position: absolute;
  left: 86px;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  animation-duration: 4s;
  animation-name: ${(props) =>
    props.animationCheckedTheme
      ? heavenlyBodyMoveClikMoon(props.leftRotateWindowSunMoon)
      : heavenlyBodyMoveClikSun(props.leftRotateWindowSunMoon)};
  animation-timing-function: linear;
  animation-iteration-count: 1;

  // в случае переключение темы
  animation-fill-mode: forwards;
  -webkit-animation-timing-function: ease-in-out;

  transform-origin: 50% 400%;
  margin-top: 5%;

  ${({ theme }) =>
    theme === "light" &&
    css`
      background: #fff82f;
      box-shadow: 0 0 10px 2px #fff82f;
    `}
`;

export const WindowLightClikTeme = styled.div`
  position: absolute;
  top: 11px;
  width: 135px;
  height: 395px;
  z-index: 1;
  animation-name: ${(props) =>
    props.animationCheckedTheme
      ? lightOffMoon(props.lightOffOpacity)
      : lightOffSun(props.lightOffOpacity)};
  animation-duration: 4s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  // в случае переключение темы
  animation-fill-mode: forwards;
  -webkit-animation-timing-function: ease-in-out;
`;

export const WindowLightLeftClikTeme = styled(WindowLightClikTeme)`
  left: -72px;
  transform: rotate(20deg);
  background-image: linear-gradient(
    20deg,
    rgba(255, 255, 255, 0) 10%,
    rgba(255, 255, 255, 0.5)
  );
`;

export const WindowLightRightClikTeme = styled(WindowLightClikTeme)`
  left: 198px;
  transform: rotate(-20deg);
  background-image: linear-gradient(
    -20deg,
    rgba(255, 255, 255, 0) 10%,
    rgba(255, 255, 255, 0.5)
  );
`;

export const WindowLight = styled.div`
  position: absolute;
  top: 11px;
  width: 135px;
  height: 395px;
  z-index: 1;
  animation-name: ${(props) => lightOff(props.lightOffOpacity)};
  animation-duration: ${(props) => props.timeLeftSunMoon};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
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

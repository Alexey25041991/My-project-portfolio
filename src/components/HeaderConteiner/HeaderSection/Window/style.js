import styled, { css, keyframes } from "styled-components";
// import { TABLET_959, MOBILE_660 } from "../../../common/media";

const heavenlyBodyMoveClik = (leftRotateWindowSunMoon) => keyframes`
  from {
    transform: rotate(${leftRotateWindowSunMoon}deg);
  }
  to {
    transform: rotate(${360 + leftRotateWindowSunMoon}deg);
  }
}`;

const heavenlyBodyMove = (leftRotateWindowSunMoon) => keyframes`
  from {
    transform: rotate(${leftRotateWindowSunMoon}deg);
  }
  to {
    transform: rotate(60deg);
  }
}`;

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
  animation-name: ${(props) =>
    props.animationClikTeme
      ? heavenlyBodyMoveClik(props.leftRotateWindowSunMoon)
      : heavenlyBodyMove(props.leftRotateWindowSunMoon)};
  animation-timing-function: linear;
  animation-iteration-count: ${(props) =>
    props.animationClikTeme ? "1" : "infinite"};

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

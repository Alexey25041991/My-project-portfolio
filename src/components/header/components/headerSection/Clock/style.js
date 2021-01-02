// import styled, { css, keyframes } from 'styled-components';
import styled from 'styled-components';

import myIconClock from './icon/clock.png';
import myIconJs from './icon/js.png';

export const ClockWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${myIconClock}), url(${myIconJs}),
    radial-gradient(
      circle,
      rgb(37, 73, 90) 0%,
      rgb(25, 48, 60) 11%,
      rgba(9, 25, 33, 1) 38%
    );
  background-size: cover;
  border-radius: 50%;
  // box-shadow: 0 -15px 15px rgba(134, 134, 134, 0.35), inset 0 -15px 15px #191919,
  //   0 15px 15px rgba(134, 134, 134, 0.35), inset 0 15px 15px #191919;
  display: flex;
  width: 118px;
  height: 118px;
  position: absolute;
  top: 114px;
  left: 287px;
  &:before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: #ffffff;
    border-radius: 50%;
    z-index: 999;
  }
`;

export const Hour = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  position: absolute;
  border-radius: 50%;
  &:before {
    content: '';
    position: absolute;
    width: 3px;
    height: 32px;
    background-color: #ffc600;
    z-index: 10;
    border-radius: 6px 6px 0 0;
  }
`;

export const Min = styled(Hour)`
  width: 60px;
  height: 60px;
  &:before {
    content: '';
    position: absolute;
    width: 2px;
    height: 38px;
    background-color: #fff;
    z-index: 11;
    border-radius: 6px 6px 0 0;
  }
`;

export const Sec = styled(Hour)`
  width: 72px;
  height: 72px;
  &:before {
    content: '';
    position: absolute;
    width: 1px;
    height: 50px;
    background-color: #fff;
    z-index: 12;
    border-radius: 6px 6px 0 0;
  }
`;

import React, { useState } from "react";
import styled, { css } from "styled-components";

export const RadioScaleAnimation = css`
  @keyframes heartbeat {
    0% {
      transform: scale(0.75);
    }
    20% {
      transform: scale(1);
    }
    40% {
      transform: scale(0.75);
    }
    60% {
      transform: scale(1);
    }
    80% {
      transform: scale(0.75);
    }
    100% {
      transform: scale(0.75);
    }
  }
`;

const ButtonLikeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  -webkit-tap-highlight-color: transparent;

  position: relative;
  background: none;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;

  width: 16px;
  height: 16px;
  &:hover {
    animation: heartbeat 1s infinite;
  }
  margin: 0 auto;

  &:before,
  &:after {
    position: absolute;
    content: "";
    left: 7px;
    top: 0;
    width: 8px;
    height: 12px;
    background: #fff;
    -moz-border-radius: 50px 50px 0 0;
    border-radius: 50px 50px 0 0;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: 0 100%;
    -moz-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    -o-transform-origin: 0 100%;
    transform-origin: 0 100%;
  }
  &:after {
    left: 0;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    -o-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }

  &:hover:before {
    background: red;
  }
  &:hover:after {
    background: red;
  }
  ${RadioScaleAnimation}
`;

const Label = styled.div`
  font-size: 12px;
  font-family: "Exo 2", sans-serif;
  margin-left: 5px;
  color: white;
`;

const ButtonLike = () => {
  const [counter, setСounter] = useState(20);

  const handleClick = () => {
    setСounter(counter + 1);
  };

  return (
    <ButtonLikeWrapper>
      <ButtonWrapper onClick={handleClick} />
      <Label>{counter}</Label>
    </ButtonLikeWrapper>
  );
};

export default ButtonLike;

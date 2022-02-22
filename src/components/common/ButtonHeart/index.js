import styled from "styled-components";

import { Icon } from "semantic-ui-react";

import { MOBILE_660 } from "../media";

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${({ positionStyle }) => (positionStyle ? "10px" : "0")};
  margin-top: ${({ positionStyle }) => (positionStyle ? "0" : "10px")};

  -webkit-tap-highlight-color: transparent;

  position: relative;

  background: none;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;

  color: #eee;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;

  &::after {
    content: "";
    position: absolute;
    top: -1em;
    bottom: -1em;
    left: -1em;
    right: -1em;
    border-radius: 4em;
    box-shadow: 0 0 0px rgba(0, 0, 0, 0.4), inset 0 0 0px rgba(0, 0, 0, 0.4);
    transition: box-shadow 0.3s;
  }

  &:hover,
  &:focus {
    span {
      background-color: lighten($orange, 3%);
    }
  }
  &:active {
    span {
      background-color: $orange;
      transform: scale(0.97);
      box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.2);
    }
    &::after {
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.4),
        inset -3px 3px 1em rgba(0, 0, 0, 0.4);
    }
  }

  @media ${MOBILE_660} {
    margin: 0 auto;
    margin-top: 10px;
  }
`;

const Label = styled.div`
  position: absolute;
  color: white;
  line-height: 17px;
  font-size: 10px;
  font-weight: 400;
  font-family: "Exo 2", sans-serif;
  text-transform: uppercase;
  text-align: center;
  margin-left: 28px;
  margin-top: 30px;
`;

const ButtonHeart = ({ handleClick, positionStyle }) => {
  return (
    <ButtonWrapper onClick={handleClick} positionStyle={positionStyle}>
      <Icon name="heart" color="red" size="large" />
      <Label>20</Label>
    </ButtonWrapper>
  );
};

export default ButtonHeart;

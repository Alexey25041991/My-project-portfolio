import styled from "styled-components";

import { ReactComponent as LangEnglishIcon } from "../icon/lang/gb.svg";

const ButtonWrapper = styled.button`
  display: flex;
  -webkit-tap-highlight-color: transparent;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 16px;
  width: 40px;
  height: 40px;
  background-color: #2b3037;
  border-radius: 8px;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    box-shadow 0px 15px 25px -5px rgba(darken(dodgerblue, 40%));
    transform scale(1.03);
  }
  &:active {
    box-shadow 0px 4px 8px rgba(darken(dodgerblue, 30%));
    transform scale(.98);
  }
`;

const Label = styled.div`
  color: white;
  line-height: 17px;
  font-size: 14px;
  font-weight: 400;
  font-family: "Exo 2", sans-serif;
  text-transform: uppercase;
  text-align: center;
  margin-left: 12px;
  margin-top: 5px;
`;

const ButtonElement = ({ children, title, handleClick }) => {
  return (
    <ButtonWrapper onClick={handleClick}>
      {children}
      <LangEnglishIcon />
      {title && <Label>{title}</Label>}
    </ButtonWrapper>
  );
};

export default ButtonElement;

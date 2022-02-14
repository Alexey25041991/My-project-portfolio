import styled, { css } from "styled-components";

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
  width: 260px;
  height: 44px;
  background-color: #2b3037;
  border-radius: 8px;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    background-color: #ff8560;
    box-shadow 0px 15px 25px -5px rgba(darken(dodgerblue, 40%));
    transform scale(1.03);
  }
  &:active {
    box-shadow 0px 4px 8px rgba(darken(dodgerblue, 30%));
    transform scale(.98);
  }
  ${({ toOrder }) =>
    toOrder &&
    css`
      border: 2px solid white;
      box-shadow: none;
    `}
  ${({ toOrderHeader }) =>
    toOrderHeader &&
    css`
      width: 260px;
      background-color: #ff8560;
      box-shadow: none;
      &:hover {
        background-color: #fa5f1d;
      }
      border: 2px solid white;
      margin-top: 0;
    `}
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

const Button = ({ children, title, toOrder, toOrderHeader, handleClick }) => {
  return (
    <ButtonWrapper
      toOrder={toOrder}
      toOrderHeader={toOrderHeader}
      onClick={handleClick}
    >
      {children}
      {title && <Label>{title}</Label>}
    </ButtonWrapper>
  );
};

export default Button;

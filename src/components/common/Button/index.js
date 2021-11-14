import styled, { css } from "styled-components";

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 360px;
  height: 44px;
  background-color: #2b3037;
  border-radius: 8px;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    background-color: #ff8560;
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
      width: 175px;
      background-color: #ff8560;
      box-shadow: none;
      &:hover {
        background-color: #fa5f1d;
      }
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

const Button = ({ children, title, toOrder, toOrderHeader }) => {
  return (
    <ButtonWrapper toOrder={toOrder} toOrderHeader={toOrderHeader}>
      {children}
      {title && <Label>{title}</Label>}
    </ButtonWrapper>
  );
};

export default Button;

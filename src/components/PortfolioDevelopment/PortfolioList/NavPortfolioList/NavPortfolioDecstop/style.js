import styled from "styled-components";
import { MOBILE_660 } from "../../../../common/media";

export const PortfolioHeaderValue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: 30px;
  flex-wrap: wrap;
  @media ${MOBILE_660} {
    display: none;
  }
`;

export const PortfolioButtom = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: ${({ theme }) => theme.color.background.button};
  border-radius: 4px;
  text-shadow: 0 1px 1px rgba(37, 101, 167, 0.47);
  color: white;
  font-family: "Exo 2", sans-serif;
  font-size: 16px;
  font-weight: 900;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 40px;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin: 0 20px;
  margin-top: 20px;
  &:hover {
    background-color: #ff8560;
    box-shadow 0px 15px 25px -5px rgba(darken(dodgerblue, 40%));
    transform scale(1.03);
  }
  &:active {
    box-shadow 0px 4px 8px rgba(darken(dodgerblue, 30%));
    transform scale(.98);
  }
  flex-grow: 1;
`;

export const PortfolioButtomText = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 15px;
  color: white;
  line-height: 17px;
  font-size: 14px;
  font-family: "Exo 2", sans-serif;
  font-weight: 400;
  text-decoration: none;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
`;

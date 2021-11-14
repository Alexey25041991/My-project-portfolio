import styled from "styled-components";

export const OrderSiteLabel = styled.div`
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  margin-left: 12px;
`;

export const OrderSiteCustom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const OrderSiteText = styled.p`
  margin-top: 17px;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;

export const OrderSiteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 44px;
  background-color: #2b3037;
  border: 2px solid white;
  border-radius: 4px;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.1);
  text-shadow: 0 1px 1px rgba(37, 101, 167, 0.47);
  color: white;
  font-family: "Exo 2", sans-serif;
  font-size: 20px;
  font-weight: 900;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 43px;
  margin-top: 15px;
  &:hover {
    background-color: #ff8560;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  color: palevioletred;
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  line-height: 17px;
  font-size: 14px;
  font-family: "Exo 2", sans-serif;
  font-weight: 400;
  text-decoration: none;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  margin-top: 5px;
  margin-left: 10px;
`;

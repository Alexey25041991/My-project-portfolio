import styled from "styled-components";

export const PersonalWrapper = styled.div`
  display: flex;
  background-color: #fff;

  line-height: 20px;
  color: #000;
  font-family: "Exo 2", sans-serif;
  &:before {
    content: "";
    width: 100%;
    height: 32px;
    display: flex;
    margin-top: -31px;
    position: absolute;
  }
`;

export const PersonalConteiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 960px;
  margin: 0 auto;
  padding: 35px 25px 70px 25px;
`;

export const PersonalHeader = styled.p`
  text-align: center;
`;

export const PersonalHeaderJs = styled.span`
  margin: 0 auto;
`;

export const PersonalCustom = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const PersonalText = styled.div`
  margin-top: 17px;
  color: #000;
  font-size: 14px;
  line-height: 20px;
`;

export const PersonalSection = styled.div`
  display: flex;
  flex-direction: column;

  padding-right: 485px;
  padding-bottom: 10px;
`;

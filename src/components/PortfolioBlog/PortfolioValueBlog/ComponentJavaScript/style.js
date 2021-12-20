import styled from "styled-components";
import { MOBILE_660, MOBILE_480 } from "../../../common/media";

export const PersonalHeader = styled.p`
  text-align: center;

  @media ${MOBILE_660} {
    width: 100%;
  }
`;

export const PersonalHeaderJs = styled.span`
  margin: 0 auto;

  @media ${MOBILE_480} {
    font: 700 3em/1 "Oswald", sans-serif;
  }
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

  padding-bottom: 10px;
`;

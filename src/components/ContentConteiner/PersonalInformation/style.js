import styled from "styled-components";

import myIconWebdev from "../../common/icon/webdev.png";

export const PersonalHeaderCustom = styled.h4`
  color: #2b2a29;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-top: 11px;
  margin-bottom: 30px;
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
  background: url(${myIconWebdev}) right top no-repeat;
  padding-right: 485px;
  padding-bottom: 10px;
`;

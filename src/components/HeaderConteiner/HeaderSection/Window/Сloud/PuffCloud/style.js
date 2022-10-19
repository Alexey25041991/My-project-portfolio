import styled from "styled-components";
// import { TABLET_1024, MOBILE_660 } from '../../../../common/media';

export const PuffCloudPattern = styled.div`
  width: 22px;
  height: 22px;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  border-radius: 50%;
  position: absolute;
  background-image: linear-gradient(hsl(0deg 0% ${100}%), hsl(180deg 12% 50%));
  background-size: auto 30px;
  background-position: 50% 0%;
  z-index: 100;
`;

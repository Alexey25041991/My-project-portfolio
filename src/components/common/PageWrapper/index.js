import styled from "styled-components";

import myIconWawe from "../icon/wawe.png";
import myIconBgcont from "../icon/bgcont.png";
import myIconWawew from "../icon/wawew.png";

const PageWrapper = styled.div`
  display: flex;
  background: ${({ dark, footer = false }) =>
    dark && !footer
      ? `url(${myIconBgcont}) center top`
      : footer
      ? `#2b3037`
      : "none"};
  &:before {
    background: url(${({ dark }) => (dark ? myIconWawe : myIconWawew)}) top
      center repeat-x;
    content: "";
    width: 100%;
    height: 22px;
    display: flex;
    margin-top: -20px;
    position: absolute;
    z-index: 10;
  }
`;

export default PageWrapper;

import styled from "styled-components";

import myIconWawe from "../icon/wawe.png";
import myIconBgcont from "../icon/bgcont.png";
import myIconWawew from "../icon/wawew.png";

const PageWrapper = styled.div`
  display: flex;
  background: ${({ dark }) =>
    dark ? `url(${myIconBgcont}) center top` : "none"};
  &:before {
    background: url(${({ dark }) => (dark ? myIconWawe : myIconWawew)}) top
      center repeat-x;
    content: "";
    width: 100%;
    height: 22px;
    display: flex;
    margin-top: -22px;
    position: absolute;
    z-index: 10;
  }
`;

export default PageWrapper;

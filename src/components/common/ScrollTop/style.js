import styled from "styled-components";
import { TABLET_1120 } from "../media";

import RocketHoverIcon from "../icon/RocketHoverIcon.png";
import RocketScrollToIcon from "../icon/RocketScrollToIcon.png";

export const ScrollTopWrapper = styled.div`
  display: flex;
  width: 53px;
  height: 145px;
  margin-bottom: -11px;
  background: url(${RocketHoverIcon}) right top no-repeat;
  position: fixed;
  bottom: 30px;
  right: 20px;
  z-index: 99;

  &:hover {
    cursor: pointer;
    background: url(${RocketScrollToIcon}) right top no-repeat;
    transform: translate3d(0px, -20px, 0px);
    transition: all 1s linear;
}
  }

  @media ${TABLET_1120} {
    display: none;
  }
`;

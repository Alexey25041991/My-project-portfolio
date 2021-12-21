import styled from "styled-components";
import {
  TABLET_959,
  MOBILE_660,
  MOBILE_560,
  MOBILE_480,
} from "../common/media";

import {
  PADDING,
  BUTTONS_MARGIN_BETWEEN,
  BUTTONS_PADDING_BOTTOM,
  PADDING_RIGHT,
  PADDING_LEFT,
  HEADER_MARGIN_BOTTOM,
  PADDING_TOP,
  SCROLL_PADDING_RIGHT,
} from "./constants";

export const ContentWrapper = styled.div`
  display: flex;

  @media ${TABLET_959} {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  white-space: pre-wrap;
  padding: ${PADDING};
  color: inherit;
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  width: 100%;

  @media ${TABLET_959} {
    padding: 0;
    padding-top: 8px;
  }
`;

export const ContentAnimation = styled.div`
  margin-left: 200px;

  @media ${TABLET_959} {
    margin-left: 40px;
  }

  @media ${MOBILE_480} {
    display: none;
  }
`;

export const ContentText = styled.div`
  white-space: pre-wrap;
  overflow-y: auto;
  padding: 5px ${PADDING} ${PADDING} ${PADDING};
  color: inherit;
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;

  @media ${TABLET_959} {
    padding: 8px 0;
    width: 100%;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding-bottom: ${BUTTONS_PADDING_BOTTOM};
  padding-right: ${PADDING_RIGHT};

  button:not(:first-child) {
    margin-left: ${BUTTONS_MARGIN_BETWEEN};
  }

  @media ${TABLET_959} {
    flex-direction: column-reverse;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: pre-wrap;
  margin-bottom: ${HEADER_MARGIN_BOTTOM};
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;

  @media ${MOBILE_560} {
    flex-direction: column;
    font-size: 16px;
  }
`;

export const IconClose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${PADDING_TOP};
  right: calc(${PADDING_RIGHT} + ${SCROLL_PADDING_RIGHT});

  &:hover {
    cursor: pointer;
  }

  &:before {
    content: "";
    position: absolute;
    top: -6px;
    left: -6px;
    bottom: -6px;
    right: -6px;
    border-radius: 50%;
    background-color: transparent;
  }

  & svg {
    fill: #7b7e86;
  }
`;

export const ModalComponent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: 0;
  padding: ${PADDING_TOP} ${SCROLL_PADDING_RIGHT} 0px ${PADDING_LEFT};

  width: 800px;
  max-height: 84vh;
  background-color: #ffffff;
  box-shadow: 0px 1.2px 18px rgba(0, 0, 0, 0.08),
    0px 6.4px 29px rgba(0, 0, 0, 0.12);
  border-radius: 8px;

  overflow-y: auto;
  overflow-x: hidden;

  @media ${TABLET_959} {
    width: 84%;
  }

  @media ${MOBILE_660} {
    max-height: calc(100vh - 220px);
  }
`;

export const ModalSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Overlay = styled.div`
  ${({ opened }) => (opened ? "" : "display: none;")};
  position: fixed;
  top: 0;
  left: 0;
  inset: 0px;
  z-index: 1000;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease 0s;
  background: rgba(0, 0, 0, 0.4);
`;

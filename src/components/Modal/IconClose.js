import styled from 'styled-components';

import { PADDING_TOP, SCROLL_PADDING_RIGHT, PADDING_RIGHT } from './constants';

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
    content: '';
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

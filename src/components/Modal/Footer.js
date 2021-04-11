import styled from 'styled-components';

import {
  BUTTONS_MARGIN_BETWEEN,
  BUTTONS_PADDING_BOTTOM,
  PADDING_RIGHT,
} from './constants';

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  padding-bottom: ${BUTTONS_PADDING_BOTTOM};
  padding-right: ${PADDING_RIGHT};

  button:not(:first-child) {
    margin-left: ${BUTTONS_MARGIN_BETWEEN};
  }
`;

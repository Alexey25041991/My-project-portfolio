import styled, { css } from 'styled-components';

import {
  OPTION_HEIGHT,
  PRODUCT_OPTION_HEIGHT,
  OPTION_PADDING,
  PRODUCT_OPTION_PADDING,
} from '../constants';

export const NoOptionMessage = styled.div`
  display: flex;
  align-items: center;
  ${({ theme, $type, size }) => css`
    height: 40px;
    padding: 5px;
    cursor: default;
    background-color: #fff;
    color: #000;
  `}
`;

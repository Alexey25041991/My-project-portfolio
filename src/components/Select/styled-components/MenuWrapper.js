import styled, { css } from 'styled-components';

import { MENU_WRAPPER_Z_INDEX } from '../constants';

export const MenuWrapper = styled.div`
  position: absolute;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  display: ${({ opened }) => (opened ? 'block' : 'none')};
  box-sizing: border-box;
  z-index: ${MENU_WRAPPER_Z_INDEX};
  ${({ theme }) => css`
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 400;
  `}
`;

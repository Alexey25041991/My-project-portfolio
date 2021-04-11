import styled, { css } from 'styled-components';

import { CLOSE_ICON_MARGIN_RIGHT } from '../constants';

const commonIconStyles = (disabled) => css`
  cursor: ${disabled ? `default` : 'pointer'};
  fill: ${() => {
    if (disabled) return 'red';
    return '#fff';
  }};
  &:hover {
    fill: ${!disabled && '#fff'};
  }
`;

export const ArrowIconWrapper = styled.div`
  display: flex;
  align-items: center;
  & svg {
    ${({ disabled }) => commonIconStyles(disabled)}
  }
  ${({ opened }) =>
    opened &&
    `
    transform: rotate(180deg);
  `}
`;

export const CloseIconWrapper = styled.div`
  margin-right: ${CLOSE_ICON_MARGIN_RIGHT};
  display: flex;
  align-items: center;
  & svg {
    ${({ disabled }) => commonIconStyles(disabled)}
  }
`;

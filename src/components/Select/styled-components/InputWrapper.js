import styled, { css } from 'styled-components';

import { INPUT_HEIGHT, INPUT_PADDING } from '../constants';

const getBorderColor = (disabled, error, focused) => {
  if (error && !disabled) return '#red';
  if (disabled) return '#000';
  if (focused) return '#000';
  return '#000';
};

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;

  ${({ theme, disabled, error, focused, size, $type }) => css`
    height: 40px;
    padding: 5px;
    color: #000;
    border-radius: 4px;
    background: #fff;
    cursor: default;

    &::before {
      content: '';
      pointer-events: none;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: absolute;
      background: transparent;
      border: ${focused ? 2 : 1}px solid
        ${getBorderColor(disabled, error, focused)};
      border-radius: 4px;
    }
  `}

  &:hover::before {
    border-color: ${({ focused, disabled, error }) =>
      !focused && !disabled && !error && '#000'};
  }
  &:focus::before {
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;

import styled, { css } from 'styled-components';

import {
  OPTION_HEIGHT,
  PRODUCT_OPTION_HEIGHT,
  OPTION_PADDING,
  PRODUCT_OPTION_PADDING,
} from '../constants';

export const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  box-sizing: border-box;
  ${({ theme, size, disabled, $type }) => css`
    height: 40px;
    padding: 5px;
    cursor: pointer;
    background-color: #fff;
    color: #000;
    & svg {
      fill: #fff;
    }
  `}

  ${({ selected, theme }) =>
    selected &&
    css`
      color: #000;
      & svg {
        fill: #fff;
      }
    `}

  ${({ theme, disabled }) =>
    disabled
      ? css`
          color: #000;
          & svg {
            fill: #fff;
          }
        `
      : css`
          &:focus,
          &:hover {
            color: #000;
            background-color: #fff;
            & svg {
              fill: #fff;
            }
          }
        `}

  &:focus {
    outline: none;
  }
  & > div {
    overflow: hidden;
  }
`;

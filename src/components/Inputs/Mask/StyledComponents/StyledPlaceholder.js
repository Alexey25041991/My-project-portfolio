import styled, { css } from 'styled-components';

import { INPUT_PADDING } from '../constants';

export const StyledPlaceHolder = styled.div`
  ${({ disabled, focused, theme, size }) => css`
    position: absolute;
    box-sizing: content-box;
    padding-left: ${INPUT_PADDING}px;
    font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    // font-family: ;
    font-size: 14px;
    // font-weight: ;
    margin-top: 5px;
    border: transparent;
    font-stretch: normal;
    font-style: normal;
    white-space: pre;
    display: flex;
    justify-content: center;
    align-items: unset;
    font-optical-sizing: auto;
    color: #ffffff;
    &:hover {
      background-color: #ffffff;
    }
    pointer-events: none;
    user-select: none;
    text-align: left;
  `}
`;

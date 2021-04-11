import styled, { css } from 'styled-components';

import { getBorder } from '../../BaseField/utils-style';

export const InputBox = styled.div`
  ${({ disabled, theme, focused }) => css`
    height: 44px;
    display: flex;
    background-color: #ffff;
    color: #000;
    border-radius: 4px;
    ::before {
      content: '';
      position: absolute;
      background: transparent;
      border: 1px solid #9a9ea5;
      border-radius: 4px;
      width: 100%;
      height: 40px;
      pointer-events: none;
    }
    &:hover::before {
      border: 2px solid #9a9ea5;
    }
    &:focus::before {
      outline: none;
      background-color: #0062ff;
    }
  `}
`;

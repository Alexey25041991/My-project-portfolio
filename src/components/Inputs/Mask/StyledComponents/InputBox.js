import styled, { css } from 'styled-components';

import { getBorder } from '../../BaseField/utils-style';

export const InputBox = styled.div`
  ${({ disabled, theme, focused }) => css`
    height: 40px;
    display: flex;
    background-color: #000;
    border-radius: 4px;
    ::before {
      content: '';
      position: absolute;
      background: transparent;
      border: ${getBorder(theme, disabled, focused)};
      border-radius: 4px;
      width: 100%;
      height: 40px;
      pointer-events: none;
    }
    &:hover::before {
      border-color: #ffffff;
    }
    &:focus::before {
      outline: none;
      background-color: #ffffff;
    }
  `}
`;

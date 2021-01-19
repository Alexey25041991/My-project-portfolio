import styled, { css } from 'styled-components';

import { getInputSize, getBorderRadius, getBorder } from '../utils-style';

export const InputWrapper = styled.div`
  ${({
    theme,
    disabled,
    focused,
    status,
    size,
    activeInformer,
    iconIsActive,
    range,
  }) => css`
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    height: 42px;
    margin: 0;
    border-radius: 4px;
    background-color: #ffffff;
    ::before {
      content: '';
      top: 0;
      position: absolute;
      background: transparent;
      border: ${getBorder(disabled, focused, status)};
      border-radius: 4px;
      width: 100%;
      height: 42px;
    }
    &:hover {
      background-color: #ffffff;
    }
    &:focus {
      outline: none;
      background-color: #ffffff;
    }
  `}
`;

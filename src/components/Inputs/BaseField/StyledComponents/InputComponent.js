import styled, { css } from 'styled-components';

export const InputComponent = styled.input`
  ${({ theme, disabled, focused, $size, withSelectComponent }) => css`
    width: 300px;
    outline: none;
    height: 100%;
    padding-left: 10px;
    color: #000;
    // font-family:;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    text-overflow: ellipsis;
    border-color: transparent;
    background: transparent;
    ::-ms-clear {
      display: none;
    }
    ::-ms-reveal {
      display: none;
    }
    ::placeholder,
    ::-webkit-input-placeholder {
      color: #7b7e86;
    }

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  `}
`;

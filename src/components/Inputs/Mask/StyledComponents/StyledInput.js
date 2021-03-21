import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
  ${({ theme, $size, focused, disabled, withPadding }) => css`
    position: relative;
    outline: none;
    font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    box-sizing: content-box;
    display: block;
    width: 90%;
    padding-top: 5px;
    padding-bottom: 5px;
    // font-family: ;
    font-size: 14px;
    line-height: 20px;
    // font-weight: ;
    padding-left: 5px;
    white-space: pre;
    border: transparent;
    font-stretch: normal;
    font-style: normal;
    color: #ffffff;
    ::placeholder {
      color: #a7afd9;
    }

    background-color: transparent;

    &:focus {
      opacity: unset;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
      color: #ffffff;
    }
  `}
`;

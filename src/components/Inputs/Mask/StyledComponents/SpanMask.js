import styled, { css } from 'styled-components';

export const SpanMask = styled.span`
  ${({ size, theme, disabled, active, symbolsFilled, focused }) => css`
    border-bottom: 0.7px solid #ffffff;
    white-space: pre;
    position: relative;
    // font-family: ;
    font-size: 14px;
    line-height: 20px;
    // font-weight: ;
    font-stretch: normal;
    font-style: normal;
    font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    box-sizing: content-box;
    cursor: text;
    color: #000;
  `}
`;

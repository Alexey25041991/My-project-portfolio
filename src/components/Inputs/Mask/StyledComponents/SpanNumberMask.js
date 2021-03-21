import styled, { css } from 'styled-components';

export const SpanNumberMask = styled.label`
  ${({ size, theme, disabled, focused, borderPosition, active }) => css`
    border-bottom: 0.7px solid #ffffff;
    white-space: pre;
    // font-family: ;
    font-size: 14px;
    line-height: 20px;
    // font-weight: ;
    font-stretch: normal;
    font-style: normal;
    font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    box-sizing: content-box;
    font-optical-sizing: none;
    color: transparent;
    top: 0px;
    position: relative;
  `}
`;

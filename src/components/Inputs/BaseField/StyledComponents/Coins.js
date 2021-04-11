import styled from 'styled-components';

export const SeparatorDot = styled.span`
  ${({ size, disabled, theme, position }) => `
  position: absolute;
  left: ${position + 2}px;
  top: 10px;
  color: red;
  background: transparent;
  // font-size: ;
  line-height: 24px;
`}
`;

export const Coins = styled.span`
  ${({ dimension, disabled, theme, position }) => `
  position: absolute;
  left: ${position + 5}px;
  top: 10px;
  color: red;
  background: transparent;
  outline: 0px solid transparent;
  // font-size: ;
  line-height: 24px;
`}
`;

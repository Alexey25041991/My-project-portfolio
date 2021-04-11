import styled from 'styled-components';

export const Suffix = styled.span`
  ${({ size, disabled, theme, position, withCoins }) => `
  position: absolute;
  top: 12px;
  left: 10px;
  color: red;
  background: transparent;
`}
`;

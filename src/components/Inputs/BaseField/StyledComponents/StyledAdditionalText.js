import styled, { css } from 'styled-components';

export const StyledAdditionalText = styled.div`
  ${({ status, disabled, theme, focused }) => css`
    position: relative;
    color: inherit;
  `}
`;

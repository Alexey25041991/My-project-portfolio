import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme, focused, disabled, width }) => css`
    position: relative;
    color: inherit;
    width: ${typeof width === 'number' ? `${width}px` : width};
    margin-bottom: 8px;
  `}
`;

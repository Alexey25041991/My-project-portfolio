import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ width }) => css`
    width: ${typeof width === 'number' ? `${width}px` : width};
  `}
`;

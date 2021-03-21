import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  ${({ theme, focused, disabled }) => css`
    display: flex;
    color: #ffffff;
  `}
`;

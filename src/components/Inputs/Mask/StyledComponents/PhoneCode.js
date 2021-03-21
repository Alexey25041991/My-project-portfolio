import styled, { css } from 'styled-components';

export const PhoneCode = styled.div`
  ${({ size, theme, disabled }) => css`
    display: flex;
    align-items: center;
    padding-left: 16px;
    font-size: 14px;
    // font-weight: ;
    user-select: none;
    color: #ffffff;
  `}
`;

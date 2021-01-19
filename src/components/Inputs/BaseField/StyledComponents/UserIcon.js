import styled from 'styled-components';

export const UserIcon = styled.div`
  ${({ theme, disabled, size }) => `
    padding-right: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  
    & svg {
      fill: red;
     
      &:hover {
        fill: red;
      }
    }
  `}
`;

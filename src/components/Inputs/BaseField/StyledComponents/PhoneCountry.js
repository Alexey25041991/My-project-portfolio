import styled from 'styled-components';

export const CountryPhoneInputBox = styled.div`
  display: flex;
  align-items: center;
`;

export const CountrySelectWrapper = styled.div`
  ${({ size }) => `
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 40px;
    width: 300px;
    display: flex;
    align-items: center;
    cursor: pointer;
  `}
`;

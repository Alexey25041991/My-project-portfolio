import styled from 'styled-components';

export const Indicator = styled.div`
  display: ${({ visible = true }) => (visible ? 'flex' : 'none')};
`;

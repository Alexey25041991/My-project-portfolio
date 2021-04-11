import styled from 'styled-components';

export const Value = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #000;

  & > div {
    overflow: hidden;
  }
`;

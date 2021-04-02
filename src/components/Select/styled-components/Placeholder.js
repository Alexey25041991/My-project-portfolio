import styled from 'styled-components';

export const Placeholder = styled.div`
  display: inline-flex;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  pointer-events: none;
  color: #000;
  transition: all 0.2s;
  z-index: 4;
`;

import styled from 'styled-components';

import { PADDING_LEFT, PADDING_TOP, SCROLL_PADDING_RIGHT } from './constants';

export const ModalComponent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: 0;
  padding: ${PADDING_TOP} ${SCROLL_PADDING_RIGHT} 0px ${PADDING_LEFT};

  width: 800px;
  max-height: 84vh;
  background-color: #ffffff;
  box-shadow: 0px 1.2px 18px rgba(0, 0, 0, 0.08),
    0px 6.4px 29px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
`;

export const ModalSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

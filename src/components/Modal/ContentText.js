import styled from 'styled-components';

import { PADDING } from './constants';

export const ContentText = styled.div`
  white-space: pre-wrap;
  overflow-y: auto;
  padding: 5px ${PADDING} ${PADDING} ${PADDING};
  color: inherit;
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  width: 100%;
`;

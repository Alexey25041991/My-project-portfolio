import styled from 'styled-components';

import { PADDING } from './constants';

export const Content = styled.div`
  white-space: pre-wrap;
  overflow-y: auto;
  padding: ${PADDING};
  color: inherit;
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  width: 100%;
`;

export const ContentAnimation = styled.div`
  margin-left: 200px;
`;

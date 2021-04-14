import styled from 'styled-components';

import { PADDING, CONTENT_MARGIN_BOTTOM } from './constants';

export const Content = styled.div`
  white-space: pre-wrap;
  overflow-y: auto;
  margin-bottom: ${CONTENT_MARGIN_BOTTOM};
  padding: ${PADDING};
  color: inherit;
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  width: 100%;
`;

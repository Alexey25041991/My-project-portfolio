import styled from 'styled-components';

import { ICON_MARGIN_RIGHT } from './constants';

export const IconWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  margin-right: ${ICON_MARGIN_RIGHT};
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`;

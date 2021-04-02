import styled from 'styled-components';

import { LABEL_MARGIN_BOTTOM } from '../constants';

export const Label = styled.div`
  display: flex;
  margin-bottom: ${LABEL_MARGIN_BOTTOM};
  color: ${({ disabled }) => {
    if (disabled) {
      return 'red';
    }
    return '#000';
  }};
  user-select: none;
`;

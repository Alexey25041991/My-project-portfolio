import styled from 'styled-components';

import { ADDITIONAL_TEXT_MARGIN_TOP } from '../constants';

export const AdditionalText = styled.div`
  display: flex;
  margin-top: ${ADDITIONAL_TEXT_MARGIN_TOP};
  color: ${({ theme, focused, disabled, error }) => {
    if (disabled) {
      return theme.color.neutral[30];
    }
    if (error) {
      return theme.color.error[60];
    }
    return '#000';
  }};
  user-select: none;
`;

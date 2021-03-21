import React from 'react';

import {
  SpanMask,
  StyledPlaceHolder,
  SpanNumberMask,
} from './StyledComponents';
import { searchPhoneMask, searchSymbols } from './utils';

export const PlaceholderMask = ({
  mask,
  visibleValue,
  size,
  disabled,
  focused,
  alwaysShowMask,
}) => {
  const visibleMask = alwaysShowMask || visibleValue.length > 0 || focused;

  return (
    <StyledPlaceHolder size={size} disabled={disabled} focused={focused}>
      {visibleMask &&
        mask.split('').map((maskChar, index) => {
          if (searchSymbols(maskChar)) {
            return (
              <SpanMask
                size={size}
                key={index}
                disabled={disabled}
                symbolsFilled
                focused={focused}
              >
                {maskChar}
              </SpanMask>
            );
          }

          if (visibleValue.length < index + 1) {
            return (
              <SpanNumberMask
                size={size}
                disabled={disabled}
                key={index}
                focused={focused}
                borderPosition
                active={searchPhoneMask(mask)}
              >
                {maskChar}
              </SpanNumberMask>
            );
          } else {
            if (visibleValue[index]) {
              return (
                <SpanMask size={size} key={index} active>
                  {visibleValue[index]}
                </SpanMask>
              );
            }
          }
          return;
        })}
    </StyledPlaceHolder>
  );
};

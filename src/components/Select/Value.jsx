import React, { isValidElement, cloneElement } from 'react';

import {
  ValueWrapper,
  Value as SingleValue,
  Placeholder,
} from './styled-components';

export const Value = ({
  selectedItem,
  placeholder,
  tooltipContainer,
  inputRef,
  disabled,
  focused,
  size,
}) => (
  <ValueWrapper>
    {selectedItem ? (
      <SingleValue disabled={disabled}>
        {isValidElement(selectedItem) &&
          cloneElement(selectedItem, {
            tooltipPortalContainer: tooltipContainer,
            tooltipTargetContainer: inputRef,
            size,
          })}
      </SingleValue>
    ) : (
      <Placeholder disabled={disabled} focused={focused}>
        {placeholder}
      </Placeholder>
    )}
  </ValueWrapper>
);

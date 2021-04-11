import React from 'react';

import { InputWrapper } from './styled-components';
import { Value } from './Value';
import { Indicators } from './Indicators';

export const Input = ({
  selectedItem,
  disabled,
  size,
  type,
  clearable,
  focused,
  placeholder,
  opened,
  error,
  tooltipContainer,
  inputRef,
  clearValue,
  onKeyDown,
  onMouseDown,
  onFocus,
}) => (
  <InputWrapper
    size={size}
    disabled={disabled}
    error={error}
    focused={focused}
    $type={type}
    onFocus={disabled ? undefined : onFocus}
    onMouseDown={disabled ? undefined : onMouseDown}
    onKeyDown={disabled ? undefined : onKeyDown}
    tabIndex={disabled ? -1 : 0}
    ref={inputRef}
  >
    <Value
      selectedItem={selectedItem}
      tooltipContainer={tooltipContainer}
      inputRef={inputRef}
      placeholder={placeholder}
      disabled={disabled}
      focused={focused}
      size={size}
    />
    <Indicators
      size={size}
      clearable={clearable}
      selectedItem={selectedItem}
      disabled={disabled}
      focused={focused}
      opened={opened}
      clearValue={clearValue}
    />
  </InputWrapper>
);

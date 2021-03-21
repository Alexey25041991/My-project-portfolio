import React, { useState } from 'react';

import { DEFAULT_MASK, DEFAULT_WIDTH } from './constants';
import { MaskField } from './MaskField';
import { Wrapper } from './StyledComponents';

export const InputMask = ({
  placeholder = '',
  value = '',
  mask = DEFAULT_MASK,
  onChange,
  disabled,
  dataTestId,
  className,
  width = DEFAULT_WIDTH,
  refInput,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <Wrapper width={width} className={className} data-test-id={dataTestId}>
      <MaskField
        placeholder={placeholder}
        value={value}
        mask={mask}
        width={width}
        setFocused={setFocused}
        onChange={onChange}
        focused={focused}
        refInput={refInput}
        disabled={disabled}
        {...props}
      />
    </Wrapper>
  );
};

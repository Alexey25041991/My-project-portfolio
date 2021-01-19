import React, {
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  FC,
} from 'react';

import { InputSkeleton } from './InputSkeleton';
import {
  Label,
  Wrapper,
  Separator,
  StyledAdditionalText,
} from './StyledComponents';

export const Input = ({
  disabled,
  label,
  additionalText,
  status = 'default',
  className,
  dataTestId,
  withTooltip = false,
  value = '',
  width = '320px',
  refInput,
  tooltipContainer,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <Wrapper
      disabled={disabled}
      focused={focused}
      className={className}
      data-test-id={dataTestId}
      width={width}
    >
      <Label>
        {label && (
          <>
            {label}
            <Separator />
          </>
        )}
        <InputSkeleton
          tooltip={value}
          container={tooltipContainer}
          display="block"
          disabled={disabled}
          focused={focused}
          setFocused={setFocused}
          status={status}
          value={value}
          width={width}
          {...props}
        />
      </Label>
      {additionalText && (
        <StyledAdditionalText
          disabled={disabled}
          status={status}
          focused={focused}
        >
          {additionalText}
        </StyledAdditionalText>
      )}
    </Wrapper>
  );
};

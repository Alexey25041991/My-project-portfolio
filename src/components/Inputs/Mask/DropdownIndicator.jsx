import React, { FC, Dispatch, MouseEvent } from 'react';

// import { ReactComponent as ChevronDownOutline } from '../../Icons/system/ChevronDownOutline.svg';
// import { ReactComponent as ChevronUpOutline } from '../../Icons/system/ChevronUpOutline.svg';
import { ReactComponent as CloseOutline } from './CloseOutline.svg';

import { StyledDropdownIndication, IconFlag } from './StyledComponents';

export const DropdownIndicator = ({
  opened,
  setOpened,
  size,
  phoneCode,
  children,
  setFocused,
  disabled,
}) => {
  // const Icon = opened ? ChevronUpOutline : ChevronDownOutline;
  const Icon = CloseOutline;
  const iconSize = size === 'micro' ? 20 : 24;
  const withPadding = phoneCode !== '+7 (';
  const handleIconClick = (event) => {
    event?.preventDefault();
    setOpened && setOpened(!opened);
    setFocused(true);
  };
  return (
    <StyledDropdownIndication
      onMouseDown={(e) => e.preventDefault()}
      disabled={disabled}
    >
      <IconFlag disabled={disabled} withPadding={withPadding}>
        {children}
      </IconFlag>

      <Icon width={iconSize} height={iconSize} onMouseDown={handleIconClick} />
    </StyledDropdownIndication>
  );
};

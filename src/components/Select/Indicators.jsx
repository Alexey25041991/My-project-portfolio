import React, { isValidElement } from 'react';

// import { ReactComponent as ChevronDownOutline } from '../Icons/system/ChevronDownOutline.svg';
// import { ReactComponent as CloseOutline } from '../Icons/service/CloseOutline.svg';

import {
  ArrowIconWrapper,
  CloseIconWrapper,
  IndicatorsWrapper,
  Indicator,
} from './styled-components';
import { ICON_MICRO_SIZE, ICON_DEFAULT_SIZE } from './constants';

export const Indicators = ({
  selectedItem,
  size,
  disabled,
  clearable,
  focused,
  opened,
  clearValue,
}) => {
  const iconSize = size === 'micro' ? ICON_MICRO_SIZE : ICON_DEFAULT_SIZE;
  return (
    <IndicatorsWrapper>
      {
        <Indicator
          visible={clearable && isValidElement(selectedItem)}
          onMouseDown={disabled ? undefined : clearValue}
        >
          {/* <CloseIconWrapper disabled={disabled} $focused={focused}>
            <CloseOutline width={iconSize} height={iconSize} />
          </CloseIconWrapper> */}
        </Indicator>
      }
      <Indicator>
        {/* <ArrowIconWrapper disabled={disabled} $focused={focused} opened={opened}>
          <ChevronDownOutline width={iconSize} height={iconSize} />
        </ArrowIconWrapper> */}
      </Indicator>
    </IndicatorsWrapper>
  );
};

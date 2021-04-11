import React, {
  Children,
  isValidElement,
  createRef,
  cloneElement,
} from 'react';

import { SelectItem } from '../SelectItem';
// import { ProductSelectItem, CardSelectItem } from '../ProductOrCardSelectItem';

import {
  MenuList,
  MenuWrapper,
  NoOptionMessage,
  OptionWrapper,
} from './styled-components';
import { areEqual } from './utils';

export const DropdownMenu = ({
  list,
  value,
  size,
  type,
  withoutOptionMessage,
  opened,
  disabled,
  width,
  children,
  menuRef,
  menuListRef,
  optionsRefs,
  tooltipContainer,
  onOptionClick,
  onKeyDown,
}) => {
  const renderChildren = () => {
    return Children.map(children, (child) => {
      if (!isValidElement(child)) {
        return null;
      }

      const selected = areEqual(value, child.props.value);
      const onClick =
        child.props.disabled || disabled
          ? undefined
          : onOptionClick(child.props.value);

      const ref = createRef();
      optionsRefs.current[child.props.value] = ref;
      return (
        <OptionWrapper
          data-value={child.props.value}
          tabIndex={-1}
          ref={ref}
          size={size}
          disabled={disabled || child.props.disabled}
          $type={type}
          selected={selected}
          onClick={onClick}
        >
          {cloneElement(child, {
            value: undefined,
            tooltipPortalContainer: tooltipContainer,
            tooltipTargetContainer: ref,
            size: size,
          })}
        </OptionWrapper>
      );
    });
  };
  const renderListItems = (list) => {
    return list.map((item, index) => {
      const {
        label,
        value: childValue,
        icon: Icon,
        disabled: childDisabled,
        currency,
        note,
        image,
      } = item;
      const selected = areEqual(value, childValue);
      const onClick =
        childDisabled || disabled ? undefined : onOptionClick(childValue);

      const ref = createRef();
      optionsRefs.current[childValue] = ref;

      return (
        <OptionWrapper
          key={`${value}_${index}`}
          data-value={childValue}
          tabIndex={-1}
          ref={ref}
          size={size}
          disabled={disabled || childDisabled}
          $type={type}
          selected={selected}
          onClick={onClick}
        >
          <SelectItem
            value={undefined}
            disabled={childDisabled}
            tooltipPortalContainer={tooltipContainer}
            tooltipTargetContainer={ref}
            size={size}
          >
            {Icon && <Icon />}
            {label}
          </SelectItem>
          {/* {type === 'card' && (
            <CardSelectItem
              value={undefined}
              disabled={childDisabled}
              note={note}
              image={image}
              currency={currency}
              tooltipPortalContainer={tooltipContainer}
              tooltipTargetContainer={ref}
              size={size}
            >
              {label}
            </CardSelectItem>
          )}
          {type === 'product' && (
            <ProductSelectItem
              value={undefined}
              disabled={childDisabled}
              note={note}
              image={image}
              currency={currency}
              tooltipPortalContainer={tooltipContainer}
              tooltipTargetContainer={ref}
              size={size}
            >
              {label}
            </ProductSelectItem>
          )} */}
        </OptionWrapper>
      );
    });
  };
  return (
    <MenuWrapper
      ref={menuRef}
      onKeyDown={onKeyDown}
      opened={opened}
      width={width}
    >
      <MenuList ref={menuListRef} size={size} tabIndex={-1}>
        {children && !list && renderChildren()}
        {list && renderListItems(list)}
        {!children && !list && (
          <NoOptionMessage size={size} $type={type}>
            {withoutOptionMessage}
          </NoOptionMessage>
        )}
      </MenuList>
    </MenuWrapper>
  );
};

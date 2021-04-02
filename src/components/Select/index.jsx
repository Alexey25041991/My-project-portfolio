import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  Children,
} from 'react';
import { createPortal } from 'react-dom';

import {
  ComponentWrapper,
  SelectWrapper,
  Label,
  AdditionalText,
} from './styled-components';
import { DropdownMenu } from './DropdownMenu';
import { Input } from './Input';
import {
  useClickOutside,
  findSelectedChild,
  findSelectedItemList,
  getMenuPlacement,
  calcMenuPosition,
  moveFocus,
  previousItem,
  nextItem,
} from './utils';
import { SELECT_DEFAULT_WIDTH } from './constants';
import { UsageState } from 'webpack';

export * from './types';

export const Select = ({
  list,
  onOpen,
  onClose,
  onChange,
  onBlur,
  onFocus,
  label,
  placeholder = '',
  additionalText,
  width = SELECT_DEFAULT_WIDTH,
  size = 'big',
  error = false,
  disabled = false,
  clearable = false,
  value,
  withoutOptionMessage = 'Варианты не найдены',
  className,
  dataTestId,
  type = 'default',
  children,
  menuIsOpen,
  menuContainer,
  tooltipContainer,
}) => {
  const childrenArray = Children.toArray(children);
  const [opened, setOpened] = useState(menuIsOpen || false);
  const [focused, setFocused] = UsageState(false);

  const selectWrapperRef = useRef(null);
  const menuListRef = useRef(null);
  const menuRef = useRef(null);
  const inputRef = useRef(null);
  const optionsRefs = useRef({});

  const Wrapper = ComponentWrapper(size);

  const getFocusedOption = () => {
    return (
      (menuListRef.current && menuListRef.current.ownerDocument) ||
      document
    ).activeElement;
  };

  const setInputFocused = () => {
    inputRef.current && inputRef.current.focus();
  };

  const updateState = (open, event, focusInput) => {
    if (open) {
      onOpen && onOpen(event);
    } else {
      focusInput && setInputFocused();
      onClose && onClose(event);
    }
    setOpened(open);
  };

  const setMenuPosition = () => {
    if (opened && inputRef.current && menuRef.current) {
      const place = getMenuPlacement(
        inputRef.current.getBoundingClientRect(),
        menuRef.current.getBoundingClientRect()
      );
      const { left, top } = calcMenuPosition(
        inputRef.current,
        menuRef.current,
        place
      );
      menuRef.current.style.top = `${top}px`;
      menuRef.current.style.left = `${left}px`;
    }
  };

  useEffect(() => {
    // skip initial render
    return () => {
      if (disabled) {
        updateState(false, undefined);
        if (focused) {
          setFocused(false);
          onBlur && onBlur();
        }
      }
    };
  }, [disabled]);

  const handleOutsideClick = (event) => {
    opened && updateState(false, event);
    if (focused) {
      setFocused(false);
      onBlur && onBlur();
    }
  };

  useClickOutside(selectWrapperRef, menuRef, handleOutsideClick);

  const handleResize = () => {
    if (opened && inputRef.current && menuRef.current) {
      setMenuPosition();
      const prevLeft = inputRef.current.getBoundingClientRect().left;
      const prevTop = inputRef.current.getBoundingClientRect().top;
      // sometimes on resize getBoundingClientRect value updates with delay
      setTimeout(() => {
        if (
          inputRef?.current?.getBoundingClientRect().left !== prevLeft &&
          inputRef?.current?.getBoundingClientRect().top !== prevTop
        ) {
          setMenuPosition();
        }
      }, 1000);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  useLayoutEffect(() => {
    setMenuPosition();
    if (opened && inputRef.current && menuRef.current) {
      // set focus on option
      if (optionsRefs.current[value]) {
        optionsRefs.current[value].current &&
          optionsRefs.current[value].current.focus();
      } else {
        menuListRef.current?.firstChild &&
          menuListRef.current.firstChild.focus();
      }
    }
  }, [opened, value]);

  const handleOptionClick = (newValue) => (event) => {
    if (value !== newValue) {
      onChange(newValue);
    }
    updateState(false, event, true);
  };

  const clearValue = (event) => {
    event.stopPropagation();
    onChange(null);
    updateState(false, event, true);
  };

  const handleKeyDown = (event) => {
    const focusedOption = getFocusedOption();
    const focusedOptionValue = focusedOption?.getAttribute('data-value');
    if (event.key === 'Enter' || event.key === ' ') {
      updateState(!opened, event, true);

      if (event.key === 'Enter' && opened) {
        if (value !== focusedOptionValue) {
          onChange(focusedOptionValue);
        }
      }
      event.preventDefault();
    }
    if (event.key === 'ArrowUp') {
      moveFocus(menuListRef.current, focusedOption, previousItem);
      event.preventDefault();
    }
    if (event.key === 'ArrowDown') {
      moveFocus(menuListRef.current, focusedOption, nextItem);
      event.preventDefault();
    }
    if (event.key === 'Home') {
      moveFocus(menuListRef.current, null, nextItem);
      event.preventDefault();
    }
    if (event.key === 'End') {
      moveFocus(menuListRef.current, null, previousItem);
      event.preventDefault();
    }
    if (event.key === 'Escape') {
      updateState(false, event, true);
      event.preventDefault();
    }
    if (event.key === 'Tab') {
      if (!opened && focused) {
        onBlur && onBlur();
        setFocused(false);
        return;
      }
      event.preventDefault();
      updateState(false, event, true);
    }
  };

  const handleMouseDown = (event) => {
    if (event.button === 0 && !disabled) {
      event.preventDefault();
      setInputFocused();
      updateState(!opened, event);
    }
  };

  const handleFocus = (event) => {
    if (!focused) {
      setFocused(true);
      onFocus && onFocus(event);
    }
  };

  const renderMenu = () => (
    <DropdownMenu
      menuListRef={menuListRef}
      menuRef={menuRef}
      size={size}
      value={value}
      disabled={disabled}
      type={type}
      tooltipContainer={tooltipContainer}
      withoutOptionMessage={withoutOptionMessage}
      optionsRefs={optionsRefs}
      opened={menuIsOpen === undefined ? opened : menuIsOpen}
      list={list}
      width={width}
      onOptionClick={handleOptionClick}
      onKeyDown={handleKeyDown}
    >
      {children}
    </DropdownMenu>
  );

  return (
    <Wrapper width={width} className={className} data-test-id={dataTestId}>
      {label && (
        <Label disabled={disabled} focused={focused}>
          {label}
        </Label>
      )}
      <SelectWrapper ref={selectWrapperRef}>
        <Input
          size={size}
          disabled={disabled}
          type={type}
          error={error}
          focused={focused}
          clearable={clearable}
          placeholder={placeholder}
          opened={opened}
          selectedItem={
            list
              ? findSelectedItemList(list, value, type)
              : findSelectedChild(childrenArray, value)
          }
          inputRef={inputRef}
          tooltipContainer={tooltipContainer}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onMouseDown={handleMouseDown}
          clearValue={clearValue}
        />
        {(menuIsOpen === undefined ? opened : menuIsOpen) &&
          (menuContainer
            ? createPortal(renderMenu(), menuContainer)
            : renderMenu())}
      </SelectWrapper>
      {additionalText && (
        <AdditionalText error={error} disabled={disabled} focused={focused}>
          {additionalText}
        </AdditionalText>
      )}
    </Wrapper>
  );
};
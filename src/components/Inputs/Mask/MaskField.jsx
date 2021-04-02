import React, {
  useRef,
  useEffect,
  useState,
  FocusEvent,
  Dispatch,
  FC,
  ReactNode,
  MutableRefObject,
  useCallback,
  KeyboardEvent,
} from 'react';

import { KEY_CODES } from '../../common';

import { StyledErrorSolid } from '../Text/StyledErrorSolid';

import { DropdownIndicator } from './DropdownIndicator';
import { ICON_SIZE_DEFAULT, ICON_SIZE_MICRO } from './constants';
import { checkPhoneMask, checkMaskFilled } from './utils';
import { PlaceholderMask } from './PlaceholderMask';
import {
  formatValueInMaskValue,
  unFormatValue,
  formatValueOnComplete,
  getInputValue,
} from './MaskUtils';
import {
  Label,
  LabelText,
  StyledInput,
  AdditionalText,
  IconWrapper,
  InputWrapper,
  InputBox,
  PhoneCode,
} from './StyledComponents';

export const MaskField = ({
  className,
  label,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  setFocused,
  alwaysShowMask,
  focused,
  disabled,
  status = 'default',
  additionalText,
  size = '44px',
  mask,
  icon,
  errorIcon,
  refInput,
  value = '',
  onComplete,
  formatValue,
  id,
  removeFormatValue,
  onKeyDown,
  CountryIcon,
  opened,
  setOpened,
  phoneCountry,
}) => {
  const [prevInput, setPrevInput] = useState({ value: '', cursorStart: 0 });
  const [errorActive, setErrorActive] = useState(true);
  const [keyDown, setKeyDown] = useState(false);

  const inputRef = useRef(null);

  const code = mask.slice(0, mask.indexOf('(') + 1);
  const maskPhone = checkPhoneMask(mask)
    ? mask.slice(mask.indexOf('(') + 1)
    : mask;

  const inputValue = getInputValue(
    value,
    maskPhone,
    focused,
    formatValue,
    alwaysShowMask
  );

  const handleComplete = useCallback(() => {
    onComplete &&
      onComplete(formatValueOnComplete(inputValue, mask, removeFormatValue));
  }, [inputValue, mask, onComplete]);

  useEffect(() => {
    if (checkMaskFilled(mask, inputValue)) {
      handleComplete();
    }
    if (!refInput) {
      if (inputRef.current && prevInput.value !== inputValue) {
        const position = prevInput.cursorStart;
        inputRef.current.setSelectionRange(position, position);
      }
    } else {
      if (refInput.current && prevInput.value !== inputValue) {
        if (inputValue.length === mask.length && !keyDown) {
          refInput.current.setSelectionRange(
            inputValue.length,
            inputValue.length
          );
        } else {
          const position = prevInput.cursorStart;
          refInput.current.setSelectionRange(position, position);
        }
      }
    }
  }, [handleComplete, inputValue, prevInput.cursorStart, prevInput.value]);

  const handleKeyDown = (event) => {
    onKeyDown?.(event);
    setKeyDown(true);
    if (event.keyCode === KEY_CODES.ENTER) {
      inputRef.current?.blur();
      refInput?.current?.blur();
    }
  };

  const handleFocus = (event) => {
    onFocus?.(event);
    setErrorActive(false);
    setFocused(true);
  };

  const handleBlur = (event) => {
    onBlur?.(event);
    !opened && setFocused(false);
    setKeyDown(false);
    setErrorActive(true);
  };

  const handleClick = () => phoneCountry && setOpened?.(false);

  const handleChange = (event) => {
    const inputRef = event.target;
    const inputValue = inputRef.value;

    const cursorStart = formatValueInMaskValue(
      unFormatValue(inputValue.slice(0, inputRef.selectionStart), maskPhone),
      maskPhone
    ).length;

    setPrevInput({ value: inputValue, cursorStart });

    const newValue = unFormatValue(inputValue, maskPhone);

    if (value !== newValue) {
      onChange({
        value: newValue,
        masked: checkPhoneMask(mask)
          ? code + formatValueInMaskValue(newValue, maskPhone)
          : formatValueInMaskValue(newValue, maskPhone),
      });
    }
  };

  const iconSize = 'micro' === size ? ICON_SIZE_MICRO : ICON_SIZE_DEFAULT;
  const isPlaceholder =
    !focused && inputValue?.length === 0 ? placeholder : undefined;
  const showPhoneMask = checkPhoneMask(mask);
  const showPhoneCode = alwaysShowMask || inputValue.length > 0 || focused;

  return (
    <InputWrapper disabled={disabled} focused={focused}>
      <Label className={className}>
        {label && <LabelText>{label}</LabelText>}
        <InputBox
          focused={focused}
          disabled={disabled}
          size={size}
          status={status}
        >
          {phoneCountry && (
            <DropdownIndicator
              size={size}
              phoneCode={code}
              opened={opened}
              setOpened={setOpened}
              setFocused={setFocused}
              disabled={disabled}
            >
              <CountryIcon width={iconSize} height={iconSize} />
            </DropdownIndicator>
          )}

          {showPhoneMask ? (
            <PhoneCode
              disabled={disabled}
              size={size}
              onMouseDown={(e) => e.preventDefault()}
            >
              {showPhoneCode && code}
            </PhoneCode>
          ) : (
            <PlaceholderMask
              alwaysShowMask={alwaysShowMask}
              visibleValue={inputValue}
              mask={mask}
              size={size}
              focused={focused}
              disabled={disabled}
            />
          )}

          <StyledInput
            withPadding={showPhoneMask}
            $size={size}
            disabled={disabled}
            id={id ? id : 'input-mask'}
            focused={focused}
            placeholder={isPlaceholder}
            ref={refInput === undefined ? inputRef : refInput}
            onChange={handleChange}
            value={inputValue}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onClick={handleClick}
            autoComplete="off"
          />
          <IconWrapper>
            {icon && !errorIcon && icon}
            {status === 'error' && errorIcon && !disabled && (
              <StyledErrorSolid width={iconSize} />
            )}
          </IconWrapper>
        </InputBox>
        {additionalText && !disabled && (
          <AdditionalText disabled={disabled} status={status} focused={focused}>
            {additionalText}
          </AdditionalText>
        )}
      </Label>
    </InputWrapper>
  );
};
import React, {
  forwardRef,
  Dispatch,
  SetStateAction,
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  ReactNode,
  useState,
  FC,
  MutableRefObject,
  RefObject,
  memo,
  useRef,
} from 'react';

import {
  InputWrapper,
  InputComponent,
  IconWrapper,
  UserIcon,
  Suffix,
  SeparatorDot,
  CountryPhoneInputBox,
  CountrySelectWrapper,
} from './StyledComponents';

export const InputSkeleton = memo(
  forwardRef(
    ({
      status = 'default',
      width = '100px',
      disabled,
      focused,
      setFocused,
      size = 'big',
      onChange,
      icon,
      type,
      iconServices,
      onFocus,
      value: rawValue,
      placeholder,
      onBlur,
      onKeyDown,
      onClick,
      inputName,
      activeInformer,
      maxLength,
      id,
      suffix,
      iconIsActive,
      mask,
      setIconIsActive,
      number,
      range,
      withCoins,
      phoneCountry,
      countryIcon: CountryIcon,
      selectIcon: SelectIcon,
      onCountrySelectOpen,
      countrySelectComponent: CountrySelectComponent,
      onCountrySelect,
      defaultValue,
    }) => {
      const hasFraction = number && rawValue && rawValue.includes('.');
      const [integer, fraction] = hasFraction
        ? rawValue.split('.')
        : [rawValue, '00'];

      const [coins, setCoins] = useState(fraction);
      const coinsRef = useRef(null);

      const handleMemomizeChange = (event) => {
        const { value } = event.target;

        !range && setFocused(true);
        onChange && onChange(event, value);
      };

      const focusCoinsInput = () => {
        coinsRef?.current && coinsRef.current.focus();
      };

      const handleFocus = (event) => {
        setFocused(true);
        onFocus && onFocus(event);
      };

      const setIntegerInputFocused = (event) => {
        event.preventDefault() && event.stopPropagation();
        event.currentTarget.parentNode.children[0].focus();
      };

      const handleBlur = (event) => {
        const { value } = event.target;
        setFocused(false);

        onBlur && onBlur(event, value);
      };

      // const handleKeyDown = (event) => {
      //   const selection = event.target.selectionStart;
      //   if (
      //     event.keyCode === KEY_CODES.RIGHT &&
      //     selection === event.target.value.length
      //   ) {
      //     focusCoinsInput();
      //     return;
      //   }

      //   onKeyDown && onKeyDown(event);
      //   const { value } = event.target;

      //   if (!disabled && event.keyCode === KEY_CODES.ENTER) {
      //     onChange && onChange(event, value);
      //     event.target.blur();
      //   }
      // };

      const handleMouseLeave = () => {
        iconIsActive && setIconIsActive && setIconIsActive(false);
      };

      const onCoinsChange = (event) => {
        setCoins(event.target.value);
        const newRawValue = integer
          ? `${integer}.${event.target.value || '00'}`
          : '';
        onChange && onChange(event, newRawValue);
      };

      // const countrySelectHandler = (option) => {
      //   onCountrySelect && onCountrySelect(option);
      //   if (ref.current) {
      //     ref.current.focus();
      //     setFocused(true);
      //   }
      // };

      const [selectMenuOpen, setSelectMenuOpen] = useState(false);

      const shouldRenderCoins =
        number && withCoins && rawValue && !defaultValue;
      const shouldRenderBasicInput =
        (!mask || number) && !CountrySelectComponent && onChange;
      const shouldRenderUserIcon = icon && status !== 'error';
      const shouldRenderSuffix = suffix && Boolean(rawValue.length);
      const shouldRenderIconWrapper = icon || iconServices;
      const shouldRenderUncontrollInput = defaultValue && !onChange;

      return (
        <InputWrapper
          onMouseLeave={handleMouseLeave}
          iconIsActive={iconIsActive}
          focused={focused}
          disabled={disabled}
          status={status}
          size={size}
          activeInformer={activeInformer}
          range={range}
        >
          {shouldRenderUncontrollInput && (
            <InputComponent
              id={id}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={focused}
              name={inputName}
              // ref={number ? refNode : ref}
              $size={size}
              disabled={disabled}
              defaultValue={defaultValue}
              placeholder={placeholder}
              onFocus={handleFocus}
              onBlur={handleBlur}
              focused={focused}
              type={type}
              autoComplete="off"
              maxLength={maxLength}
            />
          )}
          {CountrySelectComponent && (
            <>
              <CountryPhoneInputBox>
                <CountrySelectWrapper
                  size={size}
                  onClick={() => {
                    const open = selectMenuOpen;
                    setSelectMenuOpen(!open);
                    setFocused(!open);
                  }}
                >
                  <CountrySelectComponent
                    // onCountrySelect={countrySelectHandler}
                    disabled={disabled}
                    focused={focused}
                    size={size}
                    onMenuOpen={() => setFocused(true)}
                    onMenuClose={() => setFocused(false)}
                    menuWidth={width}
                    menuIsOpen={selectMenuOpen}
                  />
                </CountrySelectWrapper>
                <InputComponent
                  value={rawValue}
                  $size={size}
                  focused={focused}
                  disabled={disabled}
                  id={id}
                  // eslint-disable-next-line jsx-a11y/no-autofocus
                  autoFocus={focused}
                  name={inputName}
                  // ref={ref}
                  // onChange={handleMemomizeChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  // onKeyDown={handleKeyDown}
                  type={type}
                  autoComplete="off"
                  onClick={onClick}
                  maxLength={maxLength}
                  withSelectComponent
                />
              </CountryPhoneInputBox>
            </>
          )}
          {shouldRenderBasicInput && (
            <InputComponent
              id={id}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={focused}
              name={inputName}
              // ref={number ? refNode : ref}
              $size={size}
              disabled={disabled}
              placeholder={placeholder}
              value={rawValue}
              onChange={handleMemomizeChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              // onKeyDown={handleKeyDown}
              focused={focused}
              type={type}
              autoComplete="off"
              onClick={onClick}
              maxLength={maxLength}
            />
          )}
          {shouldRenderCoins && (
            <SeparatorDot
              // position={integerWidth}
              disabled={disabled}
              size={size}
            >
              {'.'}
            </SeparatorDot>
          )}
          {/* {shouldRenderCoins && (
            <EditableCoinsWrapper
              ref={coinsRef}
              html={coins}
              setFocusedStyle={setFocused}
              setIntegerFocused={(event) => {
                setFocused(true);
                setIntegerInputFocused(event);
              }}
              position={integerWidth}
              onChange={onCoinsChange}
              disabled={disabled}
              dimension={size}
            />
          )} */}
          {shouldRenderSuffix && (
            <Suffix
              onMouseDown={setIntegerInputFocused}
              size={size}
              disabled={disabled}
              // position={integerWidth}
              withCoins={shouldRenderCoins}
            >
              {/* <SuffixLabel>{suffix}</SuffixLabel> */}
            </Suffix>
          )}
          {shouldRenderIconWrapper && (
            <IconWrapper size={size} focused={focused}>
              {shouldRenderUserIcon && (
                <UserIcon disabled={disabled} size={size}>
                  {icon}
                </UserIcon>
              )}
              {iconServices && <div>{iconServices}</div>}
            </IconWrapper>
          )}
        </InputWrapper>
      );
    }
  )
);

InputSkeleton.displayName = 'InputSkeleton';

import React, { useState } from 'react';

import { Input } from '../BaseField';

// import { ReactComponent as FooterMailIcon } from '../icon/FooterMailIcon.svg';

import { StyledСloseOutline } from './StyledСloseOutline';
import { StyledErrorSolid } from './StyledErrorSolid';

export const InputText = ({
  value = '',
  disabled,
  size = '56px',
  onChange,
  status,
  clearable,
  onFocus,
  onBlur,
  ...props
}) => {
  const [errorActive, setErrorActive] = useState(false);
  const handleClickClearIcon = (event) => {
    !disabled && onChange?.(event, '');
  };

  const handleFocus = (event) => {
    setErrorActive(true);
    onFocus && onFocus(event);
  };

  const handleBlur = (event) => {
    const { value } = event.target;
    setErrorActive(false);
    onBlur && onBlur(event, value);
  };

  const iconSize = '24px';
  const shouldRenderIconServices =
    (status === 'error' && !disabled) || clearable;
  /* Иконки которые подразумевают действия и которые мы добавляем в поля ввода */
  const iconServices = (
    <>
      {status === 'error' && !disabled ? (
        <StyledErrorSolid
          width={iconSize}
          height={iconSize}
          $active={errorActive}
        />
      ) : (
        clearable && (
          <StyledСloseOutline
            width={iconSize}
            height={iconSize}
            disabled={disabled}
            onClick={handleClickClearIcon}
          />
        )
      )}
    </>
  );

  return (
    <Input
      withTooltip
      size={size}
      status={status}
      disabled={disabled}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={onChange}
      iconServices={shouldRenderIconServices && iconServices}
      value={value}
      {...props}
    />
  );
};

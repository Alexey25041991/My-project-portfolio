import React, { isValidElement, useEffect } from 'react';

import { SelectItem } from '../SelectItem';
import { ProductSelectItem, CardSelectItem } from '../ProductOrCardSelectItem';

export const areEqual = (a, b) => {
  if (typeof b === 'object' && b !== null) {
    return a === b;
  }

  return String(a) === String(b);
};

export const findSelectedChild = (childrenArray, value) => {
  const selectedItems = childrenArray.filter((child) => {
    return isValidElement(child) && areEqual(child.props.value, value);
  });
  return selectedItems[0];
};

export const findSelectedItemList = (list, value, type) => {
  const selectedItems = list.filter((item) => {
    return areEqual(item.value, value);
  });
  if (selectedItems[0]) {
    const {
      label,
      value: itemValue,
      disabled,
      icon,
      image,
      currency,
      note,
    } = selectedItems[0];
    const Icon = icon;
    if (type === 'card')
      return (
        <CardSelectItem
          value={itemValue}
          disabled={disabled}
          note={note}
          image={image}
          currency={currency}
        >
          {label}
        </CardSelectItem>
      );
    if (type === 'product')
      return (
        <ProductSelectItem
          value={itemValue}
          disabled={disabled}
          note={note}
          image={image}
          currency={currency}
        >
          {label}
        </ProductSelectItem>
      );
    return (
      <SelectItem value={itemValue} disabled={disabled}>
        {Icon && <Icon />}
        {label}
      </SelectItem>
    );
  }
  return null;
};

export const moveFocus = (list, currentFocus, calcNextFocus) => {
  let wrappedOnce = false;
  let nextFocus = calcNextFocus(list, currentFocus);

  while (nextFocus) {
    if (nextFocus === list?.firstChild) {
      if (wrappedOnce) {
        return;
      }
      wrappedOnce = true;
    }

    if (
      !nextFocus.hasAttribute('tabindex') ||
      nextFocus.hasAttribute('disabled')
    ) {
      nextFocus = calcNextFocus(list, nextFocus);
    } else {
      nextFocus.focus();
      return;
    }
  }
};

export const nextItem = (list, item) => {
  if (item?.nextElementSibling) {
    return item.nextElementSibling;
  }
  return list?.firstChild;
};

export const previousItem = (list, item) => {
  if (item?.previousElementSibling) {
    return item.previousElementSibling;
  }
  return list?.lastChild;
};

export const useClickOutside = (ref, menuRef, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      if (menuRef.current?.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, menuRef, handler]);
};

const VERTICAL_MARGIN = 8;

export const getMenuPlacement = (targetRect, menuRect) => {
  const { height: menuHeight } = menuRect;
  const { bottom: targetBottom } = targetRect;
  const viewPortHeight = window.innerHeight;

  if (viewPortHeight < targetBottom + menuHeight + VERTICAL_MARGIN) {
    return 'top';
  }

  return 'bottom';
};

export const calcMenuPosition = (target, menu, direction) => {
  const { height: menuHeight } = menu.getBoundingClientRect();
  const {
    height: targetHeight,
    top: targetTop,
    left: targetLeft,
  } = target.getBoundingClientRect();
  const { parentTop, parentLeft } = getParentOffset(menu);

  let y;
  if (direction === 'top') {
    y = targetTop + window.scrollY - parentTop - menuHeight - VERTICAL_MARGIN;
  } else if (direction === 'bottom') {
    y = targetTop + window.scrollY - parentTop + targetHeight + VERTICAL_MARGIN;
  }

  return {
    left: targetLeft + window.scrollX - parentLeft,
    top: y,
  };
};

const getParentOffset = (currentTarget) => {
  let currentParent = currentTarget.parentElement;

  while (currentParent) {
    const computedStyle = window.getComputedStyle(currentParent);
    if (computedStyle.getPropertyValue('position') !== 'static') break;
    currentParent = currentParent.parentElement;
  }
  const parentTop =
    currentParent?.getBoundingClientRect().top + window.scrollY || 0;
  const parentLeft =
    currentParent?.getBoundingClientRect().left + window.scrollX || 0;
  return { parentTop, parentLeft };
};

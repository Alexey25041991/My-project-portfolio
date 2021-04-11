// import type { ITheme } from '../../themes';
// import {
//   INPUT_SIZE_BIG,
//   INPUT_SIZE_MICRO,
//   INPUT_SIZE_SMALL,
//   SUFFIX_PADDING_BIG,
//   SUFFIX_PADDING_SMALL,
//   SUFFIX_PADDING_MICRO,
//   COINS_PADDING_BIG,
//   COINS_PADDING_SMALL,
//   COINS_PADDING_MICRO,
// } from '../constants';
// import type { Status, Size } from '../common';

// export const getAdditionalTextColor = (
//   status: Status,
//   theme: ITheme,
//   disabled = false,
//   focused = false
// ) => {
//   if (status === 'error') return theme.color.error[60];

//   if (status === 'success') return theme.color.success[50];

//   return getTextColor(focused, disabled, theme);
// };

export const getBorderColor = (
  status = 'success',
  focused = false,
  disabled = false
) => {
  if (disabled) return 'transparent';

  if (status === 'success' && !focused) return '#0062FF';

  if (status === 'error') return '#D92020';

  if (status === 'default' && focused) return '#0062FF';

  return '#9A9EA5';
};

// export const getTextColor = (focused: boolean, disabled = false, theme: ITheme) => {
//   if (disabled) return theme.color.neutral[30];

//   if (focused) return theme.color.neutral[90];

//   return theme.color.neutral[50];
// };

// export const getInputSize = (size: Size) => {
//   switch (size) {
//     case 'big':
//       return INPUT_SIZE_BIG;
//     case 'small':
//       return INPUT_SIZE_SMALL;
//     case 'micro':
//       return INPUT_SIZE_MICRO;
//   }
// };

// export const getSuffixPadding = (size: Size) => {
//   switch (size) {
//     case 'big':
//       return SUFFIX_PADDING_BIG;
//     case 'small':
//       return SUFFIX_PADDING_SMALL;
//     case 'micro':
//       return SUFFIX_PADDING_MICRO;
//   }
// };

// export const getCoinsPadding = (size: Size) => {
//   switch (size) {
//     case 'big':
//       return COINS_PADDING_BIG;
//     case 'small':
//       return COINS_PADDING_SMALL;
//     case 'micro':
//       return COINS_PADDING_MICRO;
//   }
// };

// export const getBorderRadius = (theme: ITheme, range = false) => {
//   if (range) {
//     return `${theme.input.borderRadius}px ${theme.input.borderRadius}px 0 0 `;
//   }
//   return `${theme.input.borderRadius}px`;
// };

export const getBorder = (disabled = false, focused, status) => {
  return `${focused ? 2 : 1}px solid ${
    disabled ? 'transparent' : getBorderColor(status, focused, disabled)
  }`;
};

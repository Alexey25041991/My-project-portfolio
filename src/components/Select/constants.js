export const VALUE_CONTAINER_MARGIN_RIGHT = '8px';
export const LABEL_MARGIN_BOTTOM = '8px';
export const ADDITIONAL_TEXT_MARGIN_TOP = '8px';
export const SELECT_DEFAULT_WIDTH = '320px';
export const CLOSE_ICON_MARGIN_RIGHT = '4px';
export const ICON_DEFAULT_SIZE = 24;
export const ICON_MICRO_SIZE = 20;
export const MENU_WRAPPER_Z_INDEX = 5;

export const INPUT_HEIGHT = {
  micro: '32px',
  small: '40px',
  big: '56px',
};
export const INPUT_PADDING = (type = 'default') => ({
  micro: '6px 12px',
  small: '8px 16px',
  big: `${type === 'default' ? '16px' : '10px 16px'}`,
});

export const OPTION_HEIGHT = {
  micro: '32px',
  small: '40px',
  big: '48px',
};
export const PRODUCT_OPTION_HEIGHT = '56px';

export const OPTION_PADDING = {
  micro: '6px 12px',
  small: '8px 16px',
  big: '12px 16px',
};
export const PRODUCT_OPTION_PADDING = '10px 16px';

export const MAX_LINES_AMOUNT_IN_MENU = 6;
export const MENU_VERTICAL_PADDING = '8px';
export const MENU_MAX_HEIGHT = {
  micro: `${
    parseInt(OPTION_HEIGHT.micro) * MAX_LINES_AMOUNT_IN_MENU +
    parseInt(MENU_VERTICAL_PADDING) * 2
  }px`,
  small: `${
    parseInt(OPTION_HEIGHT.small) * MAX_LINES_AMOUNT_IN_MENU +
    parseInt(MENU_VERTICAL_PADDING) * 2
  }px`,
  big: `${
    parseInt(OPTION_HEIGHT.big) * MAX_LINES_AMOUNT_IN_MENU +
    parseInt(MENU_VERTICAL_PADDING) * 2
  }px`,
};

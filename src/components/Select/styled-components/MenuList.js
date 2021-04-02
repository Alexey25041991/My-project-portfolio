import styled from 'styled-components';

import { MENU_MAX_HEIGHT, MENU_VERTICAL_PADDING } from '../constants';

export const MenuList = styled.div`
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  position: relative;
  max-height: 200px;
  padding: ${MENU_VERTICAL_PADDING} 0;
  overflow: hidden;
  overflow-y: auto;
  border-radius: 4px;

  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-track {
    background: #fff;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb {
    background: #fff;
    border: 6px solid #000;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    border: 5px solid #000;
  }

  &:focus {
    outline: none;
  }
`;

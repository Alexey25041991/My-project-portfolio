import styled, { css } from 'styled-components';

import { SELECT_DEFAULT_WIDTH } from '../constants';

const commonWrapperStyles = (width = SELECT_DEFAULT_WIDTH) => css`
  display: block;
  width: ${typeof width === 'number' ? `${width}px` : width};
  box-sizing: border-box;
`;

const MicroWrapper = styled.div`
  ${({ width }) => commonWrapperStyles(width)}
`;

const DefaultWrapper = styled.div`
  ${({ width }) => commonWrapperStyles(width)}
`;

export const ComponentWrapper = (size) =>
  size === 'micro' ? MicroWrapper : DefaultWrapper;

export const SelectWrapper = styled.div`
  position: relative;
`;

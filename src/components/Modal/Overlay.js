import styled from "styled-components";

export const Overlay = styled.div`
  ${({ opened }) => (opened ? "" : "display: none;")};
  position: fixed;
  top: 0;
  left: 0;
  inset: 0px;
  z-index: 1000;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease 0s;
  background: rgba(0, 0, 0, 0.4);
`;

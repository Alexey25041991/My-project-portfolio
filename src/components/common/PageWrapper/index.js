import styled, { css } from "styled-components";

import myIconWawe from "../icon/wawe.png";
import myIconBgcont from "../icon/bgcont.png";
import HorizontalLine from "../HorizontalLine";

const PageWrapperStyle = styled.div`
  display: flex;
  background: ${({ dark, footer = false }) =>
    dark && !footer
      ? `url(${myIconBgcont}) center top`
      : footer
      ? `#2b3037`
      : "none"};
  ${({ dark, header }) =>
    dark &&
    header &&
    css`
      &:before {
        background: url(${myIconWawe}) top center repeat-x;
        content: "";
        width: 100%;
        height: 22px;
        display: flex;
        margin-top: -20px;
        position: absolute;
        z-index: 10;
      }
    `}
  margin-top: ${({ line }) => (line === "noHorizontal" ? 0 : "-20px")};
  // background-color: ${(props) => props.theme.color.background.primary};
  background-color: ${({ theme, footer }) =>
    footer || theme.color.background.primary};
`;

const PageWrapper = ({ children, line, dark, header, footer, id }) => (
  <>
    {line !== "noHorizontal" && <HorizontalLine />}
    <PageWrapperStyle
      line={line}
      dark={dark}
      header={header}
      footer={footer}
      id={id}
    >
      {children}
    </PageWrapperStyle>
  </>
);

export default PageWrapper;

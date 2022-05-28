import styled from "styled-components";
import { MOBILE_660 } from "../../common/media";

const HeaderWrapper = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  @media ${MOBILE_660} {
    flex-direction: column;
  }
`;

const HeaderLabel = styled.div`
  color: ${({ theme, dark }) => (dark ? "white" : theme.color.text.primary)};
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-left: 12px;
  margin-right: 12px;

  @media ${MOBILE_660} {
    margin-left: 0;
    margin-right: 0;
    margin-top: 12px;
    font-size: 26px;
    line-height: 30px;
  }
`;

const HeaderTitle = ({ children, title, dark }) => {
  return (
    <HeaderWrapper>
      {children}
      {title && <HeaderLabel dark={dark}>{title}</HeaderLabel>}
    </HeaderWrapper>
  );
};

export default HeaderTitle;

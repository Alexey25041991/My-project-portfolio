import styled from "styled-components";

const HeaderWrapper = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const HeaderLabel = styled.div`
  color: ${({ dark }) => (dark ? "white" : "#2b2a29")};
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-left: 12px;
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

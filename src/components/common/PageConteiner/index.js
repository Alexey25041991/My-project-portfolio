import styled from "styled-components";

const PageConteiner = styled.div`
  display: flex;
  flex-direction: ${({ blog }) => (blog ? "none" : "column")};
  width: 960px;
  margin: 0 auto;
  padding: ${({ footer }) =>
    footer ? "35px 25px 70px 25px" : "25px 0 50px 0"};
`;

export default PageConteiner;

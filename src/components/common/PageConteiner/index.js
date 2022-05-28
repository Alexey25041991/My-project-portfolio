import styled from "styled-components";
import { TABLET_959 } from "../../common/media";

const PageConteiner = styled.div`
  display: flex;
  color: ${({ theme }) => theme.color.text.primary};
  flex-direction: ${({ blog }) => (blog ? "none" : "column")};
  width: 960px;
  margin: 0 auto;
  padding: ${({ footer }) =>
    footer ? "35px 25px 70px 25px" : "25px 20px 50px 20px"};

  @media ${TABLET_959} {
    width: 100%;
  }
`;

export default PageConteiner;

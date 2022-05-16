import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonLinkHref = styled.div`
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
`;

const ButtonLink = ({ children, navMenuLink }) => {
  const hrefValue = `/${navMenuLink}/#portfolioHeader`;
  return (
    <ButtonLinkHref>
      <Link to={hrefValue}>{children}</Link>
    </ButtonLinkHref>
  );
};

ButtonLink.defaultProps = {
  navMenuLink: "",
};

export default ButtonLink;

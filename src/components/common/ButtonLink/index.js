import styled from "styled-components";

const ButtonLinkHref = styled.a`
  text-decoration: none;
`;

const ButtonLink = ({ children, navMenuLink }) => {
  const hrefValue = `/${navMenuLink}/#portfolioHeader`;
  return <ButtonLinkHref href={hrefValue}>{children}</ButtonLinkHref>;
};

ButtonLink.defaultProps = {
  navMenuLink: "",
};

export default ButtonLink;

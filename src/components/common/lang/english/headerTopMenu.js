import { ReactComponent as ResumeIcon } from "../../icon/ResumeIcon.svg";
import { ReactComponent as PortfolioIcon } from "../../icon/PortfolioIcon.svg";
import { ReactComponent as ServicesIcon } from "../../icon/ServicesIcon.svg";
import { ReactComponent as СooperationIcon } from "../../icon/СooperationIcon.svg";
import { ReactComponent as PersonIcon } from "../../icon/PersonIcon.svg";
import { ReactComponent as BlogIcon } from "../../icon/BlogLightIcon.svg";
import { ReactComponent as СontactsIcon } from "../../icon/СontactsIcon.svg";

import styled from "styled-components/macro";

const LogoSign = styled.div`
  color: white;
  line-height: 30px;
  font-size: 16px;
  font-family: "Exo 2", sans-serif;
  font-weight: 800;
  white-space: nowrap;
`;

export const propsHeaderTopMenu = [
  {
    id: "0",
    label: "House",
    value: "house",
    icon: <LogoSign style={{ pointerEvents: "none" }}>{`${"< / >"}`}</LogoSign>,
  },
  {
    id: "1",
    label: "About me",
    value: "person",
    icon: <PersonIcon width={28} height={28} fill="#ffff" />,
  },
  {
    id: "2",
    label: "Resume",
    value: "resume",
    icon: <ResumeIcon />,
  },
  {
    id: "3",
    label: "Services",
    value: "services",
    icon: <ServicesIcon />,
  },
  {
    id: "4",
    label: "Cooperation",
    value: "cooperation",
    icon: <СooperationIcon />,
  },
  {
    id: "5",
    label: "Portfolio",
    value: "portfolio",
    href: "/portfolio",
    icon: <PortfolioIcon />,
  },
  {
    id: "6",
    label: "Blog",
    value: "blog",
    href: "/blog",
    icon: <BlogIcon />,
  },
  {
    id: "7",
    label: "Contacts",
    value: "contacts",
    icon: <СontactsIcon />,
  },
];

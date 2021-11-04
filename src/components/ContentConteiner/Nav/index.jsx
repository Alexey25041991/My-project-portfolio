import React from "react";

import Tooltip from "@material-ui/core/Tooltip";

import { NavWrapper, Ul, Li, Link, LogoSign } from "./style";

import { ReactComponent as PersonIcon } from "../../common/icon/PersonIcon.svg";
import { ReactComponent as ResumeIcon } from "../../common/icon/ResumeIcon.svg";
import { ReactComponent as PortfolioIcon } from "../../common/icon/PortfolioIcon.svg";
import { ReactComponent as ServicesIcon } from "../../common/icon/ServicesIcon.svg";
import { ReactComponent as BlogIcon } from "../../common/icon/BlogLightIcon.svg";
import { ReactComponent as СontactsIcon } from "../../common/icon/СontactsIcon.svg";
import { ReactComponent as СooperationIcon } from "../../common/icon/СooperationIcon.svg";
import { ReactComponent as ScaleIcon } from "../../common/icon/ScaleIcon.svg";

const Nav = () => (
  <NavWrapper>
    <Ul>
      <Li>
        <Tooltip arrow title="Дом" placement="right">
          <Link href={"/#"}>
            <LogoSign
              style={{ pointerEvents: "none" }}
            >{`${"< / >"}`}</LogoSign>
          </Link>
        </Tooltip>
      </Li>
      <Li>
        <Tooltip arrow title="Преимущества" placement="right">
          <Link href={"/#advantages"}>
            <ScaleIcon
              width={28}
              height={28}
              fill="#ffff"
              style={{ pointerEvents: "none" }}
            />
          </Link>
        </Tooltip>
      </Li>
      <Li>
        <Tooltip arrow title="Обо мне" placement="right">
          <Link href={"/#person"}>
            <PersonIcon
              width={28}
              height={28}
              fill="#ffff"
              style={{ pointerEvents: "none" }}
            />
          </Link>
        </Tooltip>
      </Li>
      <Li>
        <Tooltip arrow title="Резюме" placement="right">
          <Link href={"/#resume"}>
            <ResumeIcon style={{ pointerEvents: "none" }} />
          </Link>
        </Tooltip>
      </Li>
      <Li>
        <Tooltip arrow title="Услуги" placement="right">
          <Link href={"/#services"}>
            <ServicesIcon style={{ pointerEvents: "none" }} />
          </Link>
        </Tooltip>
      </Li>
      <Li>
        <Tooltip arrow title="Портфолио" placement="right">
          <Link href={"/#portfolio"}>
            <PortfolioIcon style={{ pointerEvents: "none" }} />
          </Link>
        </Tooltip>
      </Li>
      <Li>
        <Tooltip arrow title="Сотрудничество" placement="right">
          <Link href={"/#cooperation"}>
            <СooperationIcon style={{ pointerEvents: "none" }} />
          </Link>
        </Tooltip>
      </Li>
      <Li>
        <Tooltip arrow title="Блог" placement="right">
          <Link href={"/#blog"}>
            <BlogIcon style={{ pointerEvents: "none" }} />
          </Link>
        </Tooltip>
      </Li>
      <Li>
        <Tooltip arrow title="Контакты" placement="right">
          <Link href={"/#contacts"}>
            <СontactsIcon style={{ pointerEvents: "none" }} />
          </Link>
        </Tooltip>
      </Li>
    </Ul>
  </NavWrapper>
);

export default Nav;

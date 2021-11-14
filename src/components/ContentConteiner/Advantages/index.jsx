import React from "react";

import {
  AdvantagesCustom,
  Ul,
  Li,
  Link,
  Span,
  LabelTitle,
  LabelText,
} from "./style";

import { ReactComponent as ScaleIcon } from "../../common/icon/ScaleIcon.svg";

import { propsHeaderMenu } from "../../common/constants";

import PageWrapper from "../../common/PageWrapper";
import PageConteiner from "../../common/PageConteiner";
import HeaderTitle from "../../common/HeaderTitle";

const HeaderMenuLi = (propsHeaderMenu) =>
  propsHeaderMenu.map((item) => (
    <Li key={item.id}>
      <Span>{item.icon}</Span>
      <Link>
        <LabelTitle>{item.title}</LabelTitle>
        <LabelText>{item.label}</LabelText>
      </Link>
    </Li>
  ));

const AdvantagesSection = () => (
  <PageWrapper dark id="advantages">
    <PageConteiner>
      <HeaderTitle dark title="Преимущества">
        <ScaleIcon width={28} height={28} fill="#ffff" />
      </HeaderTitle>
      <AdvantagesCustom>
        <Ul>{HeaderMenuLi(propsHeaderMenu)}</Ul>
      </AdvantagesCustom>
    </PageConteiner>
  </PageWrapper>
);

export default AdvantagesSection;

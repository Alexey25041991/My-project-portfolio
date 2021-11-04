import React from "react";

import {
  AdvantagesWrapper,
  AdvantagesConteiner,
  AdvantagesHeader,
  AdvantagesCustom,
  Label,
  Ul,
  Li,
  Link,
  Span,
  LabelTitle,
  LabelText,
} from "./style";

import { ReactComponent as ScaleIcon } from "../../common/icon/ScaleIcon.svg";

import { propsHeaderMenu } from "../../common/constants";

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
  <AdvantagesWrapper id="advantages">
    <AdvantagesConteiner>
      <AdvantagesHeader>
        <ScaleIcon width={28} height={28} fill="#ffff" />
        <Label>Преимущества</Label>
      </AdvantagesHeader>
      <AdvantagesCustom>
        <Ul>{HeaderMenuLi(propsHeaderMenu)}</Ul>
      </AdvantagesCustom>
    </AdvantagesConteiner>
  </AdvantagesWrapper>
);

export default AdvantagesSection;

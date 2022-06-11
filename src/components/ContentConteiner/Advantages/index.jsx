import React from "react";
import { observer } from "mobx-react";
import { store } from "../../../store";

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

import PageWrapper from "../../common/PageWrapper";
import PageConteiner from "../../common/PageConteiner";
import HeaderTitle from "../../common/HeaderTitle";

const HeaderMenuLi = (propsAdvantages) =>
  propsAdvantages.map((item) => (
    <Li key={item.id}>
      <Span>{item.icon}</Span>
      <Link>
        <LabelTitle>{item.title}</LabelTitle>
        <LabelText>{item.label}</LabelText>
      </Link>
    </Li>
  ));

const AdvantagesSection = observer(() => {
  const { propsAdvantages, advantagesText } = store.getToggleLang();

  return (
    <PageWrapper dark id="advantages" line="noHorizontal" header>
      <PageConteiner>
        <HeaderTitle dark title={advantagesText}>
          <ScaleIcon width={28} height={28} fill="#ffff" />
        </HeaderTitle>
        <AdvantagesCustom>
          <Ul>{HeaderMenuLi(propsAdvantages)}</Ul>
        </AdvantagesCustom>
      </PageConteiner>
    </PageWrapper>
  );
});

export default AdvantagesSection;

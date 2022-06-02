import React, { useRef, Fragment } from "react";
import Slider from "infinite-react-carousel";
import { observer } from "mobx-react";

import { store } from "../../../store";

import {
  PortfolioCustom,
  Ul,
  ButtonL,
  ButtonR,
  SlickList,
  SlickTrack,
} from "./style.js";
import "./index.css";

import { ReactComponent as PortfolioDarkIcon } from "../../common/icon/PortfolioDarkIcon.svg";
import { ReactComponent as PortfolioIcon } from "../../common/icon/PortfolioIcon.svg";
import { ReactComponent as KeyIcon } from "../../common/icon/KeyIcon.svg";

import { propsPortfolioList } from "../../common/constants";

import PageWrapper from "../../common/PageWrapper";
import PageConteiner from "../../common/PageConteiner";
import HeaderTitle from "../../common/HeaderTitle";
import Button from "../../common/Button";
import ButtonLink from "../../common/ButtonLink";
import PortfolioValueItem from "../../common/PortfolioValueItem";

const getSlickList = (propsPortfolioList) =>
  propsPortfolioList.map((item) => (
    <Fragment key={item.id}>
      <PortfolioValueItem data={item} />
    </Fragment>
  ));

const screenWidth = window.screen.width;

const slidesToScreenWidth = (screenWidth) => {
  if (screenWidth < 768) {
    return 1;
  }
  if (768 <= screenWidth && screenWidth <= 1024) {
    return 2;
  }
  return 3;
};

const slidesToShowValue =
  propsPortfolioList?.length < 3 ? propsPortfolioList.length : 3;

const centerModeValue = propsPortfolioList?.length < 3;

const centerPaddingValue = (slidesToShowValue) => {
  if (slidesToShowValue === 1) return 330;
  if (slidesToShowValue === 2) return 160;
  return 0;
};

const settings = {
  initialSlide: 0,
  slidesToShow: slidesToScreenWidth(screenWidth),
  virtualList: true,
  className: "styleSlider",
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  wheel: true,
  arrows: false,
  centerMode: centerModeValue,
  centerPadding: centerPaddingValue(slidesToShowValue),
};

const Portfolio = observer(() => {
  const { name } = store.getToggleTheme();
  const Icon = name === "light" ? PortfolioDarkIcon : PortfolioIcon;

  const sliderRef = useRef();
  const gotoNext = () => {
    sliderRef.current.slickNext();
  };
  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <PageWrapper id="portfolio">
      <PageConteiner>
        <HeaderTitle title="Недавно разработаны">
          <Icon />
        </HeaderTitle>
        <PortfolioCustom>
          <Ul>
            {propsPortfolioList?.length > 3 && <ButtonL onClick={gotoPrev} />}
            <SlickList>
              <SlickTrack>
                <Slider {...settings} ref={sliderRef}>
                  {getSlickList(propsPortfolioList)}
                </Slider>
              </SlickTrack>
            </SlickList>
            {propsPortfolioList?.length > 3 && <ButtonR onClick={gotoNext} />}
          </Ul>
          <ButtonLink navMenuLink="portfolio">
            <Button title="Открыть портфолио">
              <KeyIcon />
            </Button>
          </ButtonLink>
        </PortfolioCustom>
      </PageConteiner>
    </PageWrapper>
  );
});

export default Portfolio;

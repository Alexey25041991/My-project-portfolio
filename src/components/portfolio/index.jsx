import React, { useRef } from 'react';
import Slider from 'infinite-react-carousel';

import {
  PortfolioWrapper,
  PortfolioConteiner,
  PortfolioHeader,
  PortfolioLabel,
  PortfolioCustom,
  Ul,
  Li,
  ButtonL,
  ButtonR,
  Allportf,
  Link,
  Label,
  SlickList,
  SlickTrack,
  PortfolioImg,
  PortfolioList,
  PortfolioImgUrl,
  PortfolioData,
  PortfolioDataValue,
  PortfolioDataLabel,
  PortfolioDataText,
  PortfolioDataTime,
  PortfolioName,
  PortfolioNameList,
} from './style.js';

import './index.css';

import { ReactComponent as PortfolioIcon } from './icon/PortfolioIcon.svg';
import { ReactComponent as KeyIcon } from './icon/KeyIcon.svg';
import { ReactComponent as PortfolioLabelIcon } from './icon/PortfolioLabelIcon.svg';
import { ReactComponent as PortfolioTimeIcon } from './icon/PortfolioTimeIcon.svg';

import { propsSlickList } from './constants';

const getSlickList = (propsSlickList) =>
  propsSlickList.map((item) => (
    <Li key={item.id}>
      <PortfolioImg>
        <PortfolioList href={`${item.hrefImg}`}>
          <PortfolioImgUrl
            src={item.icon}
            width={item.widthIcon}
            height={item.heightIcon}
          />
        </PortfolioList>
      </PortfolioImg>
      <PortfolioData>
        <PortfolioDataValue>
          <PortfolioDataLabel>
            <PortfolioLabelIcon />
            <PortfolioDataText>{item.portfolioTextLabel}</PortfolioDataText>
          </PortfolioDataLabel>
          <PortfolioDataTime>
            <PortfolioTimeIcon />
            <PortfolioDataText>{item.portfolioDataTime}</PortfolioDataText>
          </PortfolioDataTime>
        </PortfolioDataValue>
      </PortfolioData>
      <PortfolioName>
        <PortfolioNameList href={`${item.hrefNameList}`}>
          {item.portfolioNameList}
        </PortfolioNameList>
      </PortfolioName>
    </Li>
  ));

const slidesToShowValue =
  propsSlickList?.length < 3 ? propsSlickList.length : 3;

const centerModeValue = propsSlickList?.length < 3;

const centerPaddingValue = (slidesToShowValue) => {
  switch (slidesToShowValue) {
    case 1:
      return 330;
    case 2:
      return 160;
    default:
  }
};

const settings = {
  initialSlide: 0,
  slidesToShow: slidesToShowValue,
  virtualList: true,
  className: 'styleSlider',
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  wheel: true,
  arrows: false,
  centerMode: centerModeValue,
  centerPadding: centerPaddingValue(slidesToShowValue),
};

const Portfolio = () => {
  const sliderRef = useRef();
  const gotoNext = () => {
    sliderRef.current.slickNext();
  };
  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

  // slickPrev
  return (
    <PortfolioWrapper id="portfolio">
      <PortfolioConteiner>
        <PortfolioHeader>
          <PortfolioIcon />
          <PortfolioLabel>Недавно разработаны</PortfolioLabel>
        </PortfolioHeader>
        <PortfolioCustom>
          <Ul>
            {propsSlickList?.length > 3 && <ButtonL onClick={gotoPrev} />}
            <SlickList>
              <SlickTrack>
                <Slider {...settings} ref={sliderRef}>
                  {getSlickList(propsSlickList)}
                </Slider>
              </SlickTrack>
            </SlickList>
            {propsSlickList?.length > 3 && <ButtonR onClick={gotoNext} />}
          </Ul>
          <Allportf>
            <Link href={`${'#'}`}>
              <KeyIcon />
              <Label>Открыть портфолио</Label>
            </Link>
          </Allportf>
        </PortfolioCustom>
      </PortfolioConteiner>
    </PortfolioWrapper>
  );
};

export default Portfolio;

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

const settings = {
  initialSlide: 0,
  slidesToShow: 1,
  virtualList: true,
  className: 'styleSlider',
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  wheel: true,
  arrows: false,
  //в случае меньше 3
  centerMode: true,
  // в случае одного
  centerPadding: 330,
  // в случае если 2
  // centerPadding: 160,
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
            <ButtonL onClick={gotoPrev} />
            <SlickList>
              <SlickTrack>
                <Slider {...settings} ref={sliderRef}>
                  {getSlickList(propsSlickList)}
                </Slider>
              </SlickTrack>
            </SlickList>
            <ButtonR onClick={gotoNext} />
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

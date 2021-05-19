import React, { useRef } from 'react';
import Slider from 'infinite-react-carousel';
import { Link } from 'react-router-dom';

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
  LinkPortfolio,
  Label,
  SlickList,
  SlickTrack,
  PortfolioImg,
  PortfolioImgUrl,
  PortfolioData,
  PortfolioDataValue,
  PortfolioDataLabel,
  PortfolioDataText,
  PortfolioDataTime,
  PortfolioName,
  PortfolioNameList,
} from './style.js';
import styled from 'styled-components/macro';
import './index.css';

import { ReactComponent as PortfolioIcon } from './icon/PortfolioIcon.svg';
import { ReactComponent as KeyIcon } from './icon/KeyIcon.svg';
import { ReactComponent as PortfolioLabelIcon } from './icon/PortfolioLabelIcon.svg';
import { ReactComponent as PortfolioTimeIcon } from './icon/PortfolioTimeIcon.svg';

import { propsPortfolioList } from '../../common/constants';
import { store } from '../../store';

const PortfolioListData = styled(Link)`
  display: flex;
  width: 285px;
  height: 292px;
  overflow: hidden;
  position: relative;
  top: 21px;
  left: 23px;
`;

const hendleClick = (hrefNameList) => {
  store.setPortfolioBlogPage(hrefNameList);
};

const getSlickList = (propsPortfolioList) =>
  propsPortfolioList.map((item) => (
    <Li key={item.id}>
      <PortfolioImg>
        <PortfolioListData
          to={`/portfolio/${item.hrefNameList}`}
          style={{ textDecoration: 'none' }}
          onClick={() => hendleClick(item.hrefNameList)}
        >
          <PortfolioImgUrl
            src={item.icon}
            width={item.widthIcon}
            height={item.heightIcon}
          />
        </PortfolioListData>
      </PortfolioImg>
      <PortfolioData>
        <PortfolioDataValue>
          <PortfolioDataLabel>
            <PortfolioLabelIcon />
            <PortfolioDataText>{item.portfolioNameList}</PortfolioDataText>
          </PortfolioDataLabel>
          <PortfolioDataTime>
            <PortfolioTimeIcon />
            <PortfolioDataText>{item.portfolioDataTime}</PortfolioDataText>
          </PortfolioDataTime>
        </PortfolioDataValue>
      </PortfolioData>
      <PortfolioName>
        <PortfolioListData
          to={`/portfolio/${item.hrefNameList}`}
          style={{ textDecoration: 'none' }}
          onClick={() => hendleClick(item.hrefNameList)}
        >
          <PortfolioNameList>{item.portfolioNameList}</PortfolioNameList>
        </PortfolioListData>
      </PortfolioName>
    </Li>
  ));

const slidesToShowValue =
  propsPortfolioList?.length < 3 ? propsPortfolioList.length : 3;

const centerModeValue = propsPortfolioList?.length < 3;

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
          <Link to="/portfolio" style={{ textDecoration: 'none' }}>
            <Allportf>
              <LinkPortfolio>
                <KeyIcon />
                <Label>Открыть портфолио</Label>
              </LinkPortfolio>
            </Allportf>
          </Link>
        </PortfolioCustom>
      </PortfolioConteiner>
    </PortfolioWrapper>
  );
};

export default Portfolio;

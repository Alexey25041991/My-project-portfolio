import React from 'react';

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

const Portfolio = () => (
  <PortfolioWrapper id="portfolio">
    <PortfolioConteiner>
      <PortfolioHeader>
        <PortfolioIcon />
        <PortfolioLabel>Недавно разработаны</PortfolioLabel>
      </PortfolioHeader>
      <PortfolioCustom>
        <Ul>
          <ButtonL />
          <SlickList>
            <SlickTrack>{getSlickList(propsSlickList)}</SlickTrack>
          </SlickList>
          <ButtonR />
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

export default Portfolio;

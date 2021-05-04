import React from 'react';
import { Link } from 'react-router-dom';

import {
  PortfolioWrapper,
  PortfolioConteiner,
  PortfolioHeader,
  PortfolioCustom,
  Ul,
  Li,
  PortfolioButtom,
  PortfolioButtomText,
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

import { ReactComponent as PortfolioLabelIcon } from './icon/PortfolioLabelIcon.svg';
import { ReactComponent as PortfolioTimeIcon } from './icon/PortfolioTimeIcon.svg';

import { propsButtonList } from './constants';
import { propsPortfolioList } from '../../common/constants';

const PortfolioListData = styled(Link)`
  display: flex;
  width: 285px;
  height: 292px;
  overflow: hidden;
  position: relative;
  top: 21px;
  left: 23px;
`;

const getButtonList = (propsButtonList) =>
  propsButtonList.map((item) => (
    <PortfolioButtom key={item.id}>
      <PortfolioButtomText>{item.portfolioButtonText}</PortfolioButtomText>
    </PortfolioButtom>
  ));

const getSlickList = (propsPortfolioList) =>
  propsPortfolioList.map((item) => (
    <Li key={item.id}>
      <PortfolioImg>
        <PortfolioListData to="/" style={{ textDecoration: 'none' }}>
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

const PortfolioList = () => (
  <PortfolioWrapper id="portfolio">
    <PortfolioConteiner>
      <PortfolioHeader>{getButtonList(propsButtonList)}</PortfolioHeader>
      <PortfolioCustom>
        <Ul>
          <SlickList>
            <SlickTrack>{getSlickList(propsPortfolioList)}</SlickTrack>
          </SlickList>
        </Ul>
      </PortfolioCustom>
    </PortfolioConteiner>
  </PortfolioWrapper>
);

export default PortfolioList;

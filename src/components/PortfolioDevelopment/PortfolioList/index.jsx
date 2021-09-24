import React, { useState } from "react";
import { Link } from "react-router-dom";

import PortfolioHeader from "../../PortfolioHeader";

import {
  PortfolioWrapper,
  PortfolioConteiner,
  PortfolioHeaderValue,
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
} from "./style.js";
import styled from "styled-components/macro";
import "./index.css";

import { ReactComponent as PortfolioLabelIcon } from "./icon/PortfolioLabelIcon.svg";
import { ReactComponent as PortfolioTimeIcon } from "./icon/PortfolioTimeIcon.svg";

import { propsButtonList } from "./constants";
import {
  propsPortfolioList,
  propsPortfolioListHome,
} from "../../common/constants";

const PortfolioListData = styled(Link)`
  display: flex;
  width: 285px;
  height: 292px;
  overflow: hidden;
  position: relative;
  top: 21px;
  left: 23px;
  text-decoration: none;
`;

const PortfolioListDataText = styled(Link)`
  display: flex;
  justify-content: center;
  overflow: hidden;
  text-decoration: none;
`;

const getButtonList = (propsButtonList, setPortfoliosValue) => {
  return propsButtonList.map((item) => (
    <PortfolioButtom
      key={item.id}
      onClick={() => setPortfoliosValue(item?.value)}
    >
      <PortfolioButtomText>{item.portfolioButtonText}</PortfolioButtomText>
    </PortfolioButtom>
  ));
};

const getSlickList = (propsPortfolioList, portfoliosValue) => {
  const filterPropsPortfolioList =
    portfoliosValue !== propsButtonList[0].value
      ? propsPortfolioList.filter((item) =>
          item.technologies.includes(portfoliosValue)
        )
      : propsPortfolioList;
  return filterPropsPortfolioList?.map((item) => (
    <Li key={item.id}>
      <PortfolioImg>
        <PortfolioListData to={`/portfolio/${item.hrefNameList}`}>
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
        <PortfolioListDataText to={`/portfolio/${item.hrefNameList}`}>
          <PortfolioNameList>{item.portfolioNameList}</PortfolioNameList>
        </PortfolioListDataText>
      </PortfolioName>
    </Li>
  ));
};
const PortfolioList = () => {
  const [portfoliosValue, setPortfoliosValue] = useState(
    propsButtonList[0].value
  );

  return (
    <>
      <PortfolioHeader item={propsPortfolioListHome} portfolio />
      <PortfolioWrapper>
        <PortfolioConteiner>
          <PortfolioHeaderValue>
            {getButtonList(propsButtonList, setPortfoliosValue)}
          </PortfolioHeaderValue>
          <PortfolioCustom>
            <Ul>
              <SlickList>
                <SlickTrack>
                  {getSlickList(propsPortfolioList, portfoliosValue)}
                </SlickTrack>
              </SlickList>
            </Ul>
          </PortfolioCustom>
        </PortfolioConteiner>
      </PortfolioWrapper>
    </>
  );
};

export default PortfolioList;

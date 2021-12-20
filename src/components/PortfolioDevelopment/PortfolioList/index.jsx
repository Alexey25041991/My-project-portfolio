import React, { useState } from "react";
import { Link } from "react-router-dom";

import PortfolioHeader from "../../PortfolioHeader";

import {
  PortfolioCustom,
  Ul,
  Li,
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

import { ReactComponent as PortfolioLabelIcon } from "../../common/icon/LabelIcon.svg";
import { ReactComponent as PortfolioTimeIcon } from "../../common/icon/TimeDarkIcon.svg";

import { propsList } from "./constants";
import {
  propsPortfolioList,
  propsPortfolioListHome,
} from "../../common/constants";

import PageWrapper from "../../common/PageWrapper";
import PageConteiner from "../../common/PageConteiner";

import NavPortfolioList from "./NavPortfolioList";

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

const getSlickList = (propsPortfolioList, portfoliosValue) => {
  const filterPropsPortfolioList =
    portfoliosValue !== propsList[0].value
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
  const [portfoliosValue, setPortfoliosValue] = useState(propsList[0].value);

  return (
    <>
      <PortfolioHeader item={propsPortfolioListHome} portfolio />
      <PageWrapper>
        <PageConteiner>
          <NavPortfolioList
            propsList={propsList}
            setPortfoliosValue={setPortfoliosValue}
          />
          <PortfolioCustom>
            <Ul>
              <SlickList>
                <SlickTrack>
                  {getSlickList(propsPortfolioList, portfoliosValue)}
                </SlickTrack>
              </SlickList>
            </Ul>
          </PortfolioCustom>
        </PageConteiner>
      </PageWrapper>
    </>
  );
};

export default PortfolioList;

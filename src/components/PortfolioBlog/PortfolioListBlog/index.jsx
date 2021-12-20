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
  PortfolioDataText,
  PortfolioDataTime,
  PortfolioName,
  PortfolioNameList,
  TextBlog,
  TextBlogValue,
  TextBlogHeader,
  TextBlogWrapper,
} from "./style.js";
import styled from "styled-components/macro";
import "./index.css";

import { ReactComponent as PortfolioTimeIcon } from "../../common/icon/TimeDarkIcon.svg";

import { propsButtonList } from "./constants";
import {
  propsPortfolioListBlog,
  propsPortfolioBlogHome,
} from "../../common/constants";

import PageWrapper from "../../common/PageWrapper";
import PageConteiner from "../../common/PageConteiner";

import NavPortfolioList from "./NavPortfolioList";

const PortfolioListData = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  overflow: hidden;
  position: relative;
  text-decoration: none;
`;

const PortfolioListDataText = styled(Link)`
  display: flex;
  overflow: hidden;
  text-decoration: none;
`;

const getSlickList = (propsPortfolioList, portfoliosValue) => {
  const filterPropsPortfolioList =
    portfoliosValue !== propsButtonList[0].value
      ? propsPortfolioList.filter((item) =>
          item.technologies.includes(portfoliosValue)
        )
      : propsPortfolioList;
  return filterPropsPortfolioList?.map((item) => (
    <Li key={item.id} className>
      <TextBlogHeader>{item.textBlogHeader}</TextBlogHeader>
      <TextBlogWrapper>
        <PortfolioImg>
          <PortfolioListData to={`/blog/${item.hrefNameList}`}>
            <PortfolioImgUrl
              src={item.icon}
              width={item.widthIcon}
              height={item.heightIcon}
            />
          </PortfolioListData>
        </PortfolioImg>
        <TextBlog>
          <PortfolioDataTime>
            <PortfolioTimeIcon />
            <PortfolioDataText>{item.portfolioDataTime}</PortfolioDataText>
          </PortfolioDataTime>
          <TextBlogValue>{item.portfolioText}</TextBlogValue>
          <PortfolioName>
            <PortfolioListDataText to={`/blog/${item.hrefNameList}`}>
              <PortfolioNameList>Показать больше</PortfolioNameList>
            </PortfolioListDataText>
          </PortfolioName>
        </TextBlog>
      </TextBlogWrapper>
    </Li>
  ));
};
const PortfolioListBlog = () => {
  const [portfoliosValue, setPortfoliosValue] = useState(
    propsButtonList[0].value
  );

  return (
    <>
      <PortfolioHeader item={propsPortfolioBlogHome} />
      <PageWrapper>
        <PageConteiner blog data-select-container>
          <PortfolioCustom>
            <Ul>
              <SlickList>
                <SlickTrack>
                  {getSlickList(propsPortfolioListBlog, portfoliosValue)}
                </SlickTrack>
              </SlickList>
            </Ul>
          </PortfolioCustom>
          <NavPortfolioList
            propsButtonList={propsButtonList}
            setPortfoliosValue={setPortfoliosValue}
          />
        </PageConteiner>
      </PageWrapper>
    </>
  );
};

export default PortfolioListBlog;

import React, { useLayoutEffect, useState } from "react";
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
  PortfolioDataText,
  PortfolioTagText,
  PortfolioDataTime,
  PortfolioName,
  PortfolioNameList,
  PortfolioHeaderValueWrapper,
  TextBlog,
  TextBlogValue,
  TextBlogHeader,
  TextBlogWrapper,
} from "./style.js";
import styled from "styled-components/macro";
import "./index.css";

import { ReactComponent as PortfolioTimeIcon } from "./icon/PortfolioTimeIcon.svg";

import { propsButtonList } from "./constants";
import {
  propsPortfolioListBlog,
  propsPortfolioBlogHome,
} from "../../common/constants";

const PortfolioListData = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  overflow: hidden;
  position: relative;
  // top: 20px;
  text-decoration: none;
`;

const PortfolioListDataText = styled(Link)`
  display: flex;
  // justify-content: center;
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
  const [handleScrollNav, setHandleScrollNav] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const boxNavValue = document
        .querySelector("[data-select-container]")
        .getBoundingClientRect();
      const topNav = boxNavValue.top;

      if (topNav <= 10) {
        setHandleScrollNav(true);
      } else {
        setHandleScrollNav(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [setHandleScrollNav, handleScrollNav]);

  return (
    <>
      <PortfolioHeader item={propsPortfolioBlogHome} />
      <PortfolioWrapper>
        <PortfolioConteiner data-select-container>
          <PortfolioCustom>
            <Ul>
              <SlickList>
                <SlickTrack>
                  {getSlickList(propsPortfolioListBlog, portfoliosValue)}
                </SlickTrack>
              </SlickList>
            </Ul>
          </PortfolioCustom>
          <PortfolioHeaderValueWrapper>
            <PortfolioHeaderValue handleScrollNav={handleScrollNav}>
              <PortfolioTagText>ПОПУЛЯРНЫЕ ТЕГИ</PortfolioTagText>
              {getButtonList(propsButtonList, setPortfoliosValue)}
            </PortfolioHeaderValue>
          </PortfolioHeaderValueWrapper>
        </PortfolioConteiner>
      </PortfolioWrapper>
    </>
  );
};

export default PortfolioListBlog;

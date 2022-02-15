import React, { useState } from "react";

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
  PortfolioListData,
  PortfolioListDataText,
} from "./style.js";

import { ReactComponent as PortfolioTimeIcon } from "../../common/icon/TimeDarkIcon.svg";

import { propsList } from "./constants";
import {
  propsPortfolioListBlog,
  propsPortfolioBlogHome,
} from "../../common/constants";

import PageWrapper from "../../common/PageWrapper";
import PageConteiner from "../../common/PageConteiner";

import NavPortfolioList from "./NavPortfolioList";

const getSlickList = (propsPortfolioList, portfoliosValue) => {
  const filterPropsPortfolioList =
    portfoliosValue !== propsList[0].value
      ? propsPortfolioList.filter((item) =>
          item.technologies.includes(portfoliosValue)
        )
      : propsPortfolioList;
  return filterPropsPortfolioList?.map((item) => (
    <Li key={item.id}>
      <TextBlogHeader>{item.textBlogHeader}</TextBlogHeader>
      <TextBlogWrapper>
        <PortfolioImg>
          <PortfolioListData
            href={`/blog/${item.hrefNameList}/#portfolioHeader`}
          >
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
            <PortfolioListDataText
              href={`/blog/${item.hrefNameList}/#portfolioHeader`}
            >
              <PortfolioNameList>Показать больше</PortfolioNameList>
            </PortfolioListDataText>
          </PortfolioName>
        </TextBlog>
      </TextBlogWrapper>
    </Li>
  ));
};
const PortfolioListBlog = () => {
  const [portfoliosValue, setPortfoliosValue] = useState(propsList[0].value);

  return (
    <>
      <PortfolioHeader item={propsPortfolioBlogHome} />
      <PageWrapper>
        <PageConteiner blog>
          <PortfolioCustom data-select-container>
            <Ul>
              <SlickList>
                <SlickTrack>
                  {getSlickList(propsPortfolioListBlog, portfoliosValue)}
                </SlickTrack>
              </SlickList>
            </Ul>
          </PortfolioCustom>
          <NavPortfolioList
            propsList={propsList}
            setPortfoliosValue={setPortfoliosValue}
          />
        </PageConteiner>
      </PageWrapper>
    </>
  );
};

export default PortfolioListBlog;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

import { store } from "../../../store";

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

import { ReactComponent as TimeDarkIcon } from "../../common/icon/TimeDarkIcon.svg";
import { ReactComponent as TimeIcon } from "../../common/icon/TimeIcon.svg";

import { propsList } from "./constants";
import {
  propsPortfolioListBlog,
  propsPortfolioBlogHome,
} from "../../common/constants";

import PageWrapper from "../../common/PageWrapper";
import PageConteiner from "../../common/PageConteiner";

import NavPortfolioList from "./NavPortfolioList";

const getSlickList = (propsPortfolioList, portfoliosValue, name) => {
  const filterPropsPortfolioList =
    portfoliosValue !== propsList[0].value
      ? propsPortfolioList.filter((item) =>
          item.technologies.includes(portfoliosValue)
        )
      : propsPortfolioList;

  const Icon = name === "light" ? TimeDarkIcon : TimeIcon;

  return filterPropsPortfolioList?.map((item) => (
    <Li key={item.id}>
      <TextBlogHeader>{item.textBlogHeader}</TextBlogHeader>
      <TextBlogWrapper>
        <PortfolioImg>
          <PortfolioListData>
            <Link to={`/blog/${item.hrefNameList}/#portfolioHeader`}>
              <PortfolioImgUrl
                src={item.icon}
                width={item.widthIcon}
                height={item.heightIcon}
              />
            </Link>
          </PortfolioListData>
        </PortfolioImg>
        <TextBlog>
          <PortfolioDataTime>
            <Icon />
            <PortfolioDataText>{item.portfolioDataTime}</PortfolioDataText>
          </PortfolioDataTime>
          <TextBlogValue>{item.portfolioText}</TextBlogValue>
          <PortfolioName>
            <PortfolioListDataText>
              <Link to={`/blog/${item.hrefNameList}/#portfolioHeader`}>
                <PortfolioNameList>Показать больше</PortfolioNameList>
              </Link>
            </PortfolioListDataText>
          </PortfolioName>
        </TextBlog>
      </TextBlogWrapper>
    </Li>
  ));
};
const PortfolioListBlog = observer(() => {
  const [portfoliosValue, setPortfoliosValue] = useState(propsList[0].value);
  const { name } = store.getToggleTheme();

  return (
    <>
      <PortfolioHeader item={propsPortfolioBlogHome} />
      <PageWrapper>
        <PageConteiner blog>
          <PortfolioCustom data-select-container>
            <Ul>
              <SlickList>
                <SlickTrack>
                  {getSlickList(propsPortfolioListBlog, portfoliosValue, name)}
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
});

export default PortfolioListBlog;

import React from "react";

import PortfolioHeader from "../../PortfolioHeader";

import {
  PortfolioCustom,
  Li,
  SlickTrack,
  PortfolioImg,
  PortfolioNameList,
  Projectwindow,
  PortfolioImgUrl,
} from "./style.js";

import PageWrapper from "../../common/PageWrapper";
import PageConteiner from "../../common/PageConteiner";

const getSlickList = (item) => {
  return (
    <Li>
      <PortfolioImg>
        {/* {window.open(
          'https://react-t-shirt-shop.herokuapp.com/',
          'width=600,height=400'
        )} */}

        <PortfolioNameList href={item?.hrefPortfolio} target="_blank">
          {item?.hrefPortfolio}
        </PortfolioNameList>

        <Projectwindow href={item?.hrefPortfolio} target="_blank">
          <PortfolioImgUrl src={item.icon} width={"936px"} />
        </Projectwindow>
      </PortfolioImg>
    </Li>
  );
};

const PortfolioValue = ({ item }) => (
  <>
    <PortfolioHeader item={item} portfolio />
    <PageWrapper>
      <PageConteiner>
        <PortfolioCustom>
          <SlickTrack>{getSlickList(item)}</SlickTrack>
        </PortfolioCustom>
      </PageConteiner>
    </PageWrapper>
  </>
);

export default PortfolioValue;

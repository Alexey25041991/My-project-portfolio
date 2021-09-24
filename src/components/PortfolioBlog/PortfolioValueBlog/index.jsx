import React from "react";

import PortfolioHeader from "../../PortfolioHeader";

import {
  PortfolioWrapper,
  PortfolioConteiner,
  PortfolioCustom,
  Li,
  SlickTrack,
  PortfolioImg,
  PortfolioNameList,
  Projectwindow,
  PortfolioImgUrl,
} from "./style.js";

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

        <Projectwindow>
          <PortfolioImgUrl src={item.icon} width={"936px"} />
        </Projectwindow>
      </PortfolioImg>
    </Li>
  );
};

const PortfolioValue = ({ item }) => (
  <>
    <PortfolioHeader item={item} />
    <PortfolioWrapper>
      <PortfolioConteiner>
        <PortfolioCustom>
          <SlickTrack>{getSlickList(item)}</SlickTrack>
        </PortfolioCustom>
      </PortfolioConteiner>
    </PortfolioWrapper>
  </>
);

export default PortfolioValue;

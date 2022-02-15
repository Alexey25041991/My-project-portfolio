import React, { useState } from "react";

import PortfolioHeader from "../../PortfolioHeader";

import { PortfolioCustom, Ul, SlickList, SlickTrack } from "./style.js";
import "./index.css";

import { propsList } from "./constants";
import {
  propsPortfolioList,
  propsPortfolioListHome,
} from "../../common/constants";

import PageWrapper from "../../common/PageWrapper";
import PageConteiner from "../../common/PageConteiner";
import PortfolioValue from "../../common/PortfolioValue";

import NavPortfolioList from "./NavPortfolioList";

const getSlickList = (propsPortfolioList, portfoliosValue) => {
  const filterPropsPortfolioList =
    portfoliosValue !== propsList[0].value
      ? propsPortfolioList.filter((item) =>
          item.technologies.includes(portfoliosValue)
        )
      : propsPortfolioList;
  return filterPropsPortfolioList?.map((item) => (
    <PortfolioValue data={item} portfolioList />
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

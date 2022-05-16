import React from "react";
import { Link } from "react-router-dom";

import {
  Li,
  PortfolioImg,
  PortfolioImgUrl,
  PortfolioData,
  PortfolioDataValue,
  PortfolioDataLabel,
  PortfolioDataText,
  PortfolioDataTime,
  PortfolioName,
  PortfolioNameList,
  PortfolioListData,
  PortfolioListDataText,
} from "./style";

import { ReactComponent as PortfolioLabelIcon } from "../../common/icon/LabelIcon.svg";
import { ReactComponent as PortfolioTimeIcon } from "../../common/icon/TimeDarkIcon.svg";

const PortfolioValueItem = ({ data, portfolioList }) => (
  <Li portfolioList={portfolioList}>
    <PortfolioImg>
      <PortfolioListData>
        <Link to={`/portfolio/${data.hrefNameList}/#portfolioHeader`}>
          <PortfolioImgUrl
            src={data.icon}
            width={data.widthIcon}
            height={data.heightIcon}
          />
        </Link>
      </PortfolioListData>
      <PortfolioData>
        <PortfolioDataValue>
          <PortfolioDataLabel>
            <PortfolioLabelIcon />
            <PortfolioDataText>{data.portfolioNameList}</PortfolioDataText>
          </PortfolioDataLabel>
          <PortfolioDataTime>
            <PortfolioTimeIcon />
            <PortfolioDataText>{data.portfolioDataTime}</PortfolioDataText>
          </PortfolioDataTime>
        </PortfolioDataValue>
      </PortfolioData>
    </PortfolioImg>
    <PortfolioName>
      <PortfolioListDataText>
        <Link to={`/portfolio/${data.hrefNameList}/#portfolioHeader`}>
          <PortfolioNameList>{data.portfolioNameList}</PortfolioNameList>
        </Link>
      </PortfolioListDataText>
    </PortfolioName>
  </Li>
);

PortfolioValueItem.defaulyProps = {
  data: {},
  portfolioList: false,
};

export default PortfolioValueItem;

import React from "react";

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

const PortfolioValue = ({ data, portfolioList }) => (
  <Li key={data.id} portfolioList={portfolioList}>
    <PortfolioImg>
      <PortfolioListData
        href={`/portfolio/${data.hrefNameList}/#portfolioHeader`}
      >
        <PortfolioImgUrl
          src={data.icon}
          width={data.widthIcon}
          height={data.heightIcon}
        />
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
      <PortfolioListDataText
        href={`/portfolio/${data.hrefNameList}/#portfolioHeader`}
      >
        <PortfolioNameList>{data.portfolioNameList}</PortfolioNameList>
      </PortfolioListDataText>
    </PortfolioName>
  </Li>
);

PortfolioValue.defaulyProps = {
  data: {},
  portfolioList: false,
};

export default PortfolioValue;

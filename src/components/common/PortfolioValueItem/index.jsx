import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

import {
  Li,
  Wrapper,
  WrapperPortfolioImg,
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

const PortfolioValueItem = ({ data, portfolioList }) => {
  useLayoutEffect(() => {
    const dataPortfolioList = document?.querySelectorAll(
      "[data-portfolio-list]"
    );

    const id = Number(data?.id) - 1;

    const srartRotate = (e) => {
      const cardItem = dataPortfolioList[id]?.querySelector(
        "[data-portfolio-list-item]"
      );

      const halfHeight = cardItem?.offsetHeight / 2;
      return (cardItem.style.transform =
        "rotateX(" +
        -(e.offsetY - halfHeight) / 10 +
        "deg) rotateY(" +
        (e.offsetX - halfHeight) / 10 +
        "deg)");
    };

    const stopRotate = (e) => {
      const cardItem = dataPortfolioList[id]?.querySelector(
        "[data-portfolio-list-item]"
      );
      return (cardItem.style.transform = "rotate(0)");
    };

    dataPortfolioList[id].addEventListener("mousemove", srartRotate);
    dataPortfolioList[id].addEventListener("mouseout", stopRotate);
    return () => {
      dataPortfolioList[id].removeEventListener("mousemove", srartRotate);
    };
  });

  return (
    <Wrapper>
      <Li portfolioList={portfolioList} data-portfolio-list>
        <WrapperPortfolioImg data-portfolio-list-item>
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
                  <PortfolioDataText>
                    {data.portfolioNameList}
                  </PortfolioDataText>
                </PortfolioDataLabel>
                <PortfolioDataTime>
                  <PortfolioTimeIcon />
                  <PortfolioDataText>
                    {data.portfolioDataTime}
                  </PortfolioDataText>
                </PortfolioDataTime>
              </PortfolioDataValue>
            </PortfolioData>
          </PortfolioImg>
        </WrapperPortfolioImg>
      </Li>
      <PortfolioName>
        <PortfolioListDataText>
          <Link to={`/portfolio/${data.hrefNameList}/#portfolioHeader`}>
            <PortfolioNameList>{data.portfolioNameList}</PortfolioNameList>
          </Link>
        </PortfolioListDataText>
      </PortfolioName>
    </Wrapper>
  );
};

PortfolioValueItem.defaulyProps = {
  data: {},
  portfolioList: false,
};

export default PortfolioValueItem;

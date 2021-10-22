import React from "react";

import PortfolioHeader from "../../PortfolioHeader";

import ComponentJavaScript from "./ComponentJavaScript";
import ComponentReact from "./ComponentReact";

const PortfolioValueBlog = ({ item }) => (
  <>
    <PortfolioHeader item={item} />
    {item.portfolioNameList === "JavaScript" && <ComponentJavaScript />}
    {item.portfolioNameList === "React" && <ComponentReact />}
  </>
);

export default PortfolioValueBlog;

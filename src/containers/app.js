import React from "react";

import HeaderConteiner from "../components/HeaderConteiner";
import FooterConteiner from "../components/FooterConteiner";
import ContentConteiner from "../components/ContentConteiner";
import PortfolioList from "../components/PortfolioDevelopment/PortfolioList";
import PortfolioValue from "../components/PortfolioDevelopment/PortfolioValue";
import PortfolioValueBlog from "../components/PortfolioBlog/PortfolioValueBlog";
import PortfolioListBlog from "../components/PortfolioBlog/PortfolioListBlog";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { observer } from 'mobx-react-lite';

import {
  propsPortfolioList,
  propsPortfolioListBlog,
} from "../components/common/constants";

import { AppWrapper } from "./style";

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <HeaderConteiner />
        <Switch>
          <Route path="/" exact component={ContentConteiner} />
          <Route path={`/portfolio`} exact component={PortfolioList} />
          {propsPortfolioList.map((item) => (
            <Route
              key={item.id}
              path={`/portfolio/${item.hrefNameList}`}
              exact
              render={() => <PortfolioValue key={item.id} item={item} />}
            />
          ))}
          <Route path={`/blog`} exact component={PortfolioListBlog} />
          {propsPortfolioListBlog.map((item) => (
            <Route
              key={item.id}
              path={`/blog/${item.hrefNameList}`}
              exact
              render={() => <PortfolioValueBlog key={item.id} item={item} />}
            />
          ))}
        </Switch>
        <FooterConteiner />
      </AppWrapper>
    </Router>
  );
};

export default App;

import React from "react";

import HeaderConteiner from "../components/Header";
import Footer from "../components/Footer";
import ContentConteiner from "../components/ContentConteiner";
import PortfolioList from "../components/PortfolioDevelopment/PortfolioList";
import PortfolioValue from "../components/PortfolioDevelopment/PortfolioValue";
import PortfolioListBlog from "../components/PortfolioBlog/PortfolioListBlog";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { observer } from 'mobx-react-lite';

import { propsPortfolioList } from "../components/common/constants";

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
              path={`/portfolio/${item.hrefNameList}`}
              exact
              render={() => <PortfolioValue key={item.id} item={item} />}
            />
          ))}
          <Route path={`/blog`} exact component={PortfolioListBlog} />
          {propsPortfolioList.map((item) => (
            <Route
              path={`/blog/${item.hrefNameList}`}
              exact
              render={() => <PortfolioValue key={item.id} item={item} />}
            />
          ))}
        </Switch>
        <Footer />
      </AppWrapper>
    </Router>
  );
};

export default App;

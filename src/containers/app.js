import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { observer } from "mobx-react";
import { store } from "../store";

import HeaderConteiner from "../components/HeaderConteiner";
import FooterConteiner from "../components/FooterConteiner";
import ContentConteiner from "../components/ContentConteiner";
import PortfolioList from "../components/PortfolioDevelopment/PortfolioList";
import PortfolioValue from "../components/PortfolioDevelopment/PortfolioValue";
import PortfolioValueBlog from "../components/PortfolioBlog/PortfolioValueBlog";
import PortfolioListBlog from "../components/PortfolioBlog/PortfolioListBlog";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { getDayTime } from "../components/common/utils";

import { propsPortfolioListBlog } from "../components/common/constants";

import ProgressBar from "../components/common/ProgressBar";
import ScrollTop from "../components/common/ScrollTop";
import Toast from "../components/common/Toast";

import { AppWrapper } from "./style";

const App = observer(() => {
  const { propsPortfolioList } = store.getToggleLang();
  const theme = store.getToggleTheme();
  const getOpenToastModal = store.getOpenToastModal();

  useEffect(() => {
    const dayTime = getDayTime();
    store.setToggleTheme(!dayTime);
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Toast
          openToastValue={getOpenToastModal}
          severity="success"
          text="Сообщение отправлено!"
          timer={6000}
        />
        <ProgressBar />
        <ScrollTop />
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
      </ThemeProvider>
    </Router>
  );
});

export default App;

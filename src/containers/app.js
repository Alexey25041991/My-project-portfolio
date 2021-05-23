import React from 'react';

import HeaderConteiner from '../components/Header';
import Footer from '../components/Footer';
import ContentConteiner from '../components/ContentConteiner';
import PortfolioList from '../components/PortfolioBlogPage/PortfolioList';
import PortfolioValue from '../components/PortfolioBlogPage/PortfolioValue';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { observer } from 'mobx-react-lite';

import { propsPortfolioList } from '../components/common/constants';

const App = observer(() => {
  return (
    <Router>
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
      </Switch>
      <Footer />
    </Router>
  );
});

export default App;

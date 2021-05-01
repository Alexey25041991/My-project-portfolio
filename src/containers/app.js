import React from 'react';

import HeaderConteiner from '../components/Header';
import Footer from '../components/Footer';
import ContentConteiner from '../components/ContentConteiner';
import PortfolioBlogPage from '../components/PortfolioBlogPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <HeaderConteiner />
    <Switch>
      <Route path="/" exact component={ContentConteiner} />
      <Route path="/portfolio" component={PortfolioBlogPage} />
    </Switch>
    <Footer />
  </Router>
);

export default App;

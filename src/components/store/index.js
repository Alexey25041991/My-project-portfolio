import { makeAutoObservable } from 'mobx';
import { PAGES_PORTFOLIO } from '../common/constants';

class Store {
  hrefValueNameList = PAGES_PORTFOLIO.PORTFOLIO_HOME;

  constructor() {
    makeAutoObservable(this);
  }

  setPortfolioBlogPage(hrefNameList) {
    this.hrefValueNameList = hrefNameList;
  }

  getPortfolioBlogPage() {
    return this.hrefValueNameList;
  }
}

export const store = new Store();

import { makeAutoObservable } from "mobx";

import { LIGHT_THEME, DARK_THEME } from "../components/common/themes";

class Store {
  opendToast = false;
  theme = LIGHT_THEME;

  constructor() {
    makeAutoObservable(this);
  }

  setOpenToast(open) {
    this.opendToast = open;
  }

  getOpenToast() {
    return this.opendToast;
  }

  setToggleTheme(themeDark) {
    this.theme = themeDark ? DARK_THEME : LIGHT_THEME;
  }

  getToggleTheme() {
    return this.theme;
  }
}

export const store = new Store();

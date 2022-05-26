import { makeAutoObservable } from "mobx";

import { LIGHT_THEME, DARK_THEME } from "../components/common/themes";
import { RUSSIAN_LANGUAGE, ENGLISH_LANGUAGE } from "../components/common/lang";

class Store {
  opendToast = false;
  theme = LIGHT_THEME;
  langText = RUSSIAN_LANGUAGE;
  routeLink = "";

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

  setToggleLang(LangEnglish) {
    this.langText = LangEnglish ? ENGLISH_LANGUAGE : RUSSIAN_LANGUAGE;
  }

  getToggleLang() {
    return this.langText;
  }

  setRouteLink(route) {
    this.routeLink = route;
  }

  getRouteLink() {
    return this.routeLink;
  }
}

export const store = new Store();

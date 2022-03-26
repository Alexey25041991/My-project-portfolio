import { makeAutoObservable } from "mobx";

class Store {
  opendToast = false;

  constructor() {
    makeAutoObservable(this);
  }

  setOpenToast(open) {
    this.opendToast = open;
  }

  getOpenToast() {
    return this.opendToast;
  }
}

export const store = new Store();

import { makeAutoObservable } from "mobx";

export type filterTypes = "default" | "tags" | "completed" | "outdated";

class AppStore {
  filterType: filterTypes = "default";
  tagsFilter: string = "";

  setTagFilter(tag: string) {
    this.tagsFilter = tag;
  }

  setFilter(type: filterTypes) {
    this.filterType = type;
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export const appStore = new AppStore();

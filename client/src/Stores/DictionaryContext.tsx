import React from "react";
import { DictionaryStore } from "./DictionaryStore";

interface IStoreContext {
  dictionaryStore: DictionaryStore;
}

const dictionaryStore = new DictionaryStore();

export const StoreContext = React.createContext<IStoreContext>({
  dictionaryStore,
});

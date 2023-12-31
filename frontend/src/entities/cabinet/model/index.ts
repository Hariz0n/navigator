import { cabinetSearch } from "@/entities/cabinet/lib/cabinet.type";
import { createEffect, createEvent, createStore } from "effector";

const clearSearchResults = createEvent();

const fetchSearchCabinets = createEffect<string, cabinetSearch[]>(
  async (searchString) => {
    clearSearchResults();
    const response = await fetch(
      `/api/campus/cabinets/list?value=${searchString}`
    );
    return await response.json();
  }
);

export const $cabinetsSearchStore = createStore<cabinetSearch[] | null>(null)
  .on(clearSearchResults, () => null)
  .on(fetchSearchCabinets.doneData, (state, cabinets) => cabinets);

export const cabinetActions = {
  fetchSearchCabinets,
  clearSearchResults,
};

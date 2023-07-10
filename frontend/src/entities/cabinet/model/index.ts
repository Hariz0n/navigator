import {cabinetSearch} from "@/entities/cabinet/lib/cabinet.type";
import {createEffect, createEvent, createStore} from "effector";

const fetchSearchCabinets = createEffect<string, cabinetSearch[]>(async (searchString) => {
  const response = await fetch(`http://192.168.1.111:8080/api/campus/cabinets/list?value=${searchString}`)
  return await response.json()
})

const clearSearchResults = createEvent()

export const $cabinetsSearchStore = createStore<cabinetSearch[] | null>(null)
  .on(clearSearchResults, state => null)
  .on(fetchSearchCabinets.doneData, (state, cabinets) => cabinets)

export const cabinetActions = {
  fetchSearchCabinets,
  clearSearchResults
}
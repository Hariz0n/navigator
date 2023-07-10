import {cabinet} from "@/entities/cabinet/lib/cabinet.type";
import {createEffect, createEvent, createStore} from "effector";

const fetchSearchCabinets = createEffect<string, cabinet[]>(async searchString => {
  const response = await fetch(`http://localhost:8080/api/campus/cabinets/list?value=${searchString}`)
  return await response.json()
})

const clearSearchResults = createEvent()

export const $cabinetsSearchStore = createStore<cabinet[] | null>([])
  .on(clearSearchResults, state => null)
  .on(fetchSearchCabinets.doneData, (state, cabinets) => cabinets)

export const cabinetActions = {
  fetchSearchCabinets,
  clearSearchResults
}
import {createEffect, createEvent, createStore} from "effector";
import {IRIT_MOCK} from "@/entities/campus/model/campus.mock";
import {campusData} from "@/entities/campus/lib/campusData.type";


const fetchCampusDataFx = createEffect<number, campusData>(async cabinetId => {
  // return IRIT_MOCK
  const response = await fetch(`http://localhost:8080/api/campus/cabinets/cabinet?numberID=${cabinetId}`)
  return await response.json()
})

const fetchSearchCabinets = createEffect<string, any>(params => {
  console.log(params)
})

const clearCampusData = createEvent()

export const $campusStore = createStore<campusData | null>(null)
  .on(fetchCampusDataFx.doneData, (state, payload) => payload)
  .on(clearCampusData, state => null)

export const campusActions = {
  clearCampusData,
  fetchCampusDataFx,
  fetchSearchCabinets
}


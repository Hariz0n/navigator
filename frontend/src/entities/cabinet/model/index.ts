import {createEffect, createEvent, createStore} from "effector";
import {IRIT_MOCK} from "@/entities/cabinet/model/campus.mock";

export type campusData = {
  campusID: campus
  campusName: string,
  address: {
    x: number,
    y: number
  },
  description: string,
  floors: flour[]
}

export type flour = {
  value: number,
  vectors: vector[]
}

export type vector = {
  x: number,
  y: number
}

export type campus = 'irit'

const fetchCampusDataFx = createEffect<string, campusData>(async params => {
  return IRIT_MOCK
})

const clearCampusData = createEvent()

export const $campusStore = createStore<campusData | null>(null)
  .on(fetchCampusDataFx.doneData, (state, payload) => payload)
  .on(clearCampusData, state => null)

export const campusActions = {
  clearCampusData,
  fetchCampusDataFx
}


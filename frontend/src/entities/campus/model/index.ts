import { createEffect, createEvent, createStore } from "effector";
import { campusData } from "@/entities/campus/lib/campusData.type";

const fetchCampusDataFx = createEffect<number, campusData>(
  async (cabinetId) => {
    const response = await fetch(
      `/api/campus/cabinets/cabinet?numberID=${cabinetId}`
    );
    return await response.json();
  }
);

const clearCampusData = createEvent();

export const $campusStore = createStore<campusData | null>(null)
  .on(fetchCampusDataFx.doneData, (state, payload) => payload)
  .on(clearCampusData, () => null);

export const campusActions = {
  clearCampusData,
  fetchCampusDataFx,
};

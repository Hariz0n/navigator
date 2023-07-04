import {campusData} from "@/entities/cabinet/model/index";

export const IRIT_MOCK: campusData = {
  campusID: 'irit',
  campusName: "ИРИТ-РТФ",
  address: [56.84085855450857, 60.65084854894501],
  description: "Вход в кампус со стороны улицы Мира 32. Необходим пропуск",
  floors: [
    {
      value: 1,
      vectors: [
        {x: 0, y: 0},
        {x: 2000, y: 2000},
        {x: 1000, y: 2000},
      ]
    },
    {
      value: 2,
      vectors: [
      ]
    }
  ]
}
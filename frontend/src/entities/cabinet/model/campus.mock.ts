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
        {x: 1000, y: 1850},
        {x: 1450, y: 1850},
        {x: 1450, y: 1720},
        {x: 1650, y: 1720},
        {x: 1650, y: 1200},
        {x: 1700, y: 1200},
      ]
    },
    {
      value: 2,
      vectors: [
      ]
    }
  ]
}
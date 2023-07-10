import {campusData} from "@/entities/campus/model/index";

// export const req = {
//   id: number,
//   name: 'p2'
// }[]
type cabs = {
  id: number,
  letter: string,
  num: number,
  alias: string
}[]

export const IRIT_MOCK: campusData = {
  campusID: 'irit',
  campusName: "ИРИТ-РТФ",
  address: {
    x: 56.84085855450857,
    y: 60.65084854894501
  },
  description: "Вход в кампус со стороны улицы Мира 32. Необходим пропуск",
  floors: [
    {
      value: 1,
      vectors: [
        {x: 1050, y: 1850},
        {x: 1475, y: 1850},
        {x: 1500, y: 1720},
        {x: 1700, y: 1720},
        {x: 1700, y: 1200},
        {x: 1750, y: 1200},
      ]
    },
    {
      value: 2,
      vectors: [
        {x: 1000, y: 1850},
        {x: 1450, y: 1850},
        {x: 1450, y: 1720},
        {x: 1650, y: 1720},
        {x: 1650, y: 1200},
        {x: 1700, y: 1200},
      ]
    }
  ]
}
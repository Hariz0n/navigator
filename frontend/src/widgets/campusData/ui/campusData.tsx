import React, {useEffect} from 'react';
import {useStore} from "effector-react";
import {$campusStore, campusActions} from "../../../entities/campus/model";
import classNames from "classnames";
import CampusMap from "@/features/cabinet-map/ui/campusMap";
import {Map, YMaps} from "@pbe/react-yandex-maps";
import {TransformComponent, TransformWrapper} from "react-zoom-pan-pinch";

export const CampusData = () => {
  const campusStore = useStore($campusStore)
  const pending = useStore(campusActions.fetchCampusDataFx.pending)

  if (campusStore === null && pending) {
    return (
      <section className={classNames('grid sm:grid-cols-2 gap-8')}>
        <div className="bg-grey w-2/5 h-40">
        </div>
      </section>
    )
  }

  if (campusStore === null) {
    return (
      <div>Для поиска кабинета введите его название</div>
    )
  }

  return (
    <section className={classNames('grid sm:grid-cols-2 gap-8')}>
      <CampusMap className="relative col-span-1 row-span-3"/>
      <div className="p-1 flex flex-col gap-2 col-span-1">
        <h3 className="text-3xl font-bold">Кампус: {campusStore.campusName}</h3>
        <address className="text-2xl italic">Адрес: очень длинный адресс</address>
        <p>{campusStore.descriptionCampus}</p>
      </div>
      <div>
        <h2 className="text-2xl mb-1 font-bold">Как пройти:</h2>
        <ul className="list-disc">
          {campusStore.cabinet.floors.map((fl, index) => (
            <li key={index}>{fl.descriptionStep}</li>
          ))}
        </ul>
      </div>
      <YMaps query={{lang: 'ru_RU'}} >
        <Map className="w-full h-60 shadow rounded-3xl overflow-hidden col-span-1" state={{center: [
            campusStore.addressCampus.x,
            campusStore.addressCampus.y
          ], zoom: 17}}></Map>
      </YMaps>
    </section>
  );
};
